myApp.controller('ControllerB', function(RandomService) {
    console.log('in controllerB');

    var self = this;
    // ThingService.getServerThings();

    // self.serverStuff = ThingService.serverThings;
    
    // self.bStuff = ThingService.bThings;

    // self.countObj = ThingService.countObj;

    self.highFive = function() {
        self.theirRandomGen = { result: RandomService.theirRandomObj.result };
        self.yourRandomGen = { result: RandomService.yourRandomObj.result };
    
        self.whoWins = {
            theDifference: Math.abs(self.theirRandomGen.result - self.yourRandomGen.result)};
        return self.whoWins.theDifference;

        self.scoreTheFive = function() {
            self.response = {
                response: "",
            };
            if (self.whoWins.theDifference < 3) {
                self.response.response = "nice! best high five ever!";
            } else {
                self.response.response = "eh, that was shitty, try again.";
            } return self.response.response;
        }
    }
});