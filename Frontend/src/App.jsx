import { CssBaseline } from "@mui/material";
import Header from "./Components/Header/Header";
import { useMode } from "./Theme";

function App() {
   const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
