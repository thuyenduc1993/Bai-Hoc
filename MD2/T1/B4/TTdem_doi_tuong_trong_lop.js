var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
var app1 = new Application('App One');
var app2 = new Application('App Two');
console.log(Application.count);
