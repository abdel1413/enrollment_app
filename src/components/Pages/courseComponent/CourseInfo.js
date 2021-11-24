const coursesInfo = {
  "MAT 175": {
    prerequisites:
      "A grade of C (or better) in MAT 172 or a grade of C (or better) in both MAT 108 and  MAT 171 or placementby the Department of Mathematics. Co-req MAT 155.",
    // professorsSTR: "John Doe STR, Jeff Whatever STR",
    professors: [
      "Melvyn Nathanson",
      "William Quattromani",
      "Robert Schneiderman",
      "Tanja Haxhoviq",
      "Brian Wynne",
      "Zoltan Szabo",
      "Leon Karp",
      "Kevin Johnson",
      "Anthony Shiwmangal",
      "Rafael Castillo",
      "Samir Shah",
      "Michael Handel",
      "Chen - Yun Lin",
      "Libardo Valencia",
      "Alexander Abel",
      "Kaare Gjaldbaek",
    ],
  },
  "MAT 176": {
    prerequisites: "A grade of C or better in MAT 175. COREQ: Mat 156",
    //  professorsSTR: "Zoltan Szabo, Robert Schneiderman, Michael Handel, Brian Wynne, Chen-Yun Lin, Kevin Johnson, Renato Bettiol, Gabriel Pastor, Samir Shah, Joseph Fera, Tanja Haxhoviq",
    professors: [
      "Zoltan Szabo",
      "Robert Schneiderman",
      "Michael Handel",
      "Brian Wynne",
      "Tanja Haxhoviq",
      "Chen - Yun Lin ",
      "Kevin Johnson",
      "Renato Bettiol",
      "Gabriel Pastor",
      "Samir Shah",
      "Joseph Fera",
    ],
  },

  "MAT 226": {
    prerequisites: "A grade of C or better in MAT 176",
    professors: [
      "Christina Sormani",
      "Chen-Yun Lin",
      "Joseph Fera",
      "William Quattromani",
      "Renato Bettiol",
      "Brian Wynne",
      "Gabriel Pastor",
      "Zoltan Szabo",
      "Leon Karp",
    ],
  },

  "MAT 313": {
    prerequisites:
      "MAT 176, or placement by the Department of Mathematics and Computer Science",
    professors: [
      "Christina Sormani",
      "Chen-Yun Lin",
      "Joseph Fera",
      "William Quattromani",
      "Renato Bettiol",
      "Brian Wynne ",
      "Gabriel Pastor",
      "Zoltan Szabo",
      "Leon Karp",
    ],
  },

  "CMP 167": {
    prerequisites: "MAT 104 or departmental placement.",
    professors: [
      "Dr. Eric Ford",
      "Mr. Gerome Ferreira",
      "Prof. Katherine St. John",
      "Mr. Jeff Gitlin",
      "Prof. Megan Owen",
      "Mr. Claudio Falcon",
    ],
  },
  "CMP 232": {
    prerequisites:
      " At least a grade of B- in MAT 172 or departmental placement or permission.",
    professors: ["Matthew P. Johnson", "Mingxian Zhong", "Jonathan Rivera"],
  },
  "CMP 168": {
    prerequisites:
      "A grade of B- or better in CMP 167 or Departmental Permission. CIS 166 may be used as a PREREQ with Departmental Permission.",
    professors: ["Steven Fulakeza", "Lian Zhao"],
  },
  "CMP 334": {
    prerequisites:
      "CMP 167 (Programming Methods I), CMP 232 (Elementary Discrete Structures & Applications to Computer Science) or Departmental permission.",
    professors: ["Steven Fulakeza", "Dr. Katherine St. John", "Bowen Alpern"],
  },
  "CMP 338": {
    prerequisites: "CMP 232, and CMP 326 or CMP 168.",
    professors: ["Brian Murphy", "Sameh Fakhouri", "Eva-Maria Sofianos"],
  },
  "CMP 405": {
    prerequisites: "CMP 334 and CMP 338.",
    professors: ["Steven Fulakeza", "Fakhouri, Sameh", "Matthew Johnson"],
  },
  "CMP 410": {
    prerequisites: "CMP 338 and MAT 313.",
    professors: [" Matthew Johnson", "Gwang Jung"],
  },

  "CMP 420": {
    prerequisites: "CMP 338.",
    professors: ["Steven Fulakeza", "Dr. Katherine St. John", "Gwang Jung"],
  },

  "CMP 426": {
    prerequisites: " CMP 334 and CMP 338.",
    professors: ["Megan Owen", "Steven Fulakeza"],
  },
};

export default coursesInfo;
