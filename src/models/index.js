const User = require("./User");
const EmailCode = require("./EmailCode");

EmailCode.belongsTo(User) //EmailCode  ->  userId
User.hasMany(EmailCode)