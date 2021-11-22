// const CourseInfo =()=>{
//     const AbdvanceCmpProfs=()=>{
//         return (
//             <div>
//                 <ul>
//                     <li>Eva-Maria Sofianos</li>
//                     <li>Francis Cornacchiulo</li>
//                     <li>Matthew Johnson</li>
//                     <li>Liang Zhao</li>
//                     <li>Brian Murphy</li>
//                     <li>Sameh Fakhouri, Eva-Maria Sofianos</li>
//                     <li>Liang Zhao, Mingxian Zhong, Cameron Flowers,
//                         Brian Murphy, Itai Feigenbaum, David
//                         Ashe, Ross Dakin, Eva-Maria Sofianos,
//                         Robert Schneider, Sameh Fakhouri
//                     </li>
//                     <li>Sameh Fakhouri, Steven Fulakeza, Eva-Maria Sofianos,
//                         Megan Owen, Liang Zhao, Gwang, li Jung
//                     </li>
//                     <li> Sameh Fakhouri</li>
//                </ul>
//             </div>
//         )
//     }

//     const advCmpPrerequisit =()=>{
//         return (
//             <div>
//                 <ul>
//                     <li>CMP 326 or CMP 168</li>
//                     <li>CMP CMP 338</li>
//                     <li>CMP 338 and MAT 313</li>
//                     <li>CMP 338</li>
//                     <li>Pre-requisite CMP 338 and co-requisite MAT 226</li>
//                     <li>CMP 338</li>
//                     <li>Regular Non-Liberal Arts</li>
//                     <li>Departmental Permission</li>
//                     <li>Prior approval of Department Chair. Note: Not allowed
//                         for credit toward the B.A. in Computer Science.

//                     </li>
//                 </ul>
//             </div>
//         )
//     }

//     const mathPrerequisits = ()=>{
//         return(
//         <div>
//         <li>A grade of C (or better) in MAT 172 or a grade of C
//              (or better) in both MAT 108 and  MAT 171 or placement
//               by the Department of Mathematics. Co-req MAT 155.
//        </li>
//         <li>A grade of C or better in MAT 175. COREQ: Mat 156.</li>
//         <li>A grade of C or better in MAT 176</li>
//         <li>MAT 176</li>
//         <li>MAT 104 or placement by the Department of
//             Mathematics and Computer Science</li>
//         <li>MAT 172</li>
//         <li>CMP 167 with a minimum grade of B-
//             or Departmental Permission. CIS 166 may be used as
//              a PREREQ with Departmental Permission.
//        </li>
//         <li>CMP 230 and CMP 232 or Departmental permission.</li>
//         <li>CMP 232 or CMP 168</li>
//         <li>CMP 334 and CMP 338</li>
//         <li>CMP 338</li>
//         <li>CMP 338 and CMP 334</li>
//         </div>
//         )
//     }

//     courseProfs =()=>{
//         retun (
//             <div>
//                 <ul>
//                    <li>Melvyn Nathanson, William Quattromani, Robert Schneiderman, Tanja Haxhoviq, Brian
//                          Wynne, Zoltan Szabo, Leon Karp, Kevin Johnson, Anthony Shiwmangal, Rafael Castillo,
//                          Samir Shah, Michael Handel, Chen-Yun Lin, Libardo Valencia, Alexander Abel, Kaare
//                           Gjaldbaek
//                     </li>
//                    <li>Zoltan Szabo, Robert Schneiderman, Michael Handel, Brian Wynne, Chen-Yun Lin, Kevin
//                           Johnson, Renato Bettiol, Gabriel Pastor, Samir Shah, Joseph Fera, Tanja Haxhoviq
//                    </li>
//                     <li>Christina Sormani, Chen-Yun Lin, Joseph Fera, William Quattromani, Renato Bettiol,
//                           Brian Wynne, Gabriel Pastor, Zoltan Szabo, Leon Karp
//                     </li>
//                     <li>Christina Sormani, Kevin Johnson, Michael Handel, Jason Behrstock, William
//                            Quattromani, Zoltan Szabo, Melvyn Nathanson, Leon Karp, Brian Wynne
//                     </li>
//                     <li>Yanilda Ramos, Loric Madramootoo, Manal Zneit, Eva-Maria Sofianos, Steven Fulakeza,
//                            Ronen Samson, Pedro Ravel, Mirna Znait, Brian Murphy, Liang Zhao, Songqiao Li
//                     </li>
//                      <li>Itai Feigenbaum, Mingxian Zhong, Manal Zneit, Ronen Samson, Liang Zhao</li>
//                      <li>Eva-Maria Sofianos, Amell Ramos, Steven Fulakeza, Pedro Ravel</li>
//                      <li>Bowen Alpern</li>
//                      <li>Sameh Fakhouri, Brian Murphy, Eva-Maria Sofianos</li>
//                      <li>Steven Fulakeza, Matthew Johnson, Sameh Fakhouri</li>
//                      <li>Gwang Jung</li>
//                      <li>Steven Fulakeza, Gwang Jung</li>
//                  </ul>
//             </div>
//         )
//     }
// }

const coursesInfo = {
  "MAT 175": {
    prerequisites:
      "A grade of C (or better) in MAT 172 or a grade of C (or better) in both MAT 108 and  MAT 171 or placementby the Department of Mathematics. Co-req MAT 155.",
    professorsSTR: "John Doe STR, Jeff Whatever STR",
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
    prerequisites: "This Works",
    professorsSTR: "John Doe 2 Strr, Abdul Whatever STR",
    professors: ["John Doe 2", "Abdul Whatever"],
  },

  "MAT 226": {
    prerequisites: "jjjjj",
    professors: [],
  },
};

export default coursesInfo;
