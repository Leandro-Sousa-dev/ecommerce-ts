import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";

import { Screen } from "./components/ui/Screen/styles";
import { CartProvider } from "./Contexts/CartContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { NavProvider } from "Contexts/NavContext";
import { AuthProvider } from "Contexts/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Screen>
          <AuthProvider>
            <CartProvider>
              <NavProvider>
                <AppRoutes />
              </NavProvider>
            </CartProvider>
          </AuthProvider>
          <GlobalStyle />
        </Screen>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
