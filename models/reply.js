'use strict';
test
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
  }, {});
  Reply.associate = function(models) {
  };
  return Reply;
};