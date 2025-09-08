import { TermsProps } from "../../utils";
import { createDataContext } from "../DataProvider";

export const { Provider: OffersProvider, useData: useTerms } = createDataContext<TermsProps[]>();
