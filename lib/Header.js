import React from 'react';
import cityData from './cityList';
import PrefixTrie from 'prefixtrie';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      searchVal: '',
    };
  }

  componentDidMount() {
    PrefixTrie.populate(cityData.data);
  }

  handleChange(e) {
    this.setState({ searchVal: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.searchVal);
    this.setState({ searchVal: '' });
  }

  render() {
    return (
      <header>
        <h1>Weatherly</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Enter City, State or Zip"
            value={this.state.searchVal}
            onChange={this.handleChange.bind(this)} />
          <button type="submit">Go</button>
        </form>
      </header>
    );
  }
}
