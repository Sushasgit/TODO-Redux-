import React from 'react';

import style from './App.css';
import Header from '../Header/index';

class App extends React.Component {
  render() {
      return (
          <div className={style.content}>
              <div className={style.container}>
                  <Header />
              </div>

              <div className={style.container}>
                  <div className={style.todoList}>
                      teat
                  </div>
              </div>
          </div>
          );
    }
}

export default App;
