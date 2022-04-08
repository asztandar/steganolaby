import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import Screen from "../components/Screen";
import Lsb from "../components/Screen/LSBEncode";
import Message from "../components/Screen/MessageEncode";
import Upload from "../components/Screen/UploadEncode";
import Summary from "../components/Screen/Summary";
import Context from "../utils/context";



const Encode = () => {

    const [context, setContext] = React.useState({
        file: '',
        red: 0,
        green: 0,
        blue: 0,
        text: ''
    });

    React.useEffect(()=>{
        // console.log("context: ", context)
    },[context])
    return (
        <Layout>
            <Context.Provider value={[context, setContext]}>
            <Helmet>
                <html lang="pl" />
                <meta charSet="utf-8" />
                <title>SteganoLab - Ukryj wiadomość</title>
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
                <Summary />
            </Screen>
            </Context.Provider>
        </Layout>
    );
};

export default Encode;
