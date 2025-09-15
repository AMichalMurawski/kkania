import { ReactNode } from "react"
import { GalleriesProvider, ModalProvider, OffersProvider, RoutesProvider, SiteContentProvider, SiteInfoProvider } from "./";


const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <SiteInfoProvider>
            <SiteContentProvider>
                <OffersProvider>
                    <RoutesProvider>
                        <ModalProvider>
                            <GalleriesProvider>
                                {children}
                            </GalleriesProvider>
                        </ModalProvider>
                    </RoutesProvider>
                </OffersProvider>
            </SiteContentProvider>
        </SiteInfoProvider>
    );
};

export default AppProviders;