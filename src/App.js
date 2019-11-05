import React, { Component } from "react";
import Sources from "./components/sources";
import News from "./components/news";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import "./App.css";

class App extends Component {
  state = {
    initLoad: true
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_SOURCES" });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sources !== this.props.sources)
      this.setState({ initLoad: false });
  }

  render() {
    const { initLoad } = this.state;
    const { news } = this.props;
    return (
      <div className="App">
        {initLoad ? (
          <div className="loading-news">
            <Spinner
              className="spinner"
              fadeIn="none"
              name="line-scale-party"
            />
          </div>
        ) : (
          <>
            <Sources />
            {news ? (
              <News articles={news} />
            ) : (
              <h1 className="choose-src">Select a source to view news</h1>
            )}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sources: state.get("sources"),
  news: state.get("news")
});

export default connect(mapStateToProps)(App);
