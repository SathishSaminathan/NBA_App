import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";

import Button from "../Buttons/buttons";
import { URL } from "../../../config";

import styles from "./newsList.css";

class NewsList extends Component {
  state = {
    item: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  request = (start, end) => {
    axios
      .get(`http://localhost:3004/articles?_start=${start}&_end=${end}`)
      .then(res => {
        //   console.log(res.data)
        this.setState({
          item: [...this.state.item, ...res.data]
        });
      });
  };

  loadMore = () => {
    var start = this.state.end;
    var end = this.state.end + this.state.amount;
    this.request(start, end);
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  renderNews = type => {
    let template = null;
    switch (type) {
      case "card":
        template = this.state.item.map((item, i) => (
          <CSSTransition
            key={i}
            timeout={500}
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter
            }}
          >
            <div>
              <div className={styles.newsList_item}>
                <Link to={`/articles/${item.id}`}>
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;
      default:
        template = null;
    }
    return template;
  };

  render() {
    return (
      <div>
        <TransitionGroup className="list" component="div">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          name="Load More News"
        />
        <div onClick={() => this.loadMore()}>Load More</div>
      </div>
    );
  }
}

export default NewsList;
