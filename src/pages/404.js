import * as React from "react"
import Layout from "../components/layout/Layout";
import Screen from "../components/Screen";
import * as classess from "@styles/module/404.module.css";
import image from "../images/404.svg"
const NotFoundPage = () => {
  return (
    <Layout>
      <Screen order={3}>
        <article className={classess.not_found}>
          <img src={image} alt="404" />
        </article>
      </Screen>
    </Layout>
  )
}

export default NotFoundPage
