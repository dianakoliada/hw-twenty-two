import React from "react";
import { HttpHeroContext } from "../providers/httpHeroProvider";
import { ChangeTheme } from "../components/changeThemeComponent";

class HeroCardClassComponent extends React.Component {
  static contextType = HttpHeroContext;

  constructor(props) {
    super(props);
  }

  handlePrevPage = () => {
    this.context.fetchHeros(this.context.data.info.prev);
  };

  handleNextPage = () => {
    this.context.fetchHeros(this.context.data.info.next);
  };

  render() {
    return (
      <div className={this.props.theme === "light" ? "light" : "dark"}>
        <ChangeTheme
          changeThemeToDark={this.props.changeThemeToDark}
          changeThemeToLight={this.props.changeThemeToLight}
        ></ChangeTheme>
        {this.context.data?.results &&
          this.context.data.results.map((hero, index) => (
            <div className="hero-box">
              <p className="hero" key={`hero-kard-${index}`}>
                {hero.id}
              </p>
              <p className="hero" key={`hero-kard-${index}`}>
                {hero.name}
              </p>
              <p className="hero" key={`hero-kard-${index}`}>
                {hero.status}
              </p>
            </div>
          ))}
        <div className="btn-block">
          <button onClick={this.handlePrevPage}>Prev</button>
          <button onClick={this.handleNextPage}>Next</button>
        </div>
      </div>
    );
  }
}

export default HeroCardClassComponent;
