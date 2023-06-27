<?php 
    //phpinfo();
?> 
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <button type="button" class="btn btn-primary">Base class</button>
    <script src="scripts.js"></script>
    <script>
        $.when( $.ready ).then(function() {
            console.log('Document is ready.');
        });       
    </script>
  </body>
</html>