import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>aaa</div>
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
