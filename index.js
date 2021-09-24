var http = require('http');
var mysql = require('mysql2');

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'db_user',
  password : 'db_password',
  database : 'db_name'
});

con.connect(function(err) {
  if (err) throw err;

  console.log('Connected!');

  // var sql = "CREATE TABLE IF NOT EXISTS customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

  // var sql = "INSERT INTO customers (name, address) VALUES ?";
  // var values = [
  //   ['John', 'Highway 71'],
  //   ['Peter', 'Lowstreet 4'],
  //   ['Amy', 'Apple st 652'],
  //   ['Hannah', 'Mountain 21'],
  //   ['Michael', 'Valley 345'],
  //   ['Sandy', 'Ocean blvd 2'],
  //   ['Betty', 'Green Grass 1'],
  //   ['Richard', 'Sky st 331'],
  //   ['Susan', 'One way 98'],
  //   ['Vicky', 'Yellow Garden 2'],
  //   ['Ben', 'Park Lane 38'],
  //   ['William', 'Central st 954'],
  //   ['Chuck', 'Main Road 989'],
  //   ['Viola', 'Sideway 1633']
  // ];
  // con.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });
});

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      result.forEach((item) => {
        res.write(item.name + ' ' + item.address + '<br>');
      })
      return res.end();
    });
  });
  // res.write('<h1>Hello world</h1>')
  // res.end();
}).listen(8080);
