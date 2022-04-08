import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import Screen from "../components/Screen";
import Checking from "../components/Screen/Checking";

const Check = () => {
    return (
        <Layout>
            <Helmet>
                <html lang="pl" />
                <meta charSet="utf-8" />
                <title>SteganoLab - Sprawdzanie</title>
            </Helmet>
            <Screen order="header_footer" id="check">
                <Checking />
            </Screen>
        </Layout>
    );
};

export default Check;
