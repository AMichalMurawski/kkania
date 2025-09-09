import React, { ReactNode } from "react";
import { RoutesMap } from "../../utils";
import { createDataContext } from "../DataProvider";

const { Provider: BaseProvider, useData: useBaseData } = createDataContext<RoutesMap>();

export const RoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseProvider jsonFile="/config/routes.json">{children}</BaseProvider>;
};

export const useRoutes = () => useBaseData();
