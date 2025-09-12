import { ReactNode } from "react"
import { GalleriesProvider, ModalProvider, OffersProvider, RoutesProvider, SiteInfoProvider } from "./";


const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <SiteInfoProvider>
            <OffersProvider>
                <RoutesProvider>
                    <ModalProvider>
                        <GalleriesProvider>
                            {children}
                        </GalleriesProvider>
                    </ModalProvider>
                </RoutesProvider>
            </OffersProvider>
        </SiteInfoProvider>
    );
};

export default AppProviders;