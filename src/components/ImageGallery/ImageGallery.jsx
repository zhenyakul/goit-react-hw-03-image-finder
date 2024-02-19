import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    return (
      <ul className="gallery">
        {data &&
          data.map((item, key) => {
            return (
              <ImageGalleryItem src={item.previewURL} id={item.id} key={key} />
            );
          })}
      </ul>
    );
  }
}
