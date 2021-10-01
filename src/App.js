import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Links from './components/NavBar/Links';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import AdvancedCmps from './components/Pages/AdvancedCmps';
import SignUp from './components/Pages/SignUp';
import SignIn from './components/Pages/SignIn';
import Courses from './components/Pages/Courses';
import NotFound from './components/Pages/NotFound';
  

function App() {
  return (
    <Router>
      <Links/>
      <Switch>
        <Route exact path='/'  component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Courses' component={Courses} />
        <Route path='/AdvancedCmps' component={AdvancedCmps} />
        <Route path='/SignUp' component={SignUp}/>
        <Route path='/SignIn' component={SignIn}/>
        <Route  component={NotFound}/>
      </Switch>

    </Router>
  );
}

export default App;
