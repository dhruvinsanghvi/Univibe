(function(){


var app = angular.module('events', ['ngAnimate','ui.bootstrap','flow']);

app.controller('BannerController', function() {
	this.eventinfo = info;
	console.log(info);

});
app.controller('MainController', function() {
	this.myVar = false;
	this.showForm = function(){
		console.log("gdjgjgsa");
		 this.myVar = !this.myVar;
		 console.log(myVar);

	};
});

app.controller('TabsDemoCtrl', function ($scope, $window) {
    this.eventinfo = info;
    $scope.model = {
    name: 'Tabs'
  };
});

app.controller('EventfrmController', function() {
	
	this.eventdata = {};

	this.eventinfo = info;
   this.addEvent = function(eventinfo){
   	eventinfo.push(this.eventdata);
   	console.log(this.eventdata);
   	this.eventdata = {};
   
    info = eventinfo;

   };

});
var info=[{

	title:'Alumni batch 2015',
	description:'gajgajgdaj hqhqhkqhkdhqkhq dqhjqhdkqhd qdhkqhdkqhdq qhdkqhdkqd qdkqhkqhqk',
	eventimg:'images/event1.jpg',
	eventdate:'14th november 2016',
	createdBy:'admin'
},	
{

    title:'Tech ex 2016',
	description:'this is the technical event which concentrate mostly on robotics',
	eventimg:'images/event2.jpg',
    eventdate:'14th november 2016',
	createdBy:'user'
},
{
    title:'Game Of Thrones',
	description:'this is the technical event which concentrate mostly on robotics',
	eventimg:'images/event2.jpg',
    eventdate:'14th november 2016',
	createdBy:'user'
   
},
{

    title:'cricket meet 2016',
	description:'this is the technical event which concentrate mostly on robotics',
	eventimg:'images/event2.jpg',
	pollingdate1:'14th november 2016',
	pollingdate2:'15th december 2016',
	pollingdate3:'17th january 2017',
	createdBy:'user'
}


];


})();
