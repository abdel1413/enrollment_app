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

  // Adv Cmps
  const [advCourse, setAdvCourse] = useState([]);
  const [isChecked, setIsChecked] = useState(
    new Array(advCourse.length).fill(false)
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

  // console.log(isChecked);
  // console.log(checkState);

  // for (let check in isChecked) {
  //   console.log("this is total");
  //   if (isChecked) {
  //     console.log(check);
  //   }
  // }

  // for (let i in advCourse) {
  //   console.log("course is here");
  //   if (isChecked === i) {
  //     console.log(advCourse.Classe);
  //   }
  // }

  // console.log({ advCourse });
  advCourse.map((ind, key) => {
    // console.log(key);
    console.log(ind);
    for (let i in isChecked) {
      if (key === i) {
        console.log(ind);
      }
    }
  });

  // Keep track of selected items
  const total =
    isChecked.filter((item) => item).length +
    checkState.filter((item) => item).length;
  //setTotalItems(total)

  console.log({ total });

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

/**1. Intro to team (Pictures, Names, Role)
2. Hook/Opening + Capstone Challenge Question
3. Empathize/User Research: What research did you do? With who? What were the user needs you uncovered?
4. Problem Statement: What was the problem you identified? Why is it important to address?
5. Solution: What is your prototype (high level)?
6. Solution: Share your prototype—how does it solve the problem?
7. Refine: What feedback did you get on the prototype? How would you change the solution?
8. Next steps: How would this be implemented?
9. Summary + Thank You: Summarize main points [where you started, what you worked through, where you landed] */
