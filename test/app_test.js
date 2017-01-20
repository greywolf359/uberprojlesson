const assert = require('assert');
const request = require('supertest');
const app = require('../app');



describe('the express app',()=>{
	it('it handles a get request to /api',(done)=>{
		request(app)
			.get('/api')
			.end((err,response)=>{
				//console.log('app', app);
				//console.log('request', request);


				assert(response.body.hi === 'there');
				done();
			})
	})
})