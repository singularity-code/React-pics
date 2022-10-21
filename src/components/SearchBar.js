import React from "react";

// Controlled Component, This will store all data in the app
// Which is do not need to access DOM to get the data
class SearchBar extends React.Component {
  state = {term: ""};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({term: e.target.value.toUpperCase()})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
