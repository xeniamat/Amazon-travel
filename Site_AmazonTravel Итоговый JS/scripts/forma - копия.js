		
		<!--СКРИПТ НА ФОРМУ-->
		
	function validate(forma){
		x = document.getElementsByTagName("span");
			for (var i=x.length-1; i>=0; i--)
			{
			x[i].parentNode.removeChild(x[i]);
			}
		var ima = isFullText(forma.ima);
		var mess = isFullText(forma.message);
		var mail2 = isFullText(forma.mail);
		var mail = isMail(forma.mail);
		
		return ima && mail && mail2 && mess;
	}	
		function isFullText(text)
		{	text.style.backgroundColor = "white";
			if (text.value == "")
			{
			var item = document.createElement("span");
			item.innerHTML = "</br>Поле не должно быть пустым";
			text.style.backgroundColor = "red";
			text.parentNode.appendChild(item);
			return false;
			}
			return true;
		}
		
		function isLatText(text)
		{ 	text.style.backgroundColor = "white";
			var log = myForm.login.value;
			var regLog = /[^a-zA-Z\d]/;
			if (regLog.test(log) && log != "")
			{
			var item = document.createElement("span");
			item.innerHTML = "Только цифры и буквы латинского алфавита";
			text.parentNode.appendChild(item);
			text.style.backgroundColor = "red";
			return false;
			}
			return true;
		}

		function isMail (text) 
		{
			var mail = myForm.mail.value;
			var regMail = /\w+@\w+\.[a-z]{2,3}/i;
			if (!regMail.test(mail)&& mail != "")
			{ 
			var item = document.createElement("span");
			item.innerHTML = "Введите реальный адрес почты";
			text.style.backgroundColor = "red";
			text.parentNode.appendChild(item);
			return false;
			}
			return true;
	}
