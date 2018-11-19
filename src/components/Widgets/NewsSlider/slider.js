import React, { PureComponent } from "react";
import axios from "axios";

import SliderTemplate from "./slider_template";

class NewsSlider extends PureComponent {
  state = {
    news: []
  };

  componentWillMount() {
    axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.amount}`).then(res => {
      //   console.log(res.data)
      this.setState({
        news: res.data
      });
    });
  }

  render() {
    return <SliderTemplate settings={this.props.settings} type={this.props.type} data={this.state.news}/>;
  }
}

export default NewsSlider;
