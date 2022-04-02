import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import Screen from "../components/Screen";
import Lsb from "../components/Screen/LSBDecode";
import Upload from "../components/Screen/UploadEncode";
import Summary from "../components/Screen/SummaryDecode";
import Context from "../utils/context";

const Decode = () => {

    const [context, setContext] = React.useState({
        file: '',
        red: 0,
        green: 0,
        blue: 0,
        text: ''
    });

    React.useEffect(()=>{
        console.log("context: ", context)
    },[context])
    return (
        <Layout>
            <Context.Provider value={[context, setContext]}>
            <Helmet>
                <html lang="pl" />
                <meta charSet="utf-8" />
                <title>SteganoLaby - Odkryj wiadomość</title>
            </Helmet>
            <Screen order="header" id="decode">
                <Upload />
            </Screen>
            <Screen order="second" id="lsb">
                <Lsb />
            </Screen>
            <Screen order="footer_primary" id="summary">
                <Summary />
            </Screen>
            </Context.Provider>
        </Layout>
    );
};

export default Decode;
