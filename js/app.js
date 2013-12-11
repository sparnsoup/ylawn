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

var MowUpdate1 = Parse.Object.extend("MowUpdate1");
var mowUpdate1 = new MowUpdate1();
var mowQuery = new Parse.Query(MowUpdate1);
var WaterUpdate1 = Parse.Object.extend("WaterUpdate1");
var waterUpdate1 = new WaterUpdate1();
var waterQuery = new Parse.Query(WaterUpdate1);
var FertUpdate1 = Parse.Object.extend("FertUpdate1");
var fertUpdate1 = new FertUpdate1();
var fertQuery = new Parse.Query(FertUpdate1);

//display saved data
mowQuery.equalTo("user", "Bryan");
mowQuery.find({
    success: function (results) {
        // Successfully retrieved the object.
        for (var i = 0; i < results.length; i++) {
            var mowObject = results[results.length - 1];
            //alert(object.id + ' - ' + object.get('date'));
            //var results = object;
            var lastMowDate = mowObject.get('date');
            var lastDirection = mowObject.get('direction');
            $('#mow-date-field1').html(lastMowDate);
            $('#mow-direction1').html(lastDirection);
        }
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }
});

//display saved data
waterQuery.equalTo("user", "Bryan");
waterQuery.find({
    success: function (results) {
        // Successfully retrieved the object.
        for (var i = 0; i < results.length; i++) {
            var waterObject = results[results.length - 1];
            var lastWaterDate = waterObject.get('date');
            $('#water-date-field1').html(lastWaterDate);
        }
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }
});

//display saved data
fertQuery.equalTo("user", "Bryan");
fertQuery.find({
    success: function (results) {
        // Successfully retrieved the object.
        for (var i = 0; i < results.length; i++) {
            var fertObject = results[results.length - 1];
            //alert(object.id + ' - ' + object.get('date'));
            //var results = object;
            var lastFertDate = fertObject.get('date');
            var lastType = fertObject.get('type');
            $('#fert-date-field1').html(lastFertDate);
            $('#fert-type1').html(lastType);
        }
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }
});