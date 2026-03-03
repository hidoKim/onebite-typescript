let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["1", "2", "3"];

let boolArr: boolean[] = [true, false, true];

// 유니온 타입
let multiArr: (number | string)[] = [1, "hi"];

let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// 튜블도 push, pop 가능

tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

const users: [string, number][] = [
  ["이", 1],
  ["김", 2],
  ["최", 3],
  //  [4, "서"], // 오류 발생
];
