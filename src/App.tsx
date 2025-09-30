import { FC } from "react";
import AppRoutes from "./routes/AppRoutes";
import { AppProvider } from "./context";
import RedirectToHash from "./routes/RedirectToHash";

const App: FC = () => {
  return (
    <AppProvider>
      <RedirectToHash />
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
