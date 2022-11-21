import PropTypes from "prop-types";
import React, { Component } from "react";

import axios from "axios";
import api from "./services/pixabay";
import { nanoid } from "nanoid";

class Chucks extends Component {
  static propTypes = {};

  state = { imgs: [], isLoading: false, error: null };

  fetchImgAxios = async () => {
    this.setState({ isLoading: true });

    try {
      const value = await api.fetchImg();
      const newImg = this.initImg(value);
      this.addImg(newImg);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  initImg = (value) => ({ id: nanoid(), img: value });

  addImg = (img) => {
    this.setState((oldState) => ({
      ...oldState,
      imgs: [...oldState.imgs, img],
    }));
  };

  componentDidMount() {
    // this.fetchimg();
    this.fetchImgAxios();
  }

  render() {
    const { imgs, isLoading, error } = this.state;

    const isNotEmpty = (arr) => arr.length > 0;
    const images = this.state.imgs;
    const flatImages = images.flatMap((img) => img.img);
    return (
      <section>
        <h3>Chucks</h3>
        <button onClick={this.fetchImgAxios}>Fetch new img</button>
        {error && <p>ERROR: Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {isNotEmpty(imgs) && (
          <ul>
            {this.state.imgs.map(({ id, img }) => (
              <li key={id}>
                {/* {console.log(this.state)} */}
                {/* {console.log(this.state.imgs)} */}
                {console.log({ flatImages })}
                {console.log({ images })}

                {/* <img src={img} alt=" x" /> */}
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

export default Chucks;
