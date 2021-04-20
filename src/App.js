import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Reports from "./routes/Reports";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/reports' component={Reports}></Route>
          <Route path='/products' component={Products}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
