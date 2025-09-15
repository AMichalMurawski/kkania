import { ReactNode } from "react"
import { GalleriesProvider, ModalProvider, OffersProvider, RoutesProvider, SiteContentProvider, SiteInfoProvider } from "./";
import { HelmetProvider } from "react-helmet-async";


const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <SiteInfoProvider>
            <SiteContentProvider>
                <OffersProvider>
                    <HelmetProvider>
                        <RoutesProvider>
                            <ModalProvider>
                                <GalleriesProvider>
                                    {children}
                                </GalleriesProvider>
                            </ModalProvider>
                        </RoutesProvider>
                    </HelmetProvider>
                </OffersProvider>
            </SiteContentProvider>
        </SiteInfoProvider>
    );
};

export default AppProviders;