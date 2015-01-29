# CommonJS Pub Sub
A very small pub sub library that whole-heartedly stole all it's ideas (and a good chunk of code) from David Walsh. It has been upated so that it will work all the way down to IE8, hence the lack of ```hasOwnProperty```. You can find the original code [here](http://davidwalsh.name/pubsub-javascript).

## Install
```npm install common-js-pub-sub```

## Use with Browserify
```javascript
var events = require('common-js-pub-sub')()
```

## Publish to a topic
```javascript
events.publish('/page/load', {
	// doesn't have to be a url any key value pairs can be passed here
	url: '/some/url/path'
});
```

## Subscribe to a topic
```javascript
var subscription = events.subscribe('/page/load', function(obj) {
	// Do something now that the event has occurred
	
	// Note 'obj' represents the object you passed to the publish function
});
```

## Remove said topic
```javascript
// Toodles
subscription.remove();
```