import React from "react";

export class Red extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <span style={{color: 'red', fontWeight: 'bold'}}>
        {this.props.children}
      </span>
    );
  }
}
