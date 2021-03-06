// imgur URL converter
// Developed by mecrazy - http://mecrazy.net
function getImgurUrlObj(baseUrl){
	var object = {'page':'','original':'','small':'','large':'','uuid':''};
	var execute = (typeof baseUrl == 'string');
	if(execute){
		if(!baseUrl.match(/^(http|https):\/\/imgur.com\/[A-Za-z0-9]*?$/i)){
			execute = false;
			if(typeof console != 'undefined'){
				console.log(baseUrl + 'is incorrect URL.');
			}
		}
	}
	if(execute){
		var protocol = 'http';
		object.page = baseUrl;
		object.uuid = object.page.replace(/^(http|https):\/\/imgur.com\//i,'');
		if(baseUrl.match(/^https/i)){
			protocol = 'https';
		}
		object.original = protocol + '://i.imgur.com/' + object.uuid + '.jpg';
		object.small = protocol + '://i.imgur.com/' + object.uuid + 's.jpg';
		object.large = protocol + '://i.imgur.com/' + object.uuid + 'l.jpg';
	}
	return object;
}