import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="list-group ">
          {this.props.items.map(item => (
            <li
              key={item._id}
              onClick={() => this.props.onItemSelect(item)}
              className={
                item === this.props.selectedItem
                  ? "list-group-item active"
                  : "list-group-item "
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ListGroup;
