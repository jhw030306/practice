import React from "react";
import { AppProvider } from "./providers/App";
import { AppRoutes } from "./routes/App";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
