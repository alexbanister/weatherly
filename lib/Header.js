import React from 'react';
import cityData from './cityList';
import PrefixTrie from 'prefixtrie';

const cities = new PrefixTrie();


export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      searchVal: '',
      suggestResults: [],
    };
  }

  componentDidMount() {
    if (localStorage.cityTrie) {
      cities.children = JSON.parse(localStorage.getItem('cityTrie'));
    } else {
      cities.populate(cityData.data);
    }
  }

  handleChange(e) {
    let suggestions = [];
    if (e.target.value) {
      suggestions = cities.getWords(e.target.value).slice(0, 10);
    }
    this.setState({
      searchVal: e.target.value,
      suggestResults: suggestions,
    });

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.searchVal);
    this.setState({ searchVal: '' });
  }

  handleAutocomplete(word) {
    this.setState({
      searchVal: '',
      suggestResults: [],
    });
    cities.selectWord(word, 1);
    localStorage.setItem('cityTrie', JSON.stringify(cities.children));
    this.props.search(word);
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
          <button type="submit" className="submit-btn">Go</button>
        </form>
        <div className="suggest-wrapper">
          <div className="suggestions">
            {
              this.state.suggestResults.map((word, i) => {
                return <h4
                  key={i}
                  onClick={this.handleAutocomplete.bind(this, word)}>
                    {word}
                  </h4>;
              })
            }
          </div>
        </div>
      </header>
    );
  }
}
