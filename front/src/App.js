import { useCookies } from "react-cookie";
import React, {createContext, useState} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/ConstantComponents/Header/Header'
// import Footer from './components/ConstantComponents/Footer/Footer'
import routes from './components/routes'

export const MainContext = createContext();
// document.body.style.backgroundColor = "#eff0ea";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [isAuth, SetAuth] = useState(false);

  return (
    <MainContext.Provider value={{cookies, setCookie, removeCookie, isAuth, SetAuth}}>
      <Header />

      <div>
        <BrowserRouter>
          <Switch>
            {
              routes.map((route, i) => (
                  <Route key={i} component={route.component} path={route.path} exact={true} />
              ))
            }
          </Switch>
        </BrowserRouter>
      </div>

      {/* <Footer /> */}
    </MainContext.Provider>
  );
}

export default App;
