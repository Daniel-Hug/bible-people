var Snoopy = (function() {
	function Snoopy(obj) {
		if (!(this instanceof Snoopy)) return new Snoopy(obj);
		// don't overwrite this.snoopers!
		this.snoopers = {};
		Object.keys(obj).forEach(function(key) {
			this[key] = obj[key];
		}, this);
	}

	var changed = Snoopy.prototype.changed = function(prop) {
		var newVal = this[prop];
		(this.snoopers[prop] || []).forEach(function(snooper) {
			snooper.call(this, newVal);
		}, this);
	};

	Snoopy.prototype.get = function(prop, val) {
		return this[prop];
	};

	Snoopy.prototype.set = function(prop, val) {
		this[prop] = val;
		changed.call(this, prop);
	};

	Snoopy.prototype.snoop = function(props, mapFn) {
		if (mapFn) {
			var snooper;
			var mapFnOutput;
			var propToVal = this.get.bind(this);
			var propsArr = props.split(' ');
			var instance = this;

			// caller calls mapFn with the values of the passed props
			// then, if there is a snooper, calls that passing the value returned from the mapFn 
			var caller = function caller() {
				var propVals = propsArr.map(propToVal);
				mapFnOutput = mapFn.apply(instance, propVals);
				if (snooper) snooper.call(instance, mapFnOutput);
			};

			caller();

			// push caller to snooper list
			var t = this;
			propsArr.forEach(function(prop) {
				if (!t.snoopers[prop]) t.snoopers[prop] = [];
				t.snoopers[prop].push(caller);
			});

			return function mappedSnoop(newSnooper) {
				snooper = newSnooper;
				snooper.call(instance, mapFnOutput);
			};
		} else {
			// snoopable
			return this.snoop.bind(this, props);
		}
	};

	return Snoopy;
})();