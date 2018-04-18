/* SDK: https://connect.facebook.net/zh_TW/sdk.js */
export default class FaceBook {
	constructor(callback) {
		let fb_id = null 
		let host = window.location.hostname;
		switch (host) {
			//本機
			case 'localhost':
				fb_id = '942280062552678';
			break;
			case '192.168.252.186':
				fb_id = '942280062552678';
			break;
			case 'motomotoyama.events.pixnet.net':
					fb_id = '166296234181677';
				break;
			//其他網域
			default:
					fb_id = '166296234181677';
				break;		
		}
		FB.init({
			appId      : fb_id,
			xfbml      : true,
			cookie     : true,
			version    : 'v2.10'
		});
		FB.AppEvents.logPageView();
		FB.getLoginStatus(res => {
			if (res.status === "connected") {
				FB.status = "connected";
				if (callback) callback('connected');
			}else{
				FB.status = "no_connected";
				if(callback) callback('no_connected');
			}
		})
	}

	easyFbShare(url) {
		return window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(url)), "_blank","toolbar=yes,location=yes,directories=no,status=no, menubar=yes, scrollbars=yes,resizable=no, copyhistory=yes, width=600, height=400" )
	}

	fbShare(url, callback) {
		FB.ui({
			method: 'share',
			href: url,
			mobile_iframe: false,
			display: 'popup',
		},(res)=> {
			if (callback) callback(res);
		});
	}

	fbApiCallMe(callback) {
		FB.api('/me?fields=id,name,email,picture.width(480)', res => {
			if (res.error) return;
			window.fb_user_data = {
				id	    : res.id,
				name	: res.name,
				picture : res.picture.data.url,
				email   : res.email
			}
			if(callback) callback(window.fb_user_data)
		});
	}
}