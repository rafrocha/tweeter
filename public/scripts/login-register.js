// Being implemented on Feature Git BRANCH


// $(document).ready(function() {

// $(".log-link").click(function() {
//   let parent = $(this).parent();
//     if(parent.siblings().is(":visible")){
//       $(this).siblings().hide();
//     } else {
//   parent.siblings().show();
//   siblings().show();
// }
//   });

// $(".reg-link").click(function() {
//   let parent = $(this).parent();
//     if(parent.siblings().is(":visible")){
//       $(this).siblings().hide();
//     } else if() {
//   parent.siblings().show();
//   siblings().show();
// }
//   });


// });



// //Login page. Accessable from login link.
// app.get("/login", (req, res) => {
//   let templateVars = { urls: urlDatabase, user: users[req.session.user_id], user_id: req.session.user_id };
//   res.render("urls_login", templateVars);
// });


// app.post("/login", (req, res) => {
//   let emailExists = false;
//   let email = req.body.email;
//   let password = req.body.password;
//    FUNCAO LOGIN
//   let validEmailID = "";
//   for (var keys in users) {
//     if (users[keys].email === email) {
//       emailExists = true;
//       validEmailID = keys;
//     }
//   }
//   if (emailExists === false) {
//     res.status(403).send("Invalid credentials.");
//   }
//   if (!bcrypt.compareSync(password, users[validEmailID].password)) {
//     res.status(403).send("Invalid credentials.");
//   }
//   req.session.user_id = validEmailID;
//   res.redirect("/");
// });

// //Logs user out. POST from _header. All pages should have it. Except register and login.
// app.post("/logout", (req, res) => {
//   req.session = null;
//   res.redirect("/urls");
// });

// app.post("/register", (req, res) => {
//   let newUserId = generateRandomString();
//   let temObject = {};
//   if (req.body.email === "" || req.body.password === "") {
//     res.status(400).send("Please insert a valid username/password.");
//   }
//   for (var keys in users) {
//     if (users[keys].email === req.body.email) {
//       res.status(400).send("Please insert a valid username/password.");
//     }
//   }
//   temObject.id = newUserId;
//   temObject.email = req.body.email;
//   let nonHashedPW = req.body.password;
//   temObject.password = bcrypt.hashSync(nonHashedPW, 10);
//   users[newUserId] = temObject;
//   req.session.user_id = newUserId;
//   res.redirect("/urls");
// });


