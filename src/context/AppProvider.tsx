import { ReactNode } from "react"
import { GalleriesProvider, ModalProvider, OffersProvider, RoutesProvider, SiteContentProvider, SiteInfoProvider } from "./";
import { HelmetProvider } from "react-helmet-async";
import { ToastProvider } from "./ToastProvider";


const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <SiteInfoProvider>
            <SiteContentProvider>
                <OffersProvider>
                    <HelmetProvider>
                        <RoutesProvider>
                            <ModalProvider>
                                <GalleriesProvider>
                                    <ToastProvider>
                                        {children}
                                    </ToastProvider>
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