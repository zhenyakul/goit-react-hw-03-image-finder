import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data, modalOn } = this.props;
    return (
      <ul className={css.gallery}>
        {data &&
          data.map((item, key) => {
            return (
              <ImageGalleryItem
                src={item.previewURL}
                id={item.id}
                key={key}
                modalsrc={item.largeImageURL}
                onClick={modalOn}
              />
            );
          })}
      </ul>
    );
  }
}
