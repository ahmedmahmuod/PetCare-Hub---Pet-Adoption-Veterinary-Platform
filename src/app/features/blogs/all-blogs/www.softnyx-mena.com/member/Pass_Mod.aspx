

<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head id="ctl00_Head1">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-41L0YTQ51X"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-41L0YTQ51X');
    </script>
    <title>
	Softnyx
</title><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" /><meta property="og:locale" content="ar" /><meta property="og:type" content="website" /><meta property="og:url" content="https://www.softnyx-mena.com/" /><meta property="og:title" content="Softnyx" /><meta property="og:description" content="Online entertainment platform that unites the world with video games!!" /><meta property="og:image" content="https://img.softnyx.net/1/wt/event/landing/140806/b_img01.jpg" /><link rel="Shortcut Icon" href="https://www.softnyx-mena.com/favicon.ico" />
    <!-- CSS -->
    <link rel="stylesheet" href="/css/common_portal.css" /><link rel="stylesheet" href="/css/member_150419.css" />
    <!-- JS -->
    <script type="text/javascript" src="//web.softnyx.com/js/jquery/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="//web.softnyx.com/js/Softnyx/NYXMSG.js?v=0.0.0.1"></script>
    <script type="text/javascript" src="//web.softnyx.com/js/Softnyx/MSG_ARB.js?v=0.0.0.1"></script>
    <script type="text/javascript" src="//web.softnyx.com/js/Softnyx/softnyx.common_min.js?v=0.0.0.1"></script>
</head>
<body topmargin="0" leftmargin="0">
    <form name="aspnetForm" method="post" action="./Pass_Mod.aspx" id="aspnetForm">
<div>
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUJNDk5MTEyNjM5DxYEHg5TRUNVUklUWV9DT1VOVCgpW1N5c3RlbS5EZWNpbWFsLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODkBMB4VaXNTZWN1cml0eVFuQVJlZ2lzdGVyZxYCZg9kFgICAw9kFgICAQ9kFgQCBQ8WAh4HVmlzaWJsZWcWAgIBDw8WAh4EVGV4dAUW2YXYpyDYpdiz2YUg2KfYrtmK2YPYn2RkAgcPD2QWAh4Hb25jbGljawUYcmV0dXJuIGZuUGFzc01vZENoZWNrKCk7ZGTYr9aqxSc/j6ncPYmLNCgFELiBRuQHrQqQ4UpelyovoA==" />
</div>

