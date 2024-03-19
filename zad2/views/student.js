const NAZWA_PLIKU = "student.js";
function renderPage() {
  return `
  <html lang=”pl”>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${NAZWA_PLIKU}</title>
  <body>
  <div>${NAZWA_PLIKU}</div>
  </body>
  </head>
  </html>
  `
}
exports.renderPage = renderPage;

