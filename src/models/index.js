const User = require("./User");
const EmailCode = require("./emailCode");

EmailCode.belongsTo(User) //EmailCode  ->  userId
User.hasMany(EmailCode)