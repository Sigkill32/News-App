import React, { Component } from "react";
import RadioButton from "./common/radioButton";
import { connect } from "react-redux";

class Sources extends Component {
  handleRadio = currentSource => {
    const { dispatch } = this.props;
    dispatch({ type: "SET_CURRENT_SOURCE", currentSource });
    dispatch({ type: "GET_NEWS" });
  };

  render() {
    const { sources, currentSource } = this.props;
    return (
      <div className="sources">
        <h4>SOURCES</h4>
        {sources.map(source => (
          <RadioButton
            key={source.id}
            className="source"
            value={source.id}
            name={source.name}
            checked={source.id === currentSource}
            onHandleRadio={() => this.handleRadio(source.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // sources: state.sources,
  // currentSource: state.currentSource
  sources: state.get("sources"),
  currentSource: state.get("currentSource")
});

export default connect(mapStateToProps)(Sources);
