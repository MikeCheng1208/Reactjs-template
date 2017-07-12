/*
* --canvas 圖片寬高置中等比例
*
* Canvas 將圖片丟進去使用drawImage繪製時，等比例縮放還有置中參數
*
*   --使用說明
*	var dataImg = new mike.canvasSetDrawImg(imgData);
	dataImg.w     -> 寬
	dataImg.h     -> 高
	dataImg.tx    -> 座標 X
	dataImg.ty    -> 座標 Y
*
*
*/ 
function canvasSetDrawImg(Drawimg,canvasWidth,canvasHeight) {
	var img = Drawimg,
		w = img.width,
		h = img.height,
		ratio = Math.max(canvasWidth/w, canvasHeight/h)

		return {
			"w": w *= ratio,
			"h": h *= ratio,
			"tx":canvasWidth - w >> 1,
			"ty":canvasHeight - h >> 1
		};
}


// /*
// * --判斷手機直橫
// * portrait   直式
// * landscape  橫式	
// * 		
// * 		
// * 參數是傳入funciton callback	
// * 		
// * 開發者模式測不出來，要實機測試 		
// */
/**
 * 判斷手機直橫
 *開發者模式測不出來，要實機測試 		
 */	
function orientationChange(portrait,landscape){
	if(portrait&&landscape){
		window.addEventListener("orientationchange",onOrientationchange ,false);
	}
	function onOrientationchange() {
		if (window.orientation === 180 || window.orientation === 0) {
			if(portrait){
				portrait();
			}
		}
		if (window.orientation === 90 || window.orientation === -90 ){
			if(landscape){
				landscape();
			}
		} 
	}
}


/*FB分享*/
function fbShare(url){
	return window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(url)), "_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes, scrollbars=yes,resizable=no, copyhistory=yes, width=600, height=400" )
}


/*抓html get參數*/
function urlSearch(){
	var strUrl = location.search;
	var getPara, ParaVal;
	var aryPara = [];
	if (strUrl.indexOf("?") != -1) {
		var getSearch = strUrl.split("?");
		getPara = getSearch[1].split("&");
		for (var i = 0; i < getPara.length; i++) {
				ParaVal = getPara[i].split("=");
				aryPara.push(ParaVal[0]);
				aryPara[ParaVal[0]] = ParaVal[1];
		}
	}
	return aryPara;
}

/*debug的console.log*/
function consoleLog(val){
	var debug = new urlSearch()
	if(debug["debug"]=="true"){
		console.log(val);
	}
};

/*取亂數值*/
function getRandom(minNum, maxNum) {
	return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}

/*檢查手機號碼*/
function check_tel(input){
	var phone = /^09[0-9]{2}[0-9]{6}$/;
	if (!phone.test(input)){
			alert("手機電話格式錯誤");
			return false;
	}
	return true;		
}

/* 檢查mail*/
function check_email(input){
	var email = input;
	if(email.search(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)==-1){
		alert("請輸入正確的mail格式");
		return false;
	}
	return true;
}

export default {
	canvasSetDrawImg : canvasSetDrawImg,
	orientationChange : orientationChange,
	fbShare : fbShare,
	urlSearch : urlSearch,
	consoleLog : consoleLog,
	getRandom :getRandom,
	check_tel : check_tel,
	check_email : check_email
};


// module.exports = mike;



