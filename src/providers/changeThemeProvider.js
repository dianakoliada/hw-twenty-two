import React from "react";

export const ChangeThemeContext = React.createContext({
  theme: "light",
  changeThemeToDark: () => {},
  changeThemeToLight: () => {},
});

export class ChangeThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
    };
  }

  changeThemeToLight = () => {
    this.setState({
      theme: "light",
    });
  };

  changeThemeToDark = () => {
    this.setState({
      theme: "dark",
    });
  };

  getValue() {
    return {
      theme: this.state.theme,
      changeThemeToDark: this.changeThemeToDark,
      changeThemeToLight: this.changeThemeToLight,
    };
  }

  render() {
    return (
      <ChangeThemeContext.Provider value={this.getValue()}>
        {this.props.children}
      </ChangeThemeContext.Provider>
    );
  }
}
