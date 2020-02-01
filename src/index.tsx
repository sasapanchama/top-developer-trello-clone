import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import InitPage from './components/pages/InitPage';
import TopPage from './components/pages/TopPage';
import BottomPage from './components/pages/BottomPage';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers())

firebase.initializeApp(firebaseConfig);

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/bottom" component={BottomPage} />
          <Route path="/top" component={TopPage} />
          {/* <Route path="/:user/:board" component={BottomPage} />
          <Route path="/:user" component={TopPage} /> */}
          <Route path="/" component={InitPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
