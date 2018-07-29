import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise'

import reducers from './reducers'
import PostIndex from './components/PostsIndex'
import PostsNew from "./components/PostsNew"
import PostsShow from "./components/PostsShow"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(App, document.querySelector('.container'));