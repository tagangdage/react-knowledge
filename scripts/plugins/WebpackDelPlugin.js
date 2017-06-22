/**
 * Created by Administrator on 2017/6/20.
 */
const Path = require( 'path' );

//详情http://github.com/SMHFandA/webpack-del-plugin
const Webpackdelplugin = require( 'webpack-del-plugin' );

module.exports = function( DIST_DIR )
{
	return new Webpackdelplugin( {
		match: [
			Path.join( DIST_DIR, '*' )
		]
	} );
};
