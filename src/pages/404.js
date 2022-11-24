import React from "react";
import Layout from "../layouts/layout";
import { Seo } from "../components/seo";

export const Head = () => (
  <Seo title="404: Not found Poop" />
);

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage