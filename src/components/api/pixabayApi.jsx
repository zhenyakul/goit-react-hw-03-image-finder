import axios from 'axios';
import { Component } from 'react';

export class PixabayApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://pixabay.com/api/?q=cat&page=1&key=38607129-9108439e3ea986f49405f283d&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res => {
        this.setState({ data: res.data.hits });
      });
  }
  render() {
    const data = this.state;
    return console.log(data);
  }
}
