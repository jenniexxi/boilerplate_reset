import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StoreTest from "./StoreTest.tsx";
import { CookiesProvider } from "react-cookie";
import GlobalStyles from "@styles/globalStyles.ts";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme.ts";

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme.lightTheme}>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <StoreTest />
        </QueryClientProvider>
      </CookiesProvider>
    </ThemeProvider>
  );
}

export default App;
