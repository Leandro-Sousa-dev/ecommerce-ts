import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";

import { Screen } from "./components/ui/Screen/styles";
import { CartProvider } from "./Contexts/CartContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/variables"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Screen>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
          <GlobalStyle />
        </Screen>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
