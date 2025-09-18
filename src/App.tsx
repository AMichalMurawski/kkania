import { FC } from "react";
import AppRoutes from "./routes/AppRoutes";
import { AppProvider } from "./context";

const App: FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
