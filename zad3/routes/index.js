const home = require("../views/home");
const student = require("../views/student");

function handleHome(req, res) {
  res.write(home.renderPage());
  res.end();
}

function handleStudent(req, res) {
  res.write(student.renderPage());
  res.end();
}


exports.handleHome = handleHome;
exports.handleStudent = handleStudent;