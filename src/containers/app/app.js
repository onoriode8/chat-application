import React, { useState } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'


import Navigation from '../../components/layouts/Navigation/navigation'
import Home from "../../components/home/home";
// import SideDrawer from '../../components/layouts/Navigation/sideDrawer/sideDrawer';
// import Backdrop from '../../components/layouts/Navigation/sideDrawer/backdrop/backdrop'

import asyncComponent from "../../hoc/asyncComponent";

import classes from './app.module.css'


const AsyncSideDrawer = asyncComponent(() => import('../../components/layouts/Navigation/sideDrawer/sideDrawer'))
const AsyncBackdrop = asyncComponent(() => import('../../components/layouts/Navigation/sideDrawer/backdrop/backdrop'))


function App() {
  const [sideDrawer, setSideDrawer] = useState(false);

  const sideDrawerOpenHandler = () => {
    // const prevState = sideDrawer;
    setSideDrawer(prevState => !prevState);
  }

  return (
    <React.Fragment>
      <div className={classes.container}>
        {sideDrawer ? 
         <div>
          <AsyncSideDrawer sideDrawerOpen={sideDrawer} sideDrawerOpenHandler={sideDrawerOpenHandler}/>
          <AsyncBackdrop sideDrawerOpenHandler={sideDrawerOpenHandler} />
            </div> : null }
         <Navigation 
           sideDrawerOpenHandler={sideDrawerOpenHandler} />
          <Switch>
            <Route path='/' exact component={Home} />
            {/* <Route path='shop' exact component={Shop} />
            <Route path='Hair-making' exact component={HairMaking} />
            <Route path='pedicure_manicure' exact component={Pedicure_Manicure} />
            <Route path='contact' exact component={Contact} /> */}
            <Redirect to='/' />
          </Switch>
       </div>
    </React.Fragment>
  );
}

export default App;
