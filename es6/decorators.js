function dec(id) {
	console.log('dec entered: ' + id);
	return function(target) {
		console.log('dec executed: ' + id);
	}
}

@dec(1)
@dec(2)
class MyClass {};