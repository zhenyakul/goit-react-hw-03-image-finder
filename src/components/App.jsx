import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { getDataFromPixabay } from '../api/pixabayApi';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  onSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements[1].value;
    try {
      this.setState({ data: await getDataFromPixabay(input), loading: false });
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  render() {
    const { data, loading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {loading ? <li></li> : data && <ImageGallery data={data} />}
      </div>
    );
  }
}
