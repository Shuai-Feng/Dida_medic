window.onload=function(){
		var $=function(id){
			return document.getElementById(id);
		}
		var form1=$("form1");
		var username=$("username");
		var usernameTips=$("usernameTips");
		var office=$("office");
		var officeTips=$("officeTips");
		var doctor=$("doctor");
		var doctorTips=$("doctorTips");
		var disease=$("disease");
		var diseaseTips=$("diseaseTips");
		var phone=$("phone");
		var phoneTips=$("phoneTips");
		var sexs=document.getElementsByName("sex");
		var sexsTips=$("sexsTips");
		var ptime=$("ptime");
		var ptimeTips=$("ptimeTips");
		var reg=/^[\u4e00-\u9fa5_a-zA-Z]/;
		form1.onsubmit=function(e){
			if (username.value==""){
				usernameTips.innerHTML="姓名不为空";
				e.preventDefault();

			};
			if (office[0].selected) {
				officeTips.innerHTML="请选择科室";
				e.preventDefault();
			}
			if (ptime[0].selected) {
				ptimeTips.innerHTML="请选择就诊时间";
				e.preventDefault();
			}
			if (doctor.value=="") {
				doctorTips.innerHTML="医师不为空";
				e.preventDefault();
			}
			
			if (phone.value=="") {
				phoneTips.innerHTML="手机不为空";
				e.preventDefault();

			}
			 if((sexs[0].checked || sexs[1].checked)){
             sexsTips.innerHTML=""; 
			}
		}
		username.onfocus=function(){
			usernameTips.innerHTML="";
		}
		office.onfocus=function(){
			officeTips.innerHTML="";
		}
		doctor.onfocus=function(){
			doctorTips.innerHTML="";
		}
		disease.onfocus=function(){
			diseaseTips.innerHTML="";
		}
		phone.onfocus=function(){
			phoneTips.innerHTML="";
		}
		ptime.onfocus=function(){
			ptimeTips.innerHTML="";
		}
		username.onblur=function(){
			if (reg.test((username.value))){
				usernameTips.innerHTML="";
			}else{
				usernameTips.innerHTML="请用中文或英文名字";
			}
		}
		}

		$(function(){
			$('.content form td input').focus(function(){
				$(this).addClass('border').siblings().removeClass('border');
			}).blur(function(){
				$(this).removeClass('border');
			});

			$('#doctor').blur(function(){
					$.ajax({
						url:"data/search.php?dname="+$(this).val(),
						type:'GET',
						dataType:'json',
						data:null,
						success:function(data){
							if(data.msg=="success"){
								$('#doctorTips').html('此医生存在').addClass('green');
							}else{
								$('#doctor').val('');
								$('#doctorTips').html('此医生不存在').removeClass('green');
							}
						}
					});
			}).focus(function(){
				$('#doctorTips').html('此医生不存在');
			});
		});