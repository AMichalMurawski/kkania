import { FC } from "react";
import { Terms } from "../../sections";
import { TermsProvider } from "../../context";

const TermsPage: FC = () => {
    return (
        <TermsProvider>
            <Terms />
        </TermsProvider>
    )
};

export default TermsPage;