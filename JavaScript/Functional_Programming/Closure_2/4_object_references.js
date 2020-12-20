var foo = (function () {

	var myObj = { hello: 'Hello World' };

	return { hi: myObj };

})();

console.log(foo.hi.hello);
