window.onload=function(){
	var $=function(id){
		return document.getElementById(id);
	}
	var form1=$("form1");
	var dno=$("dno");
	var dnoTips=$("dnoTips");
	var dname=$("dname");
	var dnameTips=$("dnameTips");
	var pwd=$("pwd");
	var pwdTips=$("pwdTips");
	var yzm=$("yzm");
	var yzmTips=$("yzmTips");
	var change=$("change");
	var submit=$("submit");
	submit.onclick=function(e){
		flag=true;
		if (dno.value=="") {
			dnoTips.innerHTML="医生编号不为空";
			flag=false;
			e.preventDefault();
		}
		if (dname.value=="") {
			dnameTips.innerHTML="医生姓名不为空";
			flag=false;
			e.preventDefault();
		}
		if (pwd.value=="") {
			pwdTips.innerHTML="医生密码不为空";
			flag=false;
			e.preventDefault();
		}
		if (inputyzm.value.toLowerCase()!= outyzm.toLowerCase()) {
			yzmTips.innerHTML = "验证码错误/不能为空";
			inputyzm.value="";
			outyzm = yzm();
			flag=false;
			e.preventDefault();
		};

		if(flag){
			var data_dno;
			var data=new FormData(jQuery('#form1')[0]);;
			jQuery.ajax({
				url:'data/doclogin.php',
				type:"POST",
				data:data,
				dataType:'json',
				processData:false,
				contentType:false,
				success:function(data){
					if(data.msg=='success'){
						sessionStorage.setItem("dno",data.dno);
						location.href="doc_info.html";
					}else{
						jQuery('#dno,#dname,#pwd,#yzm').val('');
						alert('用户名或密码有误');
						yzm();
					}
				}
			});
		}
	}
	dno.onfocus=function(){
		dnoTips.innerHTML="";
	}
	dname.onfocus=function(){
		dnameTips.innerHTML="";
	}
	pwd.onfocus=function(){
		pwdTips.innerHTML="";
	}
	/*验证码部分h*/ 
var yzm = function() {
var str = "qwertyuioplkjhgfdsazxcvbnm0123456789";
var yzm="";
var p;
var substr1 = "";
var pic = document.getElementsByClassName("pic");
var outyzm=document.getElementById("outyzm");
var outyzm="";
for(var i = 0; i < 4; i++) {
	p = +Math.ceil(Math.random() * 1000 )% 36;
	// var p=Math.ceil(Math.random()*1000)%10;
	substr1 = str.substr(p, 1);

	pic[i].src = "img/0" + substr1 + ".png";
	pic[i].style.transform="rotate("+Math.ceil(Math.random()*1000%90-45)+"deg)";
	yzm = yzm + substr1;
}
console.log(yzm);
return yzm;
}
/*-----生成验证码及其值---------------*/
outyzm = yzm();

var $ = function(id) {
return document.getElementById(id);
}
var form = $("form1");
var inputyzm = $("yzm");
var yzmTips = $("yzmTips");
var change = $("change");

//-------submit事件--------------------------- 
inputyzm.onblur = function() {
if(inputyzm.value == "") {
	yzmTips.innerHTML = "验证码不能为空"
}
}
inputyzm.onfocus = function() {
yzmTips.innerHTML = "";
}
change.onclick=function(){
yzm();
}
}