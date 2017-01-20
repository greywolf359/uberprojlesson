const mongoose = require('mongoose');

before(done=>{
	console.log('process', process.env.NODE_ENV);
	mongoose.connect('mongodb://localhost/muber_test');
	mongoose.connection
		.once('open', ()=> done())
		.on('error', (err)=> {
			console.warn(err);
		})
})

beforeEach(done =>{
	const {drivers} = mongoose.connection.collections;
	drivers.drop()
		.then(()=>done())
		.catch(()=>done());
})