<div>

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="D2E5C097" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEdAAZdu5iY9/FvXe3jHmwrSUNldtCoSGX5v6//qMPQosAx+gLSpRFoQ//wPAq+IbjT43xuqa7h+cWG0hZ/BPi4E2Mj8T23yqmVVBBextmM6xQQWfuFUZeEMvgKMbmrBv9x5EDrLb8Xpls6TEeMG+3XR8g5Hze4p5RFxPxgWIX8fS1/HQ==" />
</div>
    <div id="wrap">
        <!-- Softnyx Top Start -->
        <div style="background: #151515">
            <script language="javascript" type="text/javascript" src="//web.softnyx.com/Top/SoftnyxTop_AS_min.js?v=0.0.0.6"></script>
        </div>
        <!-- Softnyx Top End -->
        <div class="contents">
            <!-- Softnyx Main Start -->
            
	<script language="javascript">
	    var varClickCount = 1;

	    function fnInputCheckMember(formname, formitem) {
	        if (eval("document." + formname + "." + formitem).value == "") {
	            return true;
	        } else {
	            if (eval("document." + formname + "." + formitem).value.split(" ").join("") == "") {
	                return true;
	            } else {
	                return false;
	            }
	        }
	    }

	    function isAscii(str) {
	        var charCode, retVal;
	        retVal = false;

	        for (i = 0; i < str.length; i++) {
	            charCode = str.charCodeAt(i);
	            if (charCode == 32) retVal = retVal || true;
	            if ((charCode > 47 && charCode < 58) || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
	                retVal = retVal || false;
	            } else {
	                retVal = retVal || true;
	            }
	        }
	        return retVal;
	    }

	    function getByteLen(str) {
	        var len = 0;
	        if (str == null) return 0;
	        for (var i = 0; i < str.length; i++) {
	            var c = escape(str.charAt(i));
	            if (c.length == 1) len++;
	            else if (c.indexOf("%u") != -1) len += 2;
	            else if (c.indexOf("%") != -1) len += c.length / 3;
	        }
	        return len;
	    }

	    function fnPassModCheck() {
	        if (varClickCount > 1) {
	            return false;
	        }
	        else {
	            if (fnPassModCheckDetail()) {
	                varClickCount = varClickCount + 1;
	                return true;
	            }
	            else {
	                return false;
	            }
	        }
	    }

	    function fnPassModCheckDetail() {
	        var formName = document.forms[0].name;
	        var objCurrentPass = eval("document." + formName + ".ctl00_SoftnyxPopupPlaceHolder_txtCurrentPass");
	        var objNewPass = eval("document." + formName + ".ctl00_SoftnyxPopupPlaceHolder_txtNewPass");

	        var objCurrentPassvalue = objCurrentPass.value;
	        var objNewPassvalue = objNewPass.value;

	        if (fnInputCheckMember(formName, "ctl00_SoftnyxPopupPlaceHolder_txtCurrentPass")) {
	            //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgCurrentPassword").className = "member05";
	            document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgCurrentPassword").innerHTML = "[!] أدخل كلمة السر الحالية.";
	            return false;
	        }

	        //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgCurrentPassword").className = "member06";
	        document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgCurrentPassword").innerHTML = "";

	        if (fnInputCheckMember(formName, "ctl00_SoftnyxPopupPlaceHolder_txtNewPass")) {
	            //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").className = "member05";
	            document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").innerHTML = "[!] أدخل كلمة السر الجديدة.";
	            return false;
	        }

//	        if (isAscii(objNewPassvalue)) {
//	            //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").className = "member05";
//	            document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").innerHTML = "[!] كلمة السر لابد أن تكون من 4-16 حرف أو رقم.";
//	            return false;
//	        }

	        if (getByteLen(objNewPassvalue) < 4 || getByteLen(objNewPassvalue) > 16) {
	            //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").className = "member05";
	            document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").innerHTML = "[!] كلمة السر لابد أن تكون من 4-16 حرف أو رقم.";
	            return false;
	        }

	        if (!fnPasswordSameCheck()) {
	            document.getElementById("txtPass2").value = "";
	            document.getElementById("txtPass2").focus();
	            return false;
	        }

	        //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").className = "member06";
	        document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").innerHTML = "";

	        if (document.getElementById("ctl00_SoftnyxPopupPlaceHolder_divSecurityQnARegister") !== "undefined") {
	            if (document.getElementById("ctl00_SoftnyxPopupPlaceHolder_txtSecurityAnswer").value == "") {
	                //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgSecurityQnA").className = "member05";
	                document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgSecurityQnA").innerHTML = "[!] أدخل إجابة السؤال.";
	                return false;
	            }
	            //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgSecurityQnA").className = "member06";
	            document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgSecurityQnA").innerHTML = "";
	        }
	        else {
	            return false;
	        }
	        return true;
	    }

	    function SetPopSize() {
	        self.resizeTo(410, window.document.body.clientHeight + 80);
	    }

	    function overInput(f) {
	        f.className = "onInput3";
	    }

	    function outInput(f) {
	        f.className = "offInput3";
	    }

	    function fnPasswordCheck() {
	        var formName = document.forms[0].name;
	        var objIDvalue = "2geil4u";
	        var objPassword = eval("document." + formName + ".ctl00_SoftnyxPopupPlaceHolder_txtNewPass");
	        var objPasswordvalue = objPassword.value;

	        //비밀번호 입력체크
	        if (objPasswordvalue == "") {
	            //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").className = "member04";
	            document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").innerHTML = "[!] أدخل كلمة السر الجديدة.";

	            for (var i = 1; i <= 3; i++) {
	                var objPasswordLevel = eval("document.getElementById(\"divPasswordLevel" + i + "\")");
	                objPasswordLevel.style.display = "none";
	            }
	            return false;
	        }

	        if (fnInputCheckMember(formName, "ctl00_SoftnyxPopupPlaceHolder_txtNewPass")) {
	            //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").className = "member05";
	            document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").innerHTML = "[!] أدخل كلمة السر الجديدة.";
	            objPassword.focus();
	            return false;
	        }
	        else {
//	            if (isAscii(objPasswordvalue)) {
//	                //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").className = "member05";
//	                document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").innerHTML = "[!] كلمة السر لابد أن تكون من 4-16 حرف أو رقم.";
//	                objPassword.focus();
//	                return false;
//	            }

	            if (getByteLen(objPasswordvalue) < 4 || getByteLen(objPasswordvalue) > 16) {
	                for (var i = 1; i <= 3; i++) {
	                    var objPasswordLevel = eval("document.getElementById(\"divPasswordLevel" + i + "\")");
	                    objPasswordLevel.style.display = "none";
	                }
	                //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").className = "member05";
	                document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").innerHTML = "[!] كلمة السر لابد أن تكون من 4-16 حرف أو رقم.";
	                objPassword.focus();
	                return false;
	            }

	            //보안 레벨 체크    
	            var nSecurityLevel = CheckPasswordFormat(objPasswordvalue, objIDvalue);

	            for (var i = 1; i <= 3; i++) {
	                var objPasswordLevel = eval("document.getElementById(\"divPasswordLevel" + i + "\")");

	                if (i == nSecurityLevel) {
	                    objPasswordLevel.style.display = "block";
	                }
	                else {
	                    objPasswordLevel.style.display = "none";
	                }
	            }

	            //OK 처리
	            //document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").className = "member06";
	            document.getElementById("ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword").innerHTML = "";
	        }
	    }

	    function CheckPasswordFormat(strInputPassword, strInputID) {
	        var nReturn = 0;
	        var blPasswordLenCheck = false;
	        var blPasswordDuplicateCheck = true;

	        if (getByteLen(strInputID) >= 4 && getByteLen(strInputPassword) >= 4) {
	            //8자리 이상인지 체크
	            if (getByteLen(strInputPassword) >= 8) {
	                blPasswordLenCheck = true;
	            }

	            //4자 이상 ID와 중복이 있는지 체크 
	            var strTemp = "";
	            for (var i = 0; i < strInputID.length - 3; i++) {
	                strTemp = strInputID.substring(i, i + 4);

	                if (strInputPassword.indexOf(strTemp) > -1) {
	                    blPasswordDuplicateCheck = false;
	                    break;
	                }
	            }

	            //레벨 산정	    
	            if (blPasswordLenCheck == true && blPasswordDuplicateCheck == true) {
	                nReturn = 1; //강함
	            }
	            else if (blPasswordLenCheck == true && blPasswordDuplicateCheck == false) {
	                nReturn = 2; //보통
	            }
	            else if (blPasswordLenCheck == false && blPasswordDuplicateCheck == true) {
	                nReturn = 2; //보통
	            }
	            else if (blPasswordLenCheck == false && blPasswordDuplicateCheck == false) {
	                nReturn = 3; //약함
	            }
	        }
	        return nReturn;
	    }

	    function fnPasswordSameCheck() {
	        var password = document.getElementById("ctl00_SoftnyxPopupPlaceHolder_txtNewPass").value;
	        var password2 = document.getElementById("txtPass2").value;

	        if (password != password2) {
	            document.getElementById("lblMsgPassword2").innerHTML = "[!] " + getMsg(Member_NotMatchPassword); //비밀번호가 일치하지 않습니다.
	            return false;
	        }
	        else {
	            document.getElementById("lblMsgPassword2").innerHTML = "OK";
	            return true;
	        }
	    }

	</script>
	<div id="subContents" class="contents_wt">
		<div class="leftArea">
			<h2>بوابة إدارة العضوية Softnyx</h2>
			<p>الرجاء تغيير كلمة السر و سؤال الامان لحماية معلوماتك الشخصية لفترات.</p>
		</div>
		<div class="rightArea">
			<h2>تغيير كلمة السر</h2>
			<p>ادخل كلمة السرالحالي والجديد.</p>
			<p class="t_line"><span class="triangle test_1"></span><span class="triangle test_1"></span><span class="triangle test_1"></span></p>

			<div class="area">
				<h3>كلمة السر الحالي</h3>
				<div class="command">
					<input name="ctl00$SoftnyxPopupPlaceHolder$txtCurrentPass" type="password" id="ctl00_SoftnyxPopupPlaceHolder_txtCurrentPass" class="box" onBlur="fnPassModCheckDetail();" />
				</div>
				<div class="message">
					<span id="ctl00_SoftnyxPopupPlaceHolder_lblMsgCurrentPassword" style="color:Red;"></span>
				</div>
			</div>
			<div class="area">
				<h3>كلمة السر الجديد</h3>
				<div class="command">
					<input name="ctl00$SoftnyxPopupPlaceHolder$txtNewPass" type="password" id="ctl00_SoftnyxPopupPlaceHolder_txtNewPass" class="box" onBlur="fnPassModCheckDetail();" onkeyup="fnPasswordCheck();" />
				</div>
				<div class="message">
					<span id="ctl00_SoftnyxPopupPlaceHolder_lblMsgPassword" style="color:Red;"></span>
					<div id="divPasswordLevel1" style="display:none;"> <img src="//img.softnyx.com/4/sn/member/icon_pass01.gif" width="51" height="11" border="0" align="absbottom" /> <img src="//img.softnyx.com/4/sn/member/icon_pass02.gif" width="51" height="11" border="0" align="absbottom" /> <img src="//img.softnyx.com/4/sn/member/icon_pass03.gif" width="51" height="11" border="0" align="absbottom" /> <span class="member06">قوي</span> </div>
					<div id="divPasswordLevel2" style="display:none;"> <img src="//img.softnyx.com/4/sn/member/icon_pass01.gif" width="51" height="11" border="0" align="absbottom" /> <img src="//img.softnyx.com/4/sn/member/icon_pass02.gif" width="51" height="11" border="0" align="absbottom" /> <span class="member05">متوسط</span> </div>
					<div id="divPasswordLevel3" style="display:none;"> <img src="//img.softnyx.com/4/sn/member/icon_pass01.gif" width="51" height="11" border="0" align="absbottom" /> <span class="member07">ضعيف جدا</span> </div>
				</div>
			</div>
            <div class="area">
				<div class="command">
                    <input id="txtPass2" name="txtPass2" type="password" class="box" maxlength="16" onblur="fnPasswordSameCheck()" />
				</div>
				<div class="message">
                    <span id="lblMsgPassword2" style="color:#CC3333" ></span>
                </div>
			</div>

			<div class="area">
				<h3>سؤال الامان</h3>
				
				
				
				<div id="ctl00_SoftnyxPopupPlaceHolder_divSecurityQnARegister">
					<div class="command">
						<span id="ctl00_SoftnyxPopupPlaceHolder_lblSecurityQuestion">ما إسم اخيك؟</span>
					</div>
					<h3></h3>
					<div class="command">
						<input name="ctl00$SoftnyxPopupPlaceHolder$txtSecurityAnswer" type="text" id="ctl00_SoftnyxPopupPlaceHolder_txtSecurityAnswer" class="box" onBlur="fnPassModCheckDetail();" />
					</div>
					<div class="message">
						<span id="ctl00_SoftnyxPopupPlaceHolder_lblMsgSecurityQnA" style="color:Red;"></span>
					</div>
				</div>
				
				<div id="ctl00_SoftnyxPopupPlaceHolder_divReCaptcha" style="display:none;">
					<div class="command" style="clear:both">
                       
                        <script type="text/javascript">
                            var onloadCallback = function () {
                                grecaptcha.render('html_element', {
                                    'sitekey': '6LfBr7AZAAAAALU_piuXn1JlsTFTDbVeE9tQVkrx'
                                    , 'callback': verifyCallback
                                });
                            };

                            var verifyCallback = function (response) {
                                //alert(response);

                                $("#ctl00_SoftnyxPopupPlaceHolder_hidResponse").val(response);
                            };
                        </script>
                        <div id="html_element"></div>
                        <input type="hidden" name="ctl00$SoftnyxPopupPlaceHolder$hidResponse" id="ctl00_SoftnyxPopupPlaceHolder_hidResponse" />
                        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer>
                        </script>

						<div class="message">
							<span id="ctl00_SoftnyxPopupPlaceHolder_lblMsgVerify" style="color:Red;"></span>
						</div>
					</div>
				</div>
			</div>
			<!-- OK -->
			<div class="btnArea">
				<input type="submit" name="ctl00$SoftnyxPopupPlaceHolder$buttonOK" value="موافق" onclick="return fnPassModCheck();" id="ctl00_SoftnyxPopupPlaceHolder_buttonOK" class="ok_btn" onfocus="this.blur();" style="height:54px;font-size:16px" />
			</div>
		</div>
	</div>

            <!-- Softnyx Main End -->
        </div>
    </div>
    <!-- Softnyx Bottom Start -->
    <script language="javascript" type="text/javascript" src="//web.softnyx.com/Bottom/SoftnyxBottom_AS_min.js?v=0.0.0.2"></script>
    <!-- Softnyx Bottom End -->
    </form>
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-67997670-1', 'auto');
        ga('require', 'displayfeatures');
        ga('require', 'linkid', 'linkid.js');
        ga('send', 'pageview');
    </script>

    <!--[if lt IE 9]>
<script src="/Js/html5shiv.js"></script>
<script src="/Js/respond.min.js"></script>
<![endif]-->

</body>
</html>
