import React, { Component } from 'react';
import { getDataFromPixabay } from '../api/pixabayApi';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      isLoading: false,
      page: 1,
      modalOn: false,
      modalsrc: '',
    };
  }

  onSubmit = async evt => {
    evt.preventDefault();
    this.setState({ isLoading: true });
    const form = evt.currentTarget;
    const input = form.elements[1].value;
    try {
      this.setState({
        data: await getDataFromPixabay(input),
        loaded: true,
        input: input,
      });
    } catch (err) {
      console.log(err);
      return [];
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = async evt => {
    evt.preventDefault();
    this.setState({ isLoading: true });
    setTimeout(async () => {
      try {
        const newData = await getDataFromPixabay(
          this.state.input,
          this.state.page + 1
        );
        this.setState(prevState => ({
          data: [...prevState.data, ...newData],
          page: prevState.page + 1,
        }));
      } catch (err) {
        console.log(err);
      } finally {
        this.setState({ isLoading: false });
      }
    }, 500);
  };

  modalOn = evt => {
    const image = evt.currentTarget;
    this.setState({ modalsrc: image.dataset.modalsrc, modalOn: true });
  };

  render() {
    const { data, loaded, isLoading, modalOn, modalsrc } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {loaded ? (
          data && <ImageGallery data={data} modalOn={this.modalOn} />
        ) : (
          <></>
        )}
        {isLoading ? <Loader /> : <></>}
        {loaded ? <Button onClick={this.loadMore} /> : <></>}
        {modalOn ? <Modal src={modalsrc} /> : <></>}
      </div>
    );
  }
}
