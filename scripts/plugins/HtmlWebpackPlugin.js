/**
 * 组织需要编译的模板列表
 * Created by Administrator on 2017/6/19.
 */
'use strict';
//模板配置
const Path = require( "path" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const CONFIG = require( '../templates' );

module.exports = function( TPL_DIR )
{
	//导出模板列表
	const pages = [];

	for( let i = 0; i < CONFIG.length; i++ )
	{
		let conf = CONFIG[ i ];

		//图标
		if( !conf[ "favicon" ] )
			conf[ "favicon" ] = Path.resolve( TPL_DIR, "assets/favicon.ico" );

		//true or
		if( !conf[ "inject" ] )
			conf[ "inject" ] = true;

		conf.template = Path.resolve( TPL_DIR, conf.template );

		pages.push(new HtmlWebpackPlugin(conf));
	}
	return pages;

};