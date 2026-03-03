// any 타입
// === 아무거나 타입
let anyVar: any = 10;

anyVar = "hello";
anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

let num: number = 10;
num = anyVar; // 가능 (위험)

// any는 사용하지 말것. (위험함)

// unknown 타입
// 어떤 타입의 값이든 다 저장 가능.
// but 반대는 안됨. 어떤 타입의 변수에도 저장 불가
// 즉, 값을 저장만 할 수 있음.
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 불가 (안전)

// unknownVar * 2; // 연산 불가, 메서드 사용 불가

// 만약 unknown 타입을 number 타입처럼 취급하고 싶다면,
// 조건문을 이용해 number 타입의 값임을 보장해줘야 함.
if (typeof unknownVar === "number") {
  unknownVar * 2;
}

// 특정 변수가 어떤 값을 받게 될 지 모를 경우 any 대신 unknown을 사용
