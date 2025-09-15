import React from "react";
import { Terms } from "../../sections";
import { TermsProvider } from "../../context";

const TermsPage: React.FC = () => {
    return (
        <TermsProvider>
            <Terms />
        </TermsProvider>
    )
};

export default TermsPage;