import React from "react";

import classes from './app.css';
import Layout from "../../components/Layout/layout";
import Main from "../../components/pages/main/main";
import Blog from "../../components/pages/blog/blog";
import Advice from "../../components/pages/advice/advice";
import Newsletter from "../../components/pages/newsletter/newsletter"

function App() {
  return (
    <div className={classes.container}>
      <Layout />
      <Main />
      <Blog />
      <Newsletter />
      <Advice />
    </div>
  );
}

export default App;
