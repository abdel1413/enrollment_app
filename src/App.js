import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links from "./components/NavBar/Links";
import Home from "./components/HomeComp/Home.js";
import About from "./components/Pages/about/About";
import AdvancedCmps from "./components/Pages/advCourseComp/AdvancedCmps";
import SignUp from "./components/Pages/SignUp";
import SignIn from "./components/signInComponent/SignIn";
import Courses from "./components/Pages/courseComponent/Courses";
import NotFound from "./components/Pages/NotFound";
//import SignOut from "./components/SignOutComp/SignOut";

import { useState, useEffect } from "react";

// const test = true;

function App() {
  // courses
  const [courses, setCourses] = useState([]);
  const [test, setTest] = useState(false);
  const [courseSelected, setCourseSelected] = useState(
    new Array(courses.length).fill(false)
  );

  // Adv Cmps
  const [advCourse, setAdvCourse] = useState([]);
  const [advCourseSelected, setAdvCourseSelected] = useState(
    new Array(advCourse.length).fill(false)
  );
  const [isSignin, setIsSigin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [isSignOut, setIsSignOut] = useState(false);

  useEffect(() => {
    const getCoursesData = async () => {
      const response = await axios.get("http://localhost:3001/courselist", {
        withCredentials: false,
      });

      setCourses(response.data);
      setCourseSelected(new Array(response.data.length).fill(false));
    };

    getCoursesData();

    const displayCourses = async () => {
      await axios
        .get("http://localhost:3001/advancedcourses", {
          withCredentials: false,
        })
        .then((response) => {
          setAdvCourse(response.data);
          setAdvCourseSelected(new Array(response.data.length).fill(false));
        });
    };
    displayCourses();
  }, []);

  //empty array [] passed as 2nd arg is to tell useEffect that
  //your effect  is not dependant on any of value from props or state
  //so do not re-run otherwise useEffect will run on every update
  //on the component

  // Keep track of selected items
  // const total =
  //   isChecked.filter((item) => item).length +
  //   checkState.filter((item) => item).length;

  return (
    <Router>
      <Links
        isSignin={isSignin}
        test={test}
        setTest={setTest}
        //totalItems={advCourseSelected.concat(courseSelected)}
        totalCourseSelected={courseSelected}
        totalAdvCourseSelected={advCourseSelected}
        isLoggedIn={isLoggedIn}
        courseIsChecked={courseSelected}
        setCourseIsChecked={setCourseSelected}
        isChecked={advCourseSelected}
        setIsChecked={setAdvCourseSelected}
      />
      {/* <Home /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/Courses"
          element={
            <Courses
              test={test}
              courseIsChecked={courseSelected}
              setCourseIsChecked={setCourseSelected}
              courses={courses}
              setCourses={setCourses}
            />
          }
        />
        <Route
          path="/AdvancedCmps"
          element={
            <AdvancedCmps
              test={test}
              isChecked={advCourseSelected}
              setIsChecked={setAdvCourseSelected}
              advCourse={advCourse}
              setAdvCourse={setAdvCourse}
            />
          }
        />
        <Route path="/SignUp" element={<SignUp setIsSigin={setIsSigin} />} />
        {/* <Route path="/SignOut" exact element={SignOut} /> */}

        <Route
          path="/SignIn"
          element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route element={<NotFound />} />
      </Routes>
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
