import React from "react";

export class ChangeTheme extends React.Component {
  constructor(props) {
    super(props);
  }

  handleThemeChangeToDark = () => {
    this.props.changeThemeToDark();
  };

  handleThemeChangeToLight = () => {
    this.props.changeThemeToLight();
  };

  render() {
    return (
      //   <div>
      //     <button onClick={this.handleThemeChangeToDark}>Dark</button>
      //     <button onClick={this.handleThemeChangeToLight}>Light</button>
      //   </div>
      <div className="btn__position">
        <button
          onClick={() => {
            this.handleThemeChangeToDark();
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            this.handleThemeChangeToLight();
          }}
        >
          Light
        </button>
      </div>
    );
  }
}
