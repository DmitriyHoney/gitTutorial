

(function() {

	class Worker {
		constructor(name, surname, rate, days) {
			this._name 		= name;
			this._surname 	= surname;
			this._rate 		= rate;
			this._days 		= days;
		}

		getFullName() {
			return rhis._name + ' ' + this._surname;
		}


	}

	let worker = new Worker('Дмитрий', 'Большаков', 79, 20);


}());