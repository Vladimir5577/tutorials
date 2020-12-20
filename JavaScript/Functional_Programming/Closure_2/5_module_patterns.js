/*
// classic module pattern
var foo = (function () {

	var obj = { hello: 'Hello World' };

	return {
		bar: function () {
			console.log(obj.hello);
		}	
	};

})();

foo.bar();
*/


// modified module pattern
var foo = (function () {
	var publicApi = {
		bar: function () {
			publicApi.baz();
		},
		baz: function () {
			console.log('Hello World');
		}
	};

	return publicApi;
})();

foo.bar();



