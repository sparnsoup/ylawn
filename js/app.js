/*var APPLICATION_ID = 'E9A6DABE-9DBD-4A03-FFF9-F1807430F000',
    SECRET_KEY = '74D2B681-F4F2-637D-FFFE-3CC7F3CB5C00',
    VERSION = 'v1'; //default application version;

Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);*/

Parse.initialize("vf6Psb1lB7Sge6xO3o8NLOHpdOB4ra2Xl9FZVmeV", "2Rpfp8ywh68TObCmzFlrj5NsUH7qnfWS5ZVEVsCu");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    alert("yay! it worked");
  }
});