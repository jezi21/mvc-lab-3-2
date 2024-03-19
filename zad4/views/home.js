const NAZWA_PLIKU = "home.js";
function renderPage() {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${NAZWA_PLIKU}</title>
</head>
<body>

<h2>Formularz rejestracyjny</h2>

<form action="/student" method="post">
  <label for="name">Imię:</label><br>
  <input type="text" id="name" name="name"><br>
  <label for="lastname">Nazwisko:</label><br>
  <input type="text" id="lastname" name="lastname"><br>
  <label for="age">Wiek:</label><br>
  <input type="number" id="age" name="age"><br>
  <label for="gender">Płeć:</label><br>
  <select id="gender" name="gender">
    <option value="male">Mężczyzna</option>
    <option value="female">Kobieta</option>
    <option value="other">Inna</option>
  </select><br>
  <label for="index">Numer albumu:</label><br>
  <input type="number" id="index" name="index"><br>
  <label for="studyField">Kierunek:</label><br>
  <input type="text" id="studyField" name="studyField"><br><br>
  <input type="submit" value="Submit">
</form> 

</body>
</html>

  `
}


exports.renderPage = renderPage;