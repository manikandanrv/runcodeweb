import React from "react";
import axios from "axios";
import Clock from "./../components/clock";
import WorkspacesTable from "../components/dashboard/WorkspaceTable";
import SalesChart from "../components/dashboard/SalesChart"
class Home extends React.Component {
	state = {
		details: [],
		dashboard_name: "",
		dashboard_description: "",
	};

	// tableData = [
	// 	{
	// 	  dashboard_name: "2022-aa-bb-cccc",
	// 	  dashboard_description: "asasdsdsfasdf",
	// 	},
	// ];	  
	 tableData = [
		{
		  avatar: "user2",
		  name: "Manikandan RV",
		  email: "manikandan.rv@gmail.com",
		  Request: "Chennai, India",
		  status: "pending",
		  weeks: "2022-02-04 to 2022-02-04",
		  budget: "3",
		},
		{
		  avatar: "user1",
		  name: "Prasanna",
		  email: "rprasannamalai@gmail.com",
		  Request: "Chennai, India",
		  status: "pending",
		  weeks: "2022-02-04 to 2022-02-04",
		  budget: "3",
		},
	];
	  

	componentDidMount() {
		let data;

		axios
			.get("http://127.0.0.1:8000/api/dashboards/")
			.then((res) => {
				data = res.data;
				this.setState({
					details: data,
				});
			})
			.catch((err) => {});
	}

	renderSwitch = (param) => {
		switch (param + 1) {
			case 1:
				return "primary ";
			case 2:
				return "secondary";
			case 3:
				return "success";
			case 4:
				return "danger";
			case 5:
				return "warning";
			case 6:
				return "info";
			default:
				return "yellow";
		}
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		axios
			.getUri("http://127.0.0.1:8000/api/dashboards/2", {
			})
			.then((res) => {
				this.setState({
					dashboard_name: res.dashboard_name,
					dashboard_description: res.dashboard_description,
				});
			})
			.catch((err) => {});
	};

	render() {
		return (
      <div>
              <SalesChart/>

            {this.state.details.map((detail, id) =>  (
            <div key={id}>
            <div >
                  <div >
                        <h1>{detail.dashboard_name} </h1>
                        <cite title="Source Title">
                        {detail.dashboard_description}</cite>
                  </div>
            </div>
            </div>
            )
        )}
      </div>

			// <div className="container jumbotron ">
			// 	<form onSubmit={this.handleSubmit}>
			// 		<div className="input-group mb-3">
			// 			<div className="input-group-prepend">
			// 				<span className="input-group-text"
			// 					id="basic-addon1">
			// 					{" "}
			// 					Description{" "}
			// 				</span>
			// 			</div>
			// 			<input type="text" className="form-control"
			// 				placeholder="Name"
			// 				aria-label="Username"
			// 				aria-describedby="basic-addon1"
			// 				value={this.state.dashboard_name} name="Name"
			// 				onChange={this.handleInput} />
			// 		</div>

			// 		<div className="input-group mb-3">
			// 			<div className="input-group-prepend">
			// 				<span className="input-group-text">
			// 				Description
			// 				</span>
			// 			</div>
			// 			<textarea className="form-control "
			// 					aria-label="With textarea"
			// 					placeholder="Description ....."
			// 					value={this.state.dashboard_description} name="dashboard_description"
			// 					onChange={this.handleInput}>
			// 			</textarea>
			// 		</div>

			// 		<button type="submit" className="btn btn-primary mb-5">
			// 			Submit
			// 		</button>
			// 	</form>

			// 	<hr
			// 		style={{
			// 			color: "#000000",
			// 			backgroundColor: "#000000",
			// 			height: 0.5,
			// 			borderColor: "#000000",
			// 		}}
			// 	/>

			// 	{this.state.details.map((detail, id) => (
			// 		<div key={id}>
			// 			<div className="card shadow-lg">
			// 				<div className={"bg-" + this.renderSwitch(id % 6) +
			// 							" card-header"}>Quote {id + 1}</div>
			// 				<div className="card-body">
			// 					<blockquote className={"text-" + this.renderSwitch(id % 6) +
			// 									" blockquote mb-0"}>
			// 						<h1> {detail.detail} </h1>
			// 						<footer className="blockquote-footer">
			// 							{" "}
			// 							<cite title="Source Title">{detail.name}</cite>
			// 						</footer>
			// 					</blockquote>
			// 				</div>
			// 			</div>
			// 			<span className="border border-primary "></span>
			// 		</div>
			// 	))}
			// </div>
		);
	}
}
export default Home;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock />);