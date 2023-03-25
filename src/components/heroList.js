import { useContext } from "react";
import { HttpHeroContext } from "../providers/httpHeroProvider";
import "../style/style.css";

const HeroList = (props) => {
  const httpCtx = useContext(HttpHeroContext);
  return (
    <div>
      {props.children}
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
    </div>
  );
};

export default HeroList;
