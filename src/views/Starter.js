import { Col, Row } from "reactstrap";
import RoomsView from "../components/dashboard/Rooms";
import Feeds from "../components/dashboard/Feeds";
import WorkspacesTable from "../components/dashboard/DashboardTable";
import TopCards from "../components/TopCards";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Rooms"
            subtitle="No of Rooms"
            earning="200"
            icon="bi bi-house"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="NoOfBookings"
            subtitle="No of Bookings"
            earning="100"
            icon="bi bi-people"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Checkins"
            subtitle="Check-ins Today"
            earning="10"
            icon="bi bi-key"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Checkouts"
            subtitle="Today's Check-outs"
            earning="8"
            icon="bi bi-box-arrow-right"
          />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
        <RoomsView />

        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <WorkspacesTable />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
