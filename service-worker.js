
console.log("Service-Worker startup");

self.addEventListener('install', function (event) {
	event.waitUntil(
		somethingThatReturnsAPromise().then(function() {
			console.log("Installed!");
		})
	);
});

self.addEventListener('activate', function (event) {
	event.waitUntil(
	    somethingThatReturnsAPromise().then(function() {
	      console.log("Activated!");
	    })
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(new Response("Hello world! Sought the requested!"));
});

self.addEventListener('push', function (event) {
	console.log("Push is ", event);
});
