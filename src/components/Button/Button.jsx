import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onClick } = this.props;
    return (
      <div className={css.buttonDiv}>
        <button className={css.button} type="submit" onClick={onClick}>
          Load more
        </button>
      </div>
    );
  }
}
