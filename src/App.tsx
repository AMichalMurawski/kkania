import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { OffersProvider, RoutesProvider, SiteInfoProvider } from "./context";

const App: React.FC = () => {
  return (
    <SiteInfoProvider>
      <OffersProvider>
        <RoutesProvider>
          <AppRoutes />
        </RoutesProvider>
      </OffersProvider>
    </SiteInfoProvider>
  );
};

export default App;
