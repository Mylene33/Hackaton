import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact'
import About from './pages/About'
import WorkInProgress from './pages/WorkInProgress'


function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path='/workinprogress' component={WorkInProgress} />
    </Switch>
  );
}

export default App;
