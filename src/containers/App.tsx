import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import User from './User'
import { IProps } from '../interface/app.Interface'

export default function App ({ content }: IProps) {
  return (
    <div>
       <Router>
      <div>
        <nav className="flex">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/">
            <div>home {content}</div>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}