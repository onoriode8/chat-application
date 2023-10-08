import React from "react";

import classes from './app.css';
import Layout from "../../components/Layout/layout";
import Main from "../../components/pages/main/main";
import Blog from "../../components/pages/blog/blog";
import Advice from "../../components/pages/advice/advice";
import Newsletter from "../../components/pages/newsletter/newsletter"
import SunBurnt from "../../components/pages/sunburnt/sunburnt" 
import RotatingImages from "../../components/pages/rotatingImages/rotating_images"
import NewsletterEnd from "../../components/pages/newsletterEnd/newsletter-end";


function App() {
  return (
    <div className={classes.container}>
      <Layout />
      <Main />
      <Blog />
      <Newsletter />
      <Advice />
      <SunBurnt />
      <RotatingImages />
      <NewsletterEnd />
    </div>
  );
}

export default App;
