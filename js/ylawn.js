$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("vf6Psb1lB7Sge6xO3o8NLOHpdOB4ra2Xl9FZVmeV", "2Rpfp8ywh68TObCmzFlrj5NsUH7qnfWS5ZVEVsCu");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    alert("yay! it worked");
  }
});