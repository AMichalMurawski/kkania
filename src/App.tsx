import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { AppProvider } from "./context";

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
