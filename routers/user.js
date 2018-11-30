const express = require('express');
var pool = require('../pool.js');


var router = express.Router();
//用户注册
router.post('/register',(req,res)=>{
	var obj = req.body;
	//console.log(obj);
	var $headshot = obj.headshot;
	var $uname = obj.uname;
	var $upwd = obj.upwd;
	var $phone = obj.phone;
	for(var proName in obj){
		var i=400;
		if(!obj[proName]){
			res.send({code:i++,msg:`${proName} is required`});
		}
	}
	pool.query('INSERT INTO lj_user SET ?',[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'register sucess'});
		}else{
			res.send({code:400,msg:'register fail'});
		}
	});
	
});

//用户登录
router.post('/login',(req,res)=>{
	var $phone = req.body.phone;
	var $upwd =  req.body.upwd;

	if(!$phone){
		res.send({code:400,msg:'phone is required'});
	}
	if(!$upwd){
		res.send({code:400,msg:'upwd is required'});
	}
	pool.query('SELECT * FROM lj_user WHERE phone=? AND upwd=?',[$phone,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send({code:200,msg:"login sucess"});
		}else{
			res.send({code:400,msg:"login fail"});
		}
		
	});
	
});
//用户修改

router.post('/update',(req,res)=>{
	var obj = req.body;
	for(var proName in obj){
		var i=400;
		if(!obj[proName]){
			res.send({code:i++,msg:`${proName} is required`});
		}
	}
	var $uid = obj.uid;
	
	var $headshot = obj.headshot;
	var $uname = obj.uname;
	var $upwd = obj.upwd;
	var $phone = obj.phone;
	

	pool.query('UPDATE lj_user SET headshot=?,uname=?,upwd=?,phone=? WHERE uid = ?',
		[$headshot,$uname,$upwd,$phone,$uid],
		(err,result)=>{
			if(err) throw err;
			if(result.affectedRows>0){
				res.send({code:200,msg:"update sucess"});
			}else{
				resend({code:400,msg:"update fail"});
			}
		
	});


});
//用户删除
router.get('/delete',(req,res)=>{
	var $uid = req.query.uid;
	if(!$uid){
		res.send({code:400,msg:"uid is required"});
	}
	pool.query('DELETE FROM lj_user WHERE uid=?',[$uid],
		(err,result)=>{
			if(err) throw err;
			if(result.affectedRow>0){
				res.send({code:200,msg:'delete sucess'});
			}else{
				res.send({code:200,msg:'delete fail'});
			}
			
		}	
	);
});
	

module.exports = router;
