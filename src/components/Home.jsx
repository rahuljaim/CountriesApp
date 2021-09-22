import React, { Component } from "react";

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
    console.log(this.props);
    console.log(this.state.region);
    return (
      <div>
        <h1>Home Component</h1>
        <select
          id="region"
          onChange={(e) => {
            return this.regionHandler(e);
          }}
        >
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
        </select>
        <button
          onClick={() => this.props.fetchCountryHandler(this.state.region)}
        >
          Fetch Data
        </button>
      </div>
    );
  }
}
