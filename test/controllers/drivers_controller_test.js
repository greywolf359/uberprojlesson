const assert = require('assert');
const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const Driver = mongoose.model('driver');

describe('drivers controller', ()=>{
	it('post to api/drivers to create a new driver', (done)=>{
		Driver.count().then((count)=>{
			request(app)
			.post('/api/drivers')
			.send({email: 'test@test.com'})//this does not actually send, just sends along addt info
			.end(()=>{

				Driver.count().then(newCount=>{
					assert(count + 1 === newCount)
					done();
				})

			})

		})


	})
})