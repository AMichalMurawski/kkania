import { ReactNode } from "react"
import { GalleriesProvider, ModalProvider, OffersProvider, RoutesProvider, SiteContentProvider, SiteInfoProvider, TopGalleryProvider } from "./";
import { HelmetProvider } from "react-helmet-async";
import { ToastProvider } from "./ToastProvider";


const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <SiteInfoProvider>
            <SiteContentProvider>
                <OffersProvider>
                    <HelmetProvider>
                        <RoutesProvider>
                            <TopGalleryProvider>
                                <ModalProvider>
                                    <GalleriesProvider>
                                        <ToastProvider>
                                            {children}
                                        </ToastProvider>
                                    </GalleriesProvider>
                                </ModalProvider>
                            </TopGalleryProvider>
                        </RoutesProvider>
                    </HelmetProvider>
                </OffersProvider>
            </SiteContentProvider>
        </SiteInfoProvider>
    );
};

export default AppProviders;