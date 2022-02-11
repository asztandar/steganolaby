import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";

const IndexPage = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SteganoLaby - Strona główna</title>
            </Helmet>
        </Layout>
    );
};

export default IndexPage;
