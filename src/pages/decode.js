import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import Screen from "../components/Screen";
import Lsb from "../components/Screen/LSBDecode";
import Upload from "../components/Screen/UploadEncode";
import Summary from "../components/Screen/SummaryDecode";
import Context from "../utils/context";
import axios from "axios";


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


const Decode = () => {
    const [okToken, setOkToken] = React.useState(false);
    const [admin, setAdmin] = React.useState(false);
    const [context, setContext] = React.useState({
        file: '',
        red: 0,
        green: 0,
        blue: 0,
        text: '',
        disabled: false,
    });


    React.useEffect(()=>{
        const tokenCheck = getCookie("tokenCheck");
        if(tokenCheck !== ""){
            axios.post(`https://rodwald.pl/steganolab/api/token.php?token=${tokenCheck}`).then(function(response){
                // console.log("response:", response.data.data)
                if(response.data.data != null){
                    setOkToken(true);
                }
            })
        }
    },[])

    React.useEffect(()=>{
        if(okToken) setAdmin(true);
        else setAdmin(false);
    },[okToken]);

    // React.useEffect(()=>{
    //     console.log("context: ", context)
    // },[context])
    return (
        <Layout>
            <Context.Provider value={[context, setContext]}>
            <Helmet>
                <html lang="pl" />
                <meta charSet="utf-8" />
                <title>SteganoLab - Odkryj wiadomość</title>
            </Helmet>
            <Screen order="header" id="decode">
                <Upload />
            </Screen>
            <Screen order="second" id="lsb">
                <Lsb />
            </Screen>
            <Screen order="footer_primary" id="summary">
                <Summary admin={true}/>
            </Screen>
            </Context.Provider>
        </Layout>
    );
};

export default Decode;
