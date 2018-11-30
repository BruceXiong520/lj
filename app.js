const express = require("express");
var bodyParser = require('body-parser');
var server = express();
var userRouter = require("./routers/user.js");
server.listen(3000,()=>{
	console.log("服务器已经启动");
});
server.use(bodyParser.urlencoded({extended:false}));
server.use(express.static('public'));
server.use(express.static('routers'));
server.use('/user',userRouter);