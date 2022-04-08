import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import Screen from "../components/Screen";
import EncodeIndex from "../components/Screen/EncodeIndex";
import DecodeIndex from "../components/Screen/DecodeIndex";
import Introduction from "../components/Screen/Introduction";
import Welcome from "../components/Screen/Welcome";

const IndexPage = () => {
    return (
        <Layout>
            <Helmet>
                <html lang="pl" />
                <meta charSet="utf-8" />
                <title>SteganoLab - Strona główna</title>
            </Helmet>
            <Screen order="header" id="welcome">
                <Welcome order={1} />
            </Screen>
            <Screen order="second" id="introduction">
                <Introduction />
            </Screen>
            <Screen order="primary" id="encode_index">
                <EncodeIndex />
            </Screen>
            <Screen order="footer_second" id="decode_index">
                <DecodeIndex />
            </Screen>
        </Layout>
    );
};

export default IndexPage;
