import { useCookies } from "react-cookie";
import React, {createContext, useState} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/fixed/Header/Header'
// import Footer from './components/ConstantComponents/Footer/Footer'
import routes from './components/routes'

export const AuthContext = createContext();
// document.body.style.backgroundColor = "#eff0ea";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [isAuth, SetAuth] = useState(false);

  return (
    <AuthContext.Provider value={{cookies, setCookie, removeCookie, isAuth, SetAuth}}>
      <Header />

      <div>
        <BrowserRouter>
          <Switch>
            {
              routes.map((route, i) => (
                  <Route path={route.path} strict={route.strict} exact={route.exact} component={route.component} />
              ))
            }
          </Switch>
        </BrowserRouter>
      </div>

      {/* <Footer /> */}
    </AuthContext.Provider>
  );
}

export default App;
