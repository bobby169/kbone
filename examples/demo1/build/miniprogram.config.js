module.exports = {
	origin: 'https://test.miniprogram.com',
	entry: '/test/aaa',
	router: {
		index: [
			'/test/aaa',
			'/test/bbb',
		],
	},
	redirect: {	
		notFound: 'index',	
		accessDenied: 'index',
	},
	generate: {
		globalVars: [
            ['TEST_VAR_STRING', '\'miniprogram\''],
            ['TEST_VAR_NUMBER', '123'],
            ['TEST_VAR_BOOL', 'true'],
            ['TEST_VAR_FUNCTION', 'function() {return \'I am function\'}'],
			['TEST_VAR_OTHERS', 'window.document'],
			['open'],
		],
		autoBuildNpm: 'npm',
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},
	// appExtraConfig: {
	// 	useExtendedLib: {
	// 		kbone: true,
	// 	},
	// },
	runtime: {
		disableMpEvent: true, // 禁止抛出 tap、longpress 事件
	},
	global: {
		rem: true, // 是否支持 rem
        pageStyle: true, // 是否支持修改页面样式
	},
	projectConfig: {
		appid: 'wx14c7c4cd189644a1',
        projectname: 'kbone-demo1',
	},
	packageConfig: {
		author: 'wechat-miniprogram',
	},
}