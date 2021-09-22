import React, { Component } from "react";
import MockContent from "../mock/countriesRegion";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: "africa",
    };
    this.regionHandler = this.regionHandler.bind(this);
  }
  regionHandler(e) {
    this.setState({ region: e.target.value });
  }

  render() {
    console.log("home component", this.props);
    //console.log(this.state.region);
    return (
      <div>
        <h1>Home Component</h1>
        <select
          id="region"
          onChange={(e) => {
            return this.regionHandler(e);
          }}
        >
          {MockContent.regionDropDown.map((e) => {
            return (
              <option value={e.id} key={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>
        <button
          className="btn btn-primary"
          onClick={() => this.props.fetchCountryHandler(this.state.region)}
        >
          Fetch Data
        </button>
      </div>
    );
  }
}
