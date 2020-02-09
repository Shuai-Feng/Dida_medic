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
						location.href="dc_info.html";
						jQuery('#mask').hide();
						data_dno=data.dno;
					}else{
						jQuery('#dno,#dname,#pwd,#yzm').val('');
						alert('用户名或密码有误');
						yzm();
					}
				},
				complete:function(){
						jQuery.ajax({
							url:'data/database_patient.php?dno='+data_dno,
							type:'GET',
							dataType:'json',
							success:function(data){
								console.log(data);
								data=data.data;
								if(data.length==0){
									jQuery(".title_us h3").html('您好，医生，当前没有问诊请求');
								}else{
									for(var i=0;i<data.length;i++){
								
										var d_h3=jQuery(document.createElement('h3'));
										d_h3.text("患者姓名:"+data[i].pname);
										var d_h4=jQuery(document.createElement('h4'));
										d_h4.text("联系方式:"+data[i].pnumber);
										var b_box0=jQuery('<div></div>'); 
										b_box0.attr('class',"tit").append(d_h3,d_h4);
					
										var d_p=jQuery(document.createElement('p'));
										d_p.text(data[i].disintro);
					
										var d_h4_1=jQuery(document.createElement('h4'));
										d_h4_1.addClass('timeno').text('编号:'+data[i].diano);
					
										var d_h4_2=jQuery(document.createElement('h4'));
										d_h4_2.addClass('dgtime').text('就诊时间:'+data[i].ptime);
					
										var btn_appoint=jQuery('<a href="javascript:void" attr_diano='+data[i].diano+' class="b_btn">已完成</a>').addClass('b_btn');
										var b_box1=jQuery('<div></div>'); 
										b_box1.attr('id','container').append( b_box0,d_p,d_h4_1,d_h4_2,btn_appoint) ;
										jQuery('.content .box980').append(b_box1);
									}
								}

							},
							complete:function(){
								interanimate(jQuery('.content #container'),550);
								jQuery('.content #container').mouseover(function(){
									jQuery(this).children('a.b_btn').addClass('light');
								});
								jQuery('.content #container').mouseout(function(){
									jQuery(this).children('a.b_btn').removeClass('light');
								});


								jQuery('.b_btn').click(function(){
									if(confirm('完成订单，请单击确定')){
										var diano=jQuery(this).attr('attr_diano');
										jQuery.ajax({
											url:'data/delete.php?diano='+diano,
											type:'GET',
											dataType:'json',
											success:function(data){
												
											}
										});
										jQuery(this).parent().hide();
									}else{
										
									}
								});
							}
					});
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