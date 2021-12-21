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
  // courses
  const [courses, setCourses] = useState([]);
  const [checkState, setCheckState] = useState(
    // TODO: rename to this -> coursesSelected everywhere
    new Array(courses.length).fill(false)
  );

  // Adv Cmps
  const [advCourse, setAdvCourse] = useState([]);
  const [isChecked, setIsChecked] = useState(
    // TODO: rename to -> advanceCoursesSelected everywhere
    new Array(advCourse.length).fill(false)
  );
  const [isSignin, setIsSigin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  //empty array [] passed as 2nd arg is to tell useEffect that
  //your effect  is not dependant on any of value from props or state
  //so do not re-run otherwise useEffect will run on every update
  //on the component

  // console.log(isChecked);
  // console.log(checkState);

  // for (let check in isChecked) {
  //   //   console.log("this is total");
  //   if (isChecked) {
  //     console.log("thos are checked items", isChecked[check]);
  //   }
  // }

  for (let i in advCourse) {
    if (isChecked) {
      console.log(advCourse[i].classe);
    }
  }

  // console.log({ advCourse });
  // advCourse.map((item, key) => {
  //   // console.log(key);
  //   // console.log(ind);
  //   for (let i in isChecked) {
  //     if (item === i) {
  //       console.log("this one is checked", isChecked[item]);
  //     }
  //   }
  // });

  // Keep track of selected items
  // const total =
  //   isChecked.filter((item) => item).length +
  //   checkState.filter((item) => item).length;

  //setTotalItems(total)

  // console.log(
  //   isChecked.filter((item) => {
  //     console.log(item);
  //   })
  // );

  // console.log({ isChecked });
  // console.log({ total });

  return (
    <Router>
      <Links
        isSignin={isSignin}
        totalItems={isChecked.concat(checkState)}
        isLoggedIn={isLoggedIn}
      />

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

        <Route
          path="/SignUp"
          component={() => <SignUp setIsSigin={setIsSigin} />}
        />
        <Route
          path="/SignIn"
          component={() => <SignIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="signOut" component={() => <SignOut />} />
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
