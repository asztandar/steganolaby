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
                <title>SteganoLaby - Strona główna</title>
            </Helmet>
            <Screen order={0} id="welcome">
                <Welcome order={1} />
            </Screen>
            <Screen order={1} id="introduction">
                <Introduction />
            </Screen>
            <Screen order={2} id="encode_index">
                <EncodeIndex />
            </Screen>
            <Screen order={4} id="decode_index">
                <DecodeIndex />
            </Screen>
        </Layout>
    );
};

export default IndexPage;
