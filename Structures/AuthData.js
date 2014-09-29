/**
 * @constructor
 * @param {string} username Otrzymany klucz użytkownika.
 * @param {string} password Przydzielone hasło.
 */
function AuthData(username, password) {
	this.username = username;
	this.password = password;
}


module.exports.AuthData = AuthData;