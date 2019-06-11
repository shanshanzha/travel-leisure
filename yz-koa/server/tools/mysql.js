const mysql = require('mysql');
const config = require('../config')

const pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'yzyz',
  password : '123456',
  database :'yzyz_user'
});

class Mysql {
    constructor () {

    }
    query (sqllang) {
      return new Promise((resolve, reject) => {
        pool.query(sqllang, function (error, results, fields) {
            if (error) {
                throw error
            };
            resolve(results)
            console.log("query ok!");
            // console.log('The solution is: ', results);
        });
      })
       
    }
}

module.exports = new Mysql()