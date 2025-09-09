import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ModalProvider, OffersProvider, RoutesProvider, SiteInfoProvider } from "./context";

const App: React.FC = () => {
  return (
    <SiteInfoProvider>
      <OffersProvider>
        <RoutesProvider>
          <ModalProvider>
            <AppRoutes />
          </ModalProvider>
        </RoutesProvider>
      </OffersProvider>
    </SiteInfoProvider>
  );
};

export default App;
