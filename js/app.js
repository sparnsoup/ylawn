/*var APPLICATION_ID = 'E9A6DABE-9DBD-4A03-FFF9-F1807430F000',
    SECRET_KEY = '74D2B681-F4F2-637D-FFFE-3CC7F3CB5C00',
    VERSION = 'v1'; //default application version;

Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);*/

Parse.initialize("vf6Psb1lB7Sge6xO3o8NLOHpdOB4ra2Xl9FZVmeV", "2Rpfp8ywh68TObCmzFlrj5NsUH7qnfWS5ZVEVsCu");

/*var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    alert("yay! it worked");
  }
});*/

var Lawn1 = Parse.Object.extend("Lawn1");
var lawn1 = new Lawn1();
var ylawnQuery1 = new Parse.Query(Lawn1);
var Lawn2 = Parse.Object.extend("Lawn2");
var lawn2 = new Lawn2();
var ylawnQuery2 = new Parse.Query(Lawn2);
var Lawn3 = Parse.Object.extend("Lawn3");
var lawn3 = new Lawn3();
var ylawnQuery3 = new Parse.Query(Lawn3);


//display saved data
ylawnQuery1.equalTo("user", "Bryan");
ylawnQuery1.find({
    success: function (results) {
        // Successfully retrieved the object.
        for (var i = 0; i < results.length; i++) {
            var lawn1Object = results[results.length - 1];
            var lastUpdate1 = lawn1Object.get('date');
            $('#lawn1-updated-variable').html(lastUpdate1);
        }
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }
});
//display saved data
ylawnQuery2.equalTo("user", "Bryan");
ylawnQuery2.find({
    success: function (results) {
        // Successfully retrieved the object.
        for (var i = 0; i < results.length; i++) {
            var lawn1Object = results[results.length - 1];
            var lastUpdate2 = lawn1Object.get('date');
            $('#lawn2-updated-variable').html(lastUpdate2);
        }
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }
});
//display saved data
ylawnQuery3.equalTo("user", "Bryan");
ylawnQuery3.find({
    success: function (results) {
        // Successfully retrieved the object.
        for (var i = 0; i < results.length; i++) {
            var lawn1Object = results[results.length - 1];
            var lastUpdate3 = lawn1Object.get('date');
            $('#lawn3-updated-variable').html(lastUpdate3);
        }
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }
});