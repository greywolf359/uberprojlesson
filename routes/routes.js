const DriversController = require('../controllers/drivers_controller');

module.exports = (app)=>{
//watch for incoming request of method get
//to the route localhost:3050/api
app.get('/api', DriversController.greeting);

app.post('/api/drivers', DriversController.create);

}