import React from "react";
import { HttpHeroContext } from "../providers/httpHeroProvider";

// Пагинатор (компонент с выбором странички) реализйте классовым компонентом, он должен менят цвет фона и в зависимости от выбранной темы.
//Consumer для провайдера теми(потім зроблю)

class PaginationClassComponent extends React.Component {
  static contextType = HttpHeroContext;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Mounted");
  }

  handlePrevPage = () => {
    console.log("prev");
    this.context.fetchHeros(this.context.data.info.prev);
  };

  handleNextPage = () => {
    console.log("next");
    this.context.fetchHeros(this.context.data.info.next);
  };

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default PaginationClassComponent;
