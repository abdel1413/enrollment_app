const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const sessions = require("express-session");
const cookiParser = require("cookie-parser");
const mysql = require("mysql"); //call mysql lib
const mysql2 = require("mysql");
const registerdb = require("mysql");
const bodyParser = require("body-parser");

// const { Redirect } = require("react-router-dom");

// {
//     origin: ["htttp://localhost3001"],
//     methods: ["GET", "POST", "PUT"],
//     credentials: true,
//   }
//app.use(cors());
// var corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
//cors(corsOptions);
app.use(cors()); //allows to connect outside api (Access-Control-Allow-Origin)

// app.use((req, res, next) => {
//   res.setHeader({ "Access-Control-Allow-Credentials": true });
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

// Add Access Control Allow Origin headers
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "htttp://localhost3001");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(express.json()); //use expres json  (midleware)
app.use(express.urlencoded({ extended: false }));
app.use(cookiParser());

// app.use(bodyParser.urlencoded({ extended: true }));
//  app.use((req, res, next)=>{
//      console.log('you cannot pass untill you call next')
//      next()
//  })
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    key: "userId",
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    name: "uniqueSessionID",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: oneDay },
  })
);

let session;

//create a connection with dababase

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "General_courses",
});
db.connect();

const db2 = mysql2.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "Advanced_Cmps",
});
db2.connect();

//connect the register db

const register = registerdb.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "Registration",
});
register.connect();

//post the info from frt end to database
//create the end point to send/post front end data to back end database

app.post("/create", (req, res) => {
  //req.query
  //req.body
  //req.header
  //req.params
  const classname = req.body.classname;
  const Name = req.body.Name;
  const Unit = req.body.Unit;

  // insert into database
  db.query(
    "INSERT INTO General(Class,Name, Unit) VALUES(?,?,?)",
    [classname, Name, Unit],

    //check if it's successfully inserted
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send("successful inserted");
      }
    }
  );
});

