// i impoert express module
let express = require("express");
let app = express();
let port = 3000;

//i create a custom middleware to verify the time of the request.
app.use((req, res, next) => {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.sendStatus(404);
    res.send("page not found");
  }
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/pages/home.html");
});
app.get("/OurServices", function (req, res) {
  res.sendFile(__dirname + "/pages/OurServices.html");
});
app.get("/ContactUs", function (req, res) {
  res.sendFile(__dirname + "/pages/ContactUs.html");
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
