import Home from "../components/Home";
import { connect } from "react-redux";
import { country } from "../service/actions/actions";

const mapStateToProps = (state) => ({
  countries: state,
});

const mapDispatchToProps = (disptach) => ({
  fetchCountryHandler: (data) => disptach(country(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
