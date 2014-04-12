// imgur URL converter
// Developed by mecrazy - http://mecrazy.net
function getImgurUrlObj(baseUrl){
	var object = {'page':'','original':'','small':'','large':'','uuid':''};
	var execute = true;
	if(!baseUrl.match(/^http:\/\/imgur.com\/[A-Za-z0-9]*?$/i)){
		execute = false;
		if(typeof console != 'undefined'){
			console.log(baseUrl + 'is incorrect URL. Please put URL starts with "http://imgur.com/"');
		}
	}
	if(execute){
		object.page = baseUrl;
		object.uuid = object.page.replace(/^http:\/\/imgur.com\//i,'');
		object.original = 'http://i.imgur.com/' + object.uuid + '.jpg';
		object.small = 'http://i.imgur.com/' + object.uuid + 's.jpg';
		object.large = 'http://i.imgur.com/' + object.uuid + 'l.jpg';
	}
	return object;
}