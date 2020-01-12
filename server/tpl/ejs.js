// ejs模板

module.exports = `
  <!DOCTYPE html>
  <html>
    <head></head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Koa Server html</title>
      <link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js"></script>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1><%= name %></h1>
            <p><%= discribtion %></p>
          </div>
          <div class="col-md-4">
            <p><%= age %></p>
          <div>
        </div>
      </div>
    </body>
  </html>
`