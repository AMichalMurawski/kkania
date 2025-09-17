export interface RouteConfig {
    path: string;
    navbar?: string;
    hero?: string;
    heroImageName?: string;
    heroImageType?: string;
}

export type RoutesMap = Record<string, RouteConfig>;