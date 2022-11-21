import "./App.css";
import { Component } from "react";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/Searchbar";
import styled from "@emotion/styled";

const FancyApp = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridGap: "16px",
  paddingBottom: "24px",
});

class App extends Component {
  state = {
    name: "",
  };
  handleFormSubmit = (name) => {
    this.setState({ name: name });
  };
  render() {
    return (
      <FancyApp>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery name={this.state.name} />
        {console.log(this.state)}
      </FancyApp>
    );
  }
}

export default App;
