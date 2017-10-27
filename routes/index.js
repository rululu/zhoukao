var express = require('express');
var router = express.Router();
var fs=require("fs");

router.post('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*');  // 解决跨域
	fs.readFile("public/index.txt","utf-8",function(err,data){//读取
		console.log(data)
		var arr=JSON.parse(data);
		arr.push({name:req.body.name,title:req.body.title})
		console.log(arr)
		fs.writeFile("public/index.txt",JSON.stringify(arr),function(err){//往txt文件里面写内容
			fs.readFile("public/index.txt","utf-8",function(err,nei){//读取文件
				var data=JSON.parse(nei);
				res.send({name:data});
			})
		})
	})
});

module.exports = router;
