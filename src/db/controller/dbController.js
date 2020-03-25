const { openDBConnection } = require('../openConection');

//ORM --> Abstracciones sobre la base de datos
//En este caso, usaremos sql raw query
async function insertUser(name, email, country) {
    const db = openDBConnection();
    try {
        let query = await db.query('INSERT INTO users VALUES (?, ?, ?, ?, ?)', 
        [
            email, 
            name, 
            country, 
            new Date(), 
            undefined
        ]);
        if(query) {
            return {
                succesfull: true
            }
        } else {
            return {
                succesfull: false
            }
        }
    } catch (err) {
        console.log(err)
        return {
            succesfull: false, 
            error: err
        }
    } finally {
        await db.close();
    }
}

async function updateUser(name, email, country) {

}

async function getAllUsers() {
    const db = openDBConnection();
    try {
        let query = await db.query('SELECT * FROM users');
        if(query) {
            return {
                succesfull: true, 
                data: query
            }
        } else {
            return {
                succesfull: false
            }
        }
    } catch (err) {
        console.log(err)
        return {
            succesfull: false, 
            error: err
        }
    } finally {
        await db.close();
    }
}

async function getUser(email) {
    const db = openDBConnection();
    try {
        let query = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if(query) {
            return {
                succesfull: true, 
                data: query
            }
        } else {
            return {
                succesfull: false
            }
        }
    } catch (err) {
        console.log(err)
        return {
            succesfull: false, 
            error: err
        }
    } finally {
        await db.close();
    }
}

async function deleteUser(email) {

}

module.exports.insertUser = insertUser;
module.exports.updateUser = updateUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
module.exports.deleteUser = deleteUser;