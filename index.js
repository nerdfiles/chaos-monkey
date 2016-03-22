var
express = require("express"),
app = express(),
http = require('http');
require('shelljs/global');

function chaos_monkey(project) {
  var dir = __dirname;
  if (exec("find " + dir + "/../" + project + "/* -type f -exec rm -f '{}' \\;").code !== 0) {
    echo('Error: Find failed');
  }

  if (exec("cp -f " + dir + "/index.html /usr/share/nginx/html/").code !== 0) {
    echo('Error: Copy failed');
  }

  if (exec("service nginx restart").code !== 0) {
    echo('Error: nginx restart failed');
  }
}

app.get("/axe/:project", function (req, res) {
  var project = req.params.project || null;
  chaos_monkey(project);
  res.end();
});

app.set('view options', {layout:false});

function init () {
  var server = http.createServer(app);
  var port = '8080';
  console.log('Running on ' + port);
  server.listen(port);
}

init();
