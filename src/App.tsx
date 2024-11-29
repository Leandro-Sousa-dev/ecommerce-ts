import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { GlobalStyle, Screen } from "./styles/global";
import { CartProvider } from "./Contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <Screen>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
        <GlobalStyle />
      </Screen>
    </BrowserRouter>
  );
}

export default App;
