import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import Screen from "../components/Screen";
import Lsb from "../components/Screen/LSBEncode";
import Message from "../components/Screen/MessageEncode";
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
            <Screen order="second" id="lsb">
                <Lsb />
            </Screen>
            <Screen order="primary" id="message">
                <Message />
            </Screen>
            <Screen order="footer_second" id="summary">
                {/* <Summary /> */}
            </Screen>
        </Layout>
    );
};

export default encode;