//create an end point  to get and  display data on the screen
app.get("/courseList", (req, res) => {
  db.query("SELECT * FROM General", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//create an endpoint for advance courses
app.get("/advancedcourses", (req, res) => {
  db2.query("SELECT * FROM Adv_CMPs", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

// app.get("/", (req, res) => {
//   if (req.session.loggedIn) {
//     res.setHeader("Content-Type", "text/html");
//     res.write("Welcome " + req.session.username + " to your dashboard");
//     res.write('<a href="/logout">Logout</a>');
//     res.end();
//   } else res.redirect("/login");
// });
// app.get("/signin", (req, res) => {
//   res.sendFile("login.html", { root: path.join(__dirname, "public") });
// });
// app.post(
//   "/authenticate",
//   bodyParser.urlencoded({ extended: false }),
//   (req, res, next) => {
//     // Actual implementation would check values in a database
//     if (req.body.username == "foo" && req.body.password == "bar") {
//       res.locals.username = req.body.username;
//       next();
//     } else res.sendStatus(401);
//   },
//   (req, res) => {
//     req.session.loggedIn = true;
//     req.session.username = res.locals.username;
//     console.log(req.session);
//     res.redirect("/dashboard");
//   }
// );
// app.get("/signout", (req, res) => {
//   req.session.destroy((err) => {});
//   res.send("Thank you! Visit again");
// });

//display all the users
// app.get("/", (req, res) => {
//   res.json(fakedatabase.Users);
// });

//get the user by id
// app.get("/user/:id", (req, res) => {
//   let found = false;
//   const { id } = req.params;

//   //loop thru the database then match each one with id stop
//   //there and return the result
//   fakedatabase.Users.map((user) => {
//     if (user.id === id) {
//       found = true;
//       return res.json(user);2321
//     }
//   });

//   //note should be outside the loop
//   //since the loop stop after finding and return the result
//   if (!found) {
//     res.status(404).json("not found");
//   }
// });

//now let create a registration and signin end point
//register --> use post (it may success or fail)

app.post("/register", (req, res) => {
  //post the body from front end by destructing it to server
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  // const { firstName, lastName, email, password } = req.body;
  console.log("more here ", req.body.email);
  console.log("password ", password);

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      // hashb = hash;
      console.log("inside bcrypt ", hash);
      //
      register.beginTransaction(function (err) {
        if (err) {
          throw err;
        }
        register.query(
          "INSERT INTO Registration.User2(firstName,lastName, email) VALUES(?,?,?)",
          [firstName, lastName, email],
          function (err, result) {
            if (err) {
              register.rollback(function () {
                res.status(400).json("fail to register");
                throw err;
              });
            } else {
              res.status(200).json("Successfully registered");
            }

            register.query(
              "INSERT INTO Registration.login(email,hash) VALUE(?,?)",
              [email, hash],
              function (err, result) {
                if (err) {
                  register.rollback(function () {
                    throw err;
                  });
                } else {
                  console.log("inside query", hash);
                  console.log(result);
                }

                register.commit(function (err) {
                  if (err) {
                    register.rollback(function () {
                      throw err;
                    });
                  }
                  console.log("Transaction Complete.");
                  register.end();
                });
              }
            );
          }
        );
      });
    });
  });

  //insert register data into database using INSERTION and
  // the add obje of data collected from front end

  // register.query(
  //   "INSERT INTO Registration.User(firstName,lastName, email) VALUES(?,?,?)",
  //   [firstName, lastName, email],
  //   (error, result) => {
  //     if (error) {
  //       res.status(400).json("This user already registered");
  //     } else {
  //       res.status(200).json("Successfully registered");
  //     }
  //   }
  // );

  //send the registerd date to front end
  //note we used length-1 to grab the last element of the array
  // res.json(register.User[register.User.length - 1]);
});

app.get("/signin", (req, res) => {
  console.log("session out", req.session);
  session = req.session.user;
  if (req.session) {
    res.send({ loggedIn: true, user: req.session.user });
    // res.status(200).send(`<a href=\'/logout'>click to logout</a>`);
  } else {
    res.send({ loggedIn: false });
  }
});

//signin  -->use post (success or fail
app.post("/signin", (req, res) => {
  console.log(req.body);
  let emailValue = req.body.email;
  let userPassword = req.body.password;
  console.log("email", emailValue);
  console.log("pass", userPassword);

  register.query(
    "SELECT * FROM Registration.login WHERE email=?",
    [emailValue],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      if (result.length > 0) {
        console.log("result", result.length);
        // console.log("userPassword ", userPassword);
        // console.log("resulthash ", result[0].hash);

        return bcrypt.compare(userPassword, result[0].hash, (e, response) => {
          console.log("response", response);
          if (response) {
            session = req.session;
            req.session.user = req.body.email;

            console.log("session created", req.session.user);
            // res.status(200).send(result[0].email);
            //res.status(200).send(` <a href=\'/logout'>click to logout</a>`);
            //res.redirect("/");
            // res.status(200).send(result);
            // res
            //   .status(200)
            //   .send(`${result} <a href=\'/logout'>click to logout</a>`);

            res.json({ username: req.session.user, logged: true });
            //res.redirect(/);
          } else {
            res.json({ logged: false });
            //console.log("bad credential");
            //return res
            //.status(401)
            //  .send("wrong user email/password combination!");
          }
        });
      } else {
        console.log("user doen't exist");
        return res.status(404).json("User doesn't exist");
      }
    }
  );
});

app.get("http://localhost/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

// app.post("/signin", (req, res) => {
//   let emailValue = req.body.email;
//   let userPassword = req.body.password;
//   console.log("useremail", emailValue);
//   console.log("userpassword", userPassword);

//   register.query(
//     "SELECT * FROM Registration.login WHERE email = ?",
//     [emailValue],
//     (error, result) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("this data email", result[0].email);
//         console.log("this data passwd", result[0].hash);
//         if (
//           req.body.email === result[0].email &&
//           req.body.password === result[0].password
//         ) {
//           console.log("it is working");
//         } else {
//           console.log("there is no matching");
//         }
//       }
//     }
//   );
//   // console.log("dataeamil", userdataemail[0]);

//   // if (
//   //   req.body.email === userdataemail &&
//   //   req.body.password === userdatapassword
//   // ) {
//   //   session = req.session;
//   //   session.userdataemail = req.body.email;
//   //   res.status(200).send(`<a href=\'/logout'> logout</a>`);
//   // } else {
//   //   res.status(401).send("Invalid User or password");
//   // }
// });

app.listen(3001, () => {
  console.log("we are runnig on port 3001");
});
