import { ReactNode } from "react"
import { ModalProvider, OffersProvider, RoutesProvider, SiteInfoProvider } from "./";


const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <SiteInfoProvider>
            <OffersProvider>
                <RoutesProvider>
                    <ModalProvider>
                            {children}
                    </ModalProvider>
                </RoutesProvider>
            </OffersProvider>
        </SiteInfoProvider>
    );
};

export default AppProviders;