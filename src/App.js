import React, {  memo, Suspense } from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div className="route-loading">loading...</div>}>
          <div className="App">
            {renderRoutes(routes)}
          </div>
        </Suspense>
      </Router> 
    </Provider>
  )
}

export default memo(App);
