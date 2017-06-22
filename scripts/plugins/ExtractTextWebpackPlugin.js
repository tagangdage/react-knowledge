/**
 * Created by Administrator on 2017/6/20.
 */
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
module.exports = new ExtractTextPlugin(
	{
		filename: "css/[name].css?[contenthash:5]",//内容的hash码
		allChunks: true
	}
);