import React, { Component } from 'react';

export default class List extends Component {
  createList(){
    const {listItems} = this.props;
    const list = listItems.map((item, index) =>
      <li key = {`listItem-${index}`}>{item}</li>
    );
    return list;
  }
  render() {
    return (
      <ul className={this.props.className}>
        {this.createList()}
      </ul>
    );
  }
}
