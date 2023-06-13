// import the msql2 library
import mysql from 'mysql2'
import connectionInfo from './secretStuff.js'

// connect to OUR msql database (give it OUR credentioals)
const connection = mysql.createConnection(connectionInfo)

// run a simple query to get 2 movies
connection.query(
    'SELECT * FROM movies',
    function (error, results) {
        console.log(error)
        // console.table the results
        console.table(results)
        connection.destroy()
        }
)



