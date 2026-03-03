// 객체 리터럴 타입
// 선택적 프로퍼티
let user: { id?: number; readonly name: string } = {
  id: 1,
  name: "김",
};

user = {
  name: "홍길동",
};

// readonly 이기 때문에 수정 불가
// user.name = "kk";

user.id;

let dog: { name: string; color: string } = {
  name: "돌돌이",
  color: "brown",
};

dog.name;
