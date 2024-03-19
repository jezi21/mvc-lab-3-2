const fa = require("fs");
const home = require("../views/home");
const student = require("../views/student");
const querystring = require('querystring');


function handleHome(req, res) {
  res.write(home.renderPage());
  res.end();
}



function handleStudent(req, res) {
  if (req.method === "POST") {
    // get from request body data
    const body = [];
    let props;
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      props = querystring.parse(parsedBody);

      console.log(props);
      fa.writeFile(`${props.index}.txt`, JSON.stringify(props), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      res.write(student.renderPage(props));
      console.log(student.renderPage(props));
      res.end();
    });

  }
}

exports.handleHome = handleHome;
exports.handleStudent = handleStudent;