import React from "react";

export const HttpHeroContext = React.createContext({
  heroList: [],
  fetchHeros: () => {},
});

export class HttpHeroProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchHeros("https://rickandmortyapi.com/api/character/?page=1");
  }

  fetchHeros = (page) => {
    fetch(page)
      .then((resp) => resp.json())
      .then((res) => {
        this.setState({
          data: res,
        });
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };

  getHeroCtx = () => {
    return {
      fetchHeros: this.fetchHeros,
      data: this.state.data,
    };
  };

  render() {
    return (
      <HttpHeroContext.Provider value={this.getHeroCtx()}>
        {this.props.children}
      </HttpHeroContext.Provider>
    );
  }
}

export default HttpHeroProvider;
