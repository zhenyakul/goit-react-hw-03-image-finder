import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { id, src } = this.props;
    return (
      <li className="gallery-item" id={id}>
        <img src={src} alt="" />
      </li>
    );
  }
}
