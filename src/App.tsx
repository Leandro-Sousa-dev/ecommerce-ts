import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Container, GlobalStyle, Screen } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Screen>
        <Container>
          <AppRoutes />
          <GlobalStyle />
        </Container>
      </Screen>
    </BrowserRouter>
  );
}

export default App;
