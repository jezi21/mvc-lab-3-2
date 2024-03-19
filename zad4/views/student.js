const NAZWA_PLIKU = "student.js";

function renderPage(props) {
  console.log("renderPage");
  console.log(props);
  console.log(props.name);
  return `
  <html lang=”pl”>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${NAZWA_PLIKU}</title>
  </head>
  <body>
  <h1>Student Profile</h1>

  <p>Imię: ${props.name}</p>
  <p>Nazwisko: ${props.lastname}</p>
  <p>Indeks: ${props.index}</p>
  <p>Wiek: ${props.age}</p>
  <p>Płeć: ${props.gender}</p>
  <p>Kierunek: ${props.studyField}</p>


  </body>
  
  </html>
  `
}
exports.renderPage = renderPage;

