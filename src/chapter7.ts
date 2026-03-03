const func2 = (): void => {
  console.log("hello");
};

func2();

let a: void;
a = undefined;

// 불가능 한 값의 타입을 정의 : never
const func3 = (): never => {
  while (true) {}
  // 함수가 어떠한 값도 반환할 수 없는 상황일 때
};

// 의도적으로 오류를 발생시키는 함수도 never 타입 반환
const func4 = (): never => {
  throw new Error();
};

let anyVar: any;

let anyNever: never;

// anyNever = 1;
// anyNever = null;
// anyNever = undefined;
// anyNever = anyVar;

// 변수가 never 이면 any를 포함해, 어떤 타입도 변수에 담을 수 없음
