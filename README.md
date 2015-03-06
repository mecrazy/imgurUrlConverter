imgurUrlConverter
======================
This JavaScript function can convert imgur URL to many kind of URL.

## Ready to use
Put "imgurUrlConverter.min.js" on your server and load the script like below.
```html
<script src="js/imgurUrlConverter.min.js"></script>
```

## Usage
```html
<script src="js/imgurUrlConverter.min.js"></script>
<script type="text/javascript">
var myObject = getImgurUrlObj('http://imgur.com/jfkX11M');
console.log(myObject);
/*
  In this example,
    "myObject.page" is imgur page URL,
    "myObject.uuid" is current image's unique id,
    "myObject.original" is original image file URL,
    "myObject.small" is small image file URL,
    "myObject.large" is large image file URL.
*/
</script>
```
