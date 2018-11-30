SET NAMES UTF8;
DROP DATABASE IF EXISTS lj;
CREATE DATABASE lj CHARSET UTF8;
USE lj;
CREATE TABLE lj_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(20),
	upwd VARCHAR(20),
	phone VARCHAR(20) UNIQUE,#
	headshot VARCHAR(128)#头像图片路径

);
INSERT INTO lj_user VALUES("NULL","tom","123456","15201582976","image/01.jpg");

CREATE TABLE lj_sencondHandHouse(
	shhId INT PRIMARY KEY AUTO_INCREMENT,
	shhPrice INT,#价格
	shhBulidingName VARCHAR(20),#小区名称
	shhTitle VARCHAR(20),#标题
	shhHouseLayout VARCHAR(20),#房屋户型 2室1厅1厨1卫
	shhGrossArea VARCHAR(20),#建筑面积
	shhInsideArea VARCHAR(20),#套内面积
	shhOrientation VARCHAR(20),#房屋朝向
	shhDecoration VARCHAR(20),#装修
	shhHeatType VARCHAR(20),#供暖方式
	shhProperty VARCHAR(20),#产权年限
	shhFloor VARCHAR(20),#所在楼层
	shhStructure VARCHAR(20),#户型结构：平层，复式等
	shhBuildingType VARCHAR(20),#建筑类型，板塔结合
	shhBuildingStructure VARCHAR(20),#建筑结构，钢混
	shhFamilyElevatorRatio VARCHAR(20),#户梯比例，一梯三户
	shhisElevator BOOLEAN,#是否有电梯
	shhOwnership VARCHAR(20),#权属 商品房等
	shhHangListedTime VARCHAR(20),#挂牌时间
	shhLastTradingTime VARCHAR(20),#上次交易时间
	shhTimeLimit VARCHAR(20),#满五年满二年等等
	shhisMortgage VARCHAR(20),#是否有抵押
	shhHouseFunction VARCHAR(20),#房屋的用途，住宅，写字楼等等
	shhisOwnAll Boolean,#是否单独所有，共同共有
	shhDeedImage VARCHAR(128),#房本照片路径
	shhImage VARCHAR(128)#房子照片路径
);
INSERT INTO lj_sencondHandHouse VALUES
("NULL","800万","爱这城","诚意出售","2室2厅1厨2卫",
"90.09㎡","70平米","南北","精装修","集中供暖","70年产权",
"5层","平层","板塔结合","钢混","一梯三户","1","商品房",
"2018-11-20","2012-11-11","满五年","1","住宅","0","image/02.jpg","image/03.jpg");
