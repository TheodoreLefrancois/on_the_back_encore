const bcrypt = require('bcrypt');

/**
 *
 * @param {string} password plain text password to hash using bcrypt
 * @returns {string} Hashed password
 */
function hashPassword(password) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
}

/**
 *
 * @param {string} plainPassword plain password to compare
 * @param {string} hashedPassword hashed password to compare (from your db)
 * @returns {boolean} equal or not
 */
function decodePassword(plainPassword, hashedPassword) {
  return bcrypt.compareSync(plainPassword, hashedPassword);
}

module.exports = {
  hashPassword,
  decodePassword,
};
