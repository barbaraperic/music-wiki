import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import '../App.css';
import Banner from './Banner'
import Form from './Form'
import Footer from './Footer'
import Artists from './Artists'
import ArtistPage from './ArtistPage'
import { ThemeProvider } from '../contexs/theme'

// todo: track route and page
// todo: dark mode
// todo: responsiveness
// todo: styling
// todo: netlify

const App = () => {
  
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prevState => ({
      theme: prevState === 'light' ? 'dark' : 'light'
    }))
  }

  return (
    <Router>
      <ThemeProvider value={{ theme, toggleTheme }} >
        <div className={theme}>
          <div id="main-container">
            <div id="site-content">
              <Switch>
                <Route exact path="/">
                  <Banner />
                  <Form />
                </Route>
                <Route exact path="/artists">
                  <Artists />
                </Route>
                <Route path="/artists/:id">
                  <ArtistPage />
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
