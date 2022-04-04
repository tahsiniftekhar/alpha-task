const pool = require("../../config/database")

module.exports = {
    createUser: (data, callBack) => {
        pool.query(
            `select email from users where email = ?`,
            [data.email],
            (error, results) => {
                if (results.length === 0){
                    pool.query(
                        `insert into users(email, password) values(?,?)`,
                        [
                            data.email,
                            data.password
                        ],
                        (error, results) => {
                            if (error){
                                return callBack(error)
                            }
                            return callBack(null, results)
                        }
                    )
                }else{
                    return callBack(null, "email already exists!")
                }
            }
        )
    },

    getUserByEmail: (email, callBack) => {
        pool.query(
            `select * from users where email = ?`,
            [email],
            (error, results) => {
                if (error){
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },


}