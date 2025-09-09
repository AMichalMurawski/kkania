export interface RouteConfig {
    path: string;
    navbar?: string;
    hero?: string;
    heroImage?: string;
}

export type RoutesMap = Record<string, RouteConfig>;