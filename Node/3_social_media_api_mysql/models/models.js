const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	email: {type: DataTypes.STRING, allowNull: false, unique: true, isEmail: true },
	password: {type: DataTypes.STRING, allowNull: false},
	role: {type: DataTypes.STRING, allowNull: false, defaultValue: 'USER'},
	name: {type: DataTypes.STRING},
	country: {type: DataTypes.STRING},
}, { timestamps: false, sequelize, modelName: 'user' });

const Article = sequelize.define('article', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	title: {type: DataTypes.STRING, allowNull: false},
	description: {type: DataTypes.STRING, allowNull: false},
}, { timestamps: false, sequelize, modelName: 'article' });

const Comment = sequelize.define('comment', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	comment: {type: DataTypes.INTEGER, allowNull: false },
}, { timestamps: false, sequelize, modelName: 'comment' });

const Rate = sequelize.define('rate', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	rate: {type: DataTypes.STRING, allowNull: false },
}, { timestamps: false, sequelize, modelName: 'rate' });

// user -> article
User.hasMany(Article, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Article.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

// article -> comment
User.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Article.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Comment.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Comment.belongsTo(Article, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

// user -> rating
User.hasMany(Rate, {foreignKey: {name: 'user_giver_id', allowNull: false},  onDelete: 'CASCADE' });
User.hasMany(Rate, {foreignKey: {name: 'user_recipient_id', allowNull: false}, onDelete: 'CASCADE' });

module.exports = { User, Article, Comment };