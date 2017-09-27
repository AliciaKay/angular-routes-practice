// services have: 
// shared data between controllers by injection
// $http is a service built in, we will be writing our own
// controllers will become much lighter - will connect the service to DOM 
// Services can also be referred to as factories
// MODEL VIEW CONTROLLER(MVC)

//services should be inside scripts folder

myApp.service('RandomService', function() {
    console.log('In RandomService',);

    var self = this;
    
    // //static data
    // self.aThings= ['Animal', 'Apples', 'Axe'];
    // self.bThings= ['Bathtub', 'Bunny', 'Baseball Bat'];

    //if it is not static, ie dynamic, the data must be in an object

    // self.countObj = {count: 0};

    // self.incCounter = function() {
    //     self.countObj.count++;
    //     console.log('count in service ->', self.countObj.count)
    // };

    self.randomFunc = function(min, max) {
        console.log("in random number function");
            min = Math.ceil(min);
            max = Math.floor(max);
            var result = Math.floor(Math.random() * (max - min + 1)) + min; 
            return result;//The maximum is inclusive and the minimum is inclusive 
    };

    self.theirRandomObj = {result: self.randomFunc(1, 10)};
    self.yourRandomObj = {result: self.randomFunc(1, 10)};

//     self.serverThings = {list: []};

//     self.getServerThings = function() {
//         $http.get('/serverThings').then(function(response) {
//             //set our data onto the service
//             console.log('response.data:', response.data)
//             self.serverThings.list = response.data;
//         });
//     }
});