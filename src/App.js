import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Links from './components/NavBar/Links';
import Home from './components/Pages/Home';
import About from './components/Pages/about/About';
import AdvancedCmps from './components/Pages/AdvancedCmps';
import SignUp from './components/Pages/SignUp';
import SignIn from './components/signInComponent/SignIn';
import Courses from './components/Pages/courseComponent/Courses';
import NotFound from './components/Pages/NotFound';
import SignOut from './components/SignOutComp/SignOut';
  

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
        <Route path='signOut' component={SignOut}/>
        <Route  component={NotFound}/>
      </Switch>

    </Router>
  );
}

export default App;
