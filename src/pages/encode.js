import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import Screen from "../components/Screen";
import Upload from "../components/Screen/UploadEncode";


const encode = () => {
    return (
        <Layout>
            <Helmet>
                <html lang="pl" />
                <meta charSet="utf-8" />
                <title>SteganoLaby - Ukryj wiadomość</title>
            </Helmet>
            <Screen order="header" id="encode">
                <Upload />
            </Screen>
        </Layout>
    );
};

export default encode;
