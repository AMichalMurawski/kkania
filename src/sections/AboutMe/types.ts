import { AboutMeData } from "../../utils";

export type FlexDirection = 'row' | 'column'

export interface AboutMeProps {
    content: AboutMeData[];
    flexDirection: [FlexDirection, FlexDirection, FlexDirection];
}