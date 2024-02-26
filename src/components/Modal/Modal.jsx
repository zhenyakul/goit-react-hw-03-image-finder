import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  render() {
    const src = this.props;
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={src.src} alt="" className={css.image} />
        </div>
      </div>
    );
  }
}
