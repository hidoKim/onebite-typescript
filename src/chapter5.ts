// 열거형(enum) 타입
enum Role {
  ADMIN = 10, // 기본적으로 0이 자동 할당됨
  USER,
  GUEST,
}

const user1 = {
  name: "이",
  role: Role.ADMIN,
};

const user2 = {
  name: "박",
  role: Role.USER,
};

const user3 = {
  name: "최",
  role: Role.GUEST,
};

console.log(user1.role); // 10
console.log(user2.role); // 11
console.log(user3.role); // 12

enum Language {
  korean = "ko",
  english = "en",
}

const user4 = {
  name: "이",
  role: Role.ADMIN,
  language: Language.korean,
};

console.log(user4);
