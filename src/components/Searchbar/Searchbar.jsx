import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.props.onSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
