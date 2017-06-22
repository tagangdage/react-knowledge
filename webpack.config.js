
//------------------------------------------------------------------------------

module.exports = require(
	process.env.NODE_ENV === 'production'
		? './scripts/production.js'
		: './scripts/development.js'
);
