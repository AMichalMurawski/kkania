import React, { ReactNode } from "react";
import { createDataContext } from "../DataProvider";
import { AboutMeContent } from "../../utils";

interface AboutMe {
    short: AboutMeContent[];
    long: AboutMeContent[];
}

const { Provider: BaseProvider, useData: useBaseData } = createDataContext<AboutMe>();

export const AboutMeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseProvider jsonFile="/config/aboutMe.json">{children}</BaseProvider>;
};

export const useAboutMe = () => useBaseData();
