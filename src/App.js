import "./style/style.css";
import HeroCardClassComponent from "./components/heroCard";
import { HttpHeroProvider } from "./providers/httpHeroProvider";
import { ChangeThemeProvider } from "./providers/changeThemeProvider";
import { ChangeThemeContext } from "./providers/changeThemeProvider";

function App() {
  return (
    <div className="App">
      <ChangeThemeProvider>
        <HttpHeroProvider>
          <ChangeThemeContext.Consumer>
            {({ theme, changeThemeToLight, changeThemeToDark }) => (
              <HeroCardClassComponent
                theme={theme}
                changeThemeToDark={changeThemeToDark}
                changeThemeToLight={changeThemeToLight}
              />
            )}
          </ChangeThemeContext.Consumer>
        </HttpHeroProvider>
      </ChangeThemeProvider>
    </div>
  );
}

export default App;
