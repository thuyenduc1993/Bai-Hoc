import {User} from "./User";

let user1= new User('Bùi Văn Đức', "thuyenduc93@gmail.com",3);
let user2= new User('Bùi Văn Thuyên', "thuyenduc93@gmail.com",2);
let user3= new User('Bùi Thị Duyên', "thuyenduc93@gmail.com",1);

console.log(user1.getInfo());
console.log(user1.isAdmin);