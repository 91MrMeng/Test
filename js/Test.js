//校验账号的格式
    function check_code() {
      //获取账号
      var code = document.getElementById("ZhangHao").value;
      //校验其格式(\w字母或数字或下划线)
      var reg = /^\w{6,10}$/;
      if(reg.test(code)) {
        //通过，弹出
        alert("账号格式正确");
        return true

      } else {
        //不通过，弹出
        alert("账号格式错误");
        return false
      }
    }
    function check_pwd(){
      var code2 =document.getElementById("Password").value;
      var reg2 = /^\w{6,10}$/;
      if(reg2.test(code2)) {
      	alert("密码格式正确");
        return true
      	
      } else {
      	alert("密码格式错误");	
      	return false
      }
    }




var JiZhuPwd = document.getElementById("KeepPwd");
	UserName = document.getElementById("ZhangHao");
	Password = document.getElementById("Password")
	LoginBtn = document.getElementById("LoginBtn");
	
	LoginBtn.onclick=function(){
		
		if(JiZhuPwd.checked===true){
		setCookie(UserName.value,Password.value,setCookieDate(7));
		alert("记住密码成功，您的用户名为："+UserName.value)
	}}
	//得到所有的cookie
	var AllCookie=document.cookie;
	//把cookie拆分成数组
	var asd=AllCookie.split(";");
	//循环得到所有的用户名和密码
	var yhmarr=[];mimaarr=[];
	for(var i=0;i<asd.length;i++){
		//创建用户名和密码的数组 对应下标即为对应的用户名和密码
		var yonghuming=asd[i].split("=")[0];
			mima=asd[i].split("=")[1];
		yhmarr.push(yonghuming);
		mimaarr.push(mima);
	}

	UserName.value=yhmarr[yhmarr.length-1];
	Password.value=mimaarr[mimaarr.length-1];
	
	function qingkong(){
		if(UserName.value==""){
		Password.value=""
		}
	}
	window.onload=qingkong();
