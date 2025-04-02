const renderNewProductPage = (data) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Newest Product</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a><br />
          <a href="/product/add">Add product</a><br />
          <a href="/logout">Logout</a>
        </nav>
        <h1>Newest product</h1>
        ${
          data
            ? `<div>${data}</div>`
            : "<div>No new products available.</div>"
        }
      </body>
      </html>
    `;
  };
  
  module.exports = renderNewProductPage;
  