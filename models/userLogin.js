  module.exports = function(sequelize, DataTypes) {
  var UserLogin = sequelize.define("userlogin", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return UserLogin;
  
};
