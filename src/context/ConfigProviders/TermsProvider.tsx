import React, { ReactNode } from "react";
import { TermsProps } from "../../utils";
import { createDataContext } from "../DataProvider";

const { Provider: BaseProvider, useData: useBaseData } = createDataContext<TermsProps>();

export const TermsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseProvider jsonFile="/config/terms.json">{children}</BaseProvider>;
};

export const useTerms = () => useBaseData();
