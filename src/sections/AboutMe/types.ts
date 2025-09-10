import { AboutMeContent } from "../../utils";

export type FlexDirection = 'row' | 'column'

export interface AboutMeProps {
    content: AboutMeContent[];
    flexDirection: [FlexDirection, FlexDirection, FlexDirection];
}