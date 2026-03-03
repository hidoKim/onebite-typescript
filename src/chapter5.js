// 열거형(enum) 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
var user1 = {
    name: "이",
    role: Role.ADMIN,
};
var user2 = {
    name: "박",
    role: Role.USER,
};
var user3 = {
    name: "최",
    role: Role.GUEST,
};
console.log(user1.role); // 10
console.log(user2.role); // 11
console.log(user3.role); // 12
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
var user4 = {
    name: "이",
    role: Role.ADMIN,
    language: Language.korean,
};
console.log(user4);
