import React from 'react';
import Header from './Header';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentClass: 'wide',
    };
  }

  hamburgerHandler() {
    const newClass = this.state.currentClass === 'wide' ? 'narrow' : 'wide';
    this.setState({ currentClass: newClass });
  }

  render() {
    return (
        <aside className={`${this.props.css} ${this.state.currentClass}`}>
          <div
            className="hamburger-button"
            onClick={this.hamburgerHandler.bind(this)}>
            <img src="../assets/images/hamburger.svg" alt="" />
          </div>
          <Header search={this.props.search} />
          <SevenHour hourly={this.props.hourly} />
          <TenDay tenDay={this.props.tenDay} />
        </aside>
    );
  }
}
