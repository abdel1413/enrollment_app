import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Links from "./components/NavBar/Links";
import Home from "./components/HomeComp/Home";
import About from "./components/Pages/about/About";
import AdvancedCmps from "./components/Pages/advCourseComp/AdvancedCmps";
import SignUp from "./components/Pages/SignUp";
import SignIn from "./components/signInComponent/SignIn";
import Courses from "./components/Pages/courseComponent/Courses";
import NotFound from "./components/Pages/NotFound";
import SignOut from "./components/SignOutComp/SignOut";
import { useState, useEffect } from "react";

function App() {
  const [totalItems, setTotalItems] = useState(0);
  // courses
  const [courses, setCourses] = useState([]);
  const [checkState, setCheckState] = useState(
    new Array(courses.length).fill(false)
  );

  useEffect(() => {
    const getCoursesData = async () => {
      const response = await axios.get("http://localhost:3001/courselist");
      setCourses(response.data);
      setCheckState(new Array(response.data.length).fill(false));
    };
    getCoursesData();

    const displayCourses = async () => {
      await axios
        .get("http://localhost:3001/advancedcourses")
        .then((response) => {
          setAdvCourse(response.data);
          setIsChecked(new Array(response.data.length).fill(false));
        });
    };
    displayCourses();
  }, []);

  // Adv Cmps
  const [advCourse, setAdvCourse] = useState([]);
  const [isChecked, setIsChecked] = useState(
    new Array(advCourse.length).fill(false)
  );

  // Keep track of selected items
  const total =
    isChecked.filter((item) => item).length +
    checkState.filter((item) => item).length;
  //setTotalItems(total)

  return (
    <Router>
      <Links totalItems={total} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />

        <Route
          path="/Courses"
          component={() => (
            <Courses
              checkState={checkState}
              setCheckState={setCheckState}
              courses={courses}
              setCourses={setCourses}
            />
          )}
        />

        <Route
          path="/AdvancedCmps"
          component={() => (
            <AdvancedCmps
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              advCourse={advCourse}
              setAdvCourse={setAdvCourse}
            />
          )}
        />

        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="signOut" component={SignOut} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
