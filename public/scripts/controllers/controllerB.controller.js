myApp.controller('ControllerB', function(ThingService) {
    console.log('in controllerB', ThingService.bThings);

    var self = this;
    ThingService.getServerThings();

    self.serverStuff = ThingService.serverThings;
    
    self.bStuff = ThingService.bThings;

    self.countObj = ThingService.countObj;

    self.clickUpdate = function() {
        ThingService.incCounter();
    }
});