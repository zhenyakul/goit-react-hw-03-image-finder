import { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';
export class Loader extends Component {
  render() {
    return (
      <div className={css.divSpinner}>
        <Circles
          height="80"
          width="80"
          radius="9"
          color="purple"
          ariaLabel="three-dots-loading"
          wrapperClass={css.spinner}
        />
      </div>
    );
  }
}
