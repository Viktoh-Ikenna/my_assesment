import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { AppProvider } from "./pages/provider";
import { Home } from "./components/Home/Home";

function App() {
     return (
          <ThemeProvider theme={theme}>
               <AppProvider>
                    <Home />
               </AppProvider>
          </ThemeProvider>
     );
}

export default App;
