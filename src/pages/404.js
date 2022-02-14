import * as React from "react"
import Layout from "../components/layout/Layout";
import * as classess from "@styles/module/404.module.css";
import image from "../images/404.svg"
const NotFoundPage = () => {
  return (
    <Layout>
      <article className={classess.not_found}>
        <img src={image} alt="404" />
      </article>
    </Layout>
  )
}

export default NotFoundPage
