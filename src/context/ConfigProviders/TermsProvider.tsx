import { TermsProps } from "../../utils";
import { createDataContext } from "../DataProvider";

export const { Provider: TermsProvider, useData: useTerms } = createDataContext<TermsProps>();
