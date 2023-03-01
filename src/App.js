import {   BrowserRouter as Router,
	useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}</div>;
};

const AppWrapper = () => {
	return (
	  <Router>
		<App />
	  </Router>
	);
  };
  
export default AppWrapper;
// export default App;
