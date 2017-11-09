var pg = require('pg')
const connectString = 'postgres://mparks@localhost:8080/mixed-drinks'
pg.connect(connectString, function (err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err)
  }
  client.query()
})
console.log(db)


module.exports = db