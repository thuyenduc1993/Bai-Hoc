class Application {
    private name: string;
    static count = 0;
    constructor(name: string) {
        this.name = name;
        Application.count++
    }
}
let app1 = new Application('App One');
let app2 = new Application('App Two');
console.log(Application.count);