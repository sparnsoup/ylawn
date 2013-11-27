var APPLICATION_ID = 'E9A6DABE-9DBD-4A03-FFF9-F1807430F000',
    SECRET_KEY = '74D2B681-F4F2-637D-FFFE-3CC7F3CB5C00',
    VERSION = 'v1'; //default application version;

Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

var user = new Backendless.User();
user.email = "foo@foo.com";
user.password = "foo";
user.name = "Bob";
 
Backendless.UserService.register(user);
 
function Comment(args) {
    args = args || {};
    this.message = args.message || "";
    this.authorEmail = args.authorEmail || "";
}
var dataStore = Backendless.Persistence.of(Comment);
var commentObject = new Comment({message: "Hello, world!", authorEmail: user.email})  
dataStore.save( commentObject );