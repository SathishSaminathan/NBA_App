import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";

import CardInfo from "../CardInfo/cardinfo";
import Button from "../Buttons/buttons";
import { URL } from "../../../config";

import styles from "./newsList.css";

class NewsList extends Component {
  state = {
    teams: [],
    item: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(res => {
        this.setState({
          teams: res.data
        });
      });
    }

    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(res => {
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
                  <CardInfo
                    teams={this.state.teams}
                    team={item.team}
                    date={item.date}
                  /> 
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
      </div>
    );
  }
}

export default NewsList;
