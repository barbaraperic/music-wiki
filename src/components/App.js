import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import '../App.css';
import Banner from './Banner'
import Form from './Form'
import Footer from './Footer'
import ArtistProfile from './ArtistProfile'

const App = () => {
  return (
    <Router>
      <div id="main-container">
        <div id="site-content">
          <Switch>
            <Route exact path="/">
              <Banner />
              <Form />
            </Route>
            <Route path="/artist">
              <ArtistProfile />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
