/**
 * Created by Administrator on 2017/6/19.
 */
//.htm、html文件使用html-url-loader来处理静态文件中的图片等资源地址
//处理具体方案以 url-loader、file-loader设置为准
module.exports = {
	test: /\.(html?)$/i,
	use: 'html-url-loader'
};