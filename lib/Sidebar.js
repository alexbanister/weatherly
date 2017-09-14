import React from 'react';
import Header from './Header';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentClass: true,
    };
  }

  render() {
    return (
        <aside>
          <div className="hamburger-button">
            <img src="../assets/images/hamburger.svg" alt="" />
          </div>
          <Header />
          <SevenHour hourly={this.props.hourly} />
          <TenDay tenDay={this.props.tenDay} />
        </aside>
    );
  }
}
