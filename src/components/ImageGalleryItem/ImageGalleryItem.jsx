import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { id, src, modalsrc, onClick } = this.props;
    return (
      <li className={css.galleryItem} id={id}>
        <img
          className={css.image}
          src={src}
          alt=""
          onClick={onClick}
          data-modalsrc={modalsrc}
        />
      </li>
    );
  }
}
