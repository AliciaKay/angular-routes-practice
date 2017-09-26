myApp.controller('ControllerA', function(ThingService) {
    console.log('in controllerA', ThingService.aThings);

    var self = this;
    //when controller loads call getserverthings in our service
    self.aItems = ThingService.aThings;
    self.bItems = ThingService.bThings;

    ThingService.getServerThings();

    self.serverStuff = ThingService.serverThings;

    self.countObj = ThingService.countObj;

    self.clickUpdate = function() {
        ThingService.incCounter();
    }

});