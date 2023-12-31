const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send(
    '<form action="/add-product" method="POST"> <input type="text" name="title"> <input type="number" name="size"> <button type="submit">Add Product</button></form>'
  );
});
// adding middleware
app.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

// app.use("/", (req, res, next) => {
//   // Allows the request to continue to the next middleware in line
//   res.send("<h1>Hello from Express!</h1>");
// });
//listen to the port
app.listen(3000);
