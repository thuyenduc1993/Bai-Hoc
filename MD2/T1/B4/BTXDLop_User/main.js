"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var user1 = new User_1.User('Bùi Văn Đức', "thuyenduc93@gmail.com", 3);
var user2 = new User_1.User('Bùi Văn Thuyên', "thuyenduc93@gmail.com", 2);
var user3 = new User_1.User('Bùi Thị Duyên', "thuyenduc93@gmail.com", 1);
console.log(user1.getInfo());
console.log(user1.isAdmin);
