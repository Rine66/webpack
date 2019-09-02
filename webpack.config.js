var webpack=require('webpack');

module.exports = {
    entry: "./runoob1.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
	plugins:[
    new webpack.BannerPlugin('菜鸟教程 webpack 实例22')
    ],
    /*module: {
        loaders:[
            { test:/\.css$/,loader: "style-loader!css-loader" }
        ]
    }*/
	//https://webpack.js.org/concepts/loaders/新方式
	module: {
		rules: [
		  {
			test: /\.css$/,
			use: [
			  // style-loader
			  { loader: 'style-loader' },
			  // css-loader
			  {
				loader: 'css-loader',
				/*options: {
				  modules: true
				}*/
			  },
			  // sass-loader
			  //{ loader: 'sass-loader' }
			]
		  }
		]
    }
};