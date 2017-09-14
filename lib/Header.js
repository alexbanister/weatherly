import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      searchVal: '',
    };
  }

  render() {
    return (
      <header>
        <h1>Weatherly</h1>
        <input type="text" />
      </header>
    );
  }
}
