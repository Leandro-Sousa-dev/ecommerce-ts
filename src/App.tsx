import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";

import { Screen } from "./components/ui/Screen/styles";
import { CartProvider } from "./Contexts/CartContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Screen >
          <CartProvider>
            <AppRoutes />
          </CartProvider>
          <GlobalStyle />
        </Screen>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
