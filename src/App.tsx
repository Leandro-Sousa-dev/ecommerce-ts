import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyle, Screen } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Screen>
        <AppRoutes />
        <GlobalStyle />
      </Screen>
    </BrowserRouter>
  );
}

export default App;
