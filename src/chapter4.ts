// 타입별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "kim",
  nickname: "hido",
  birth: "2003",
  bio: "안녕",
  location: "서울시",
};

let user2: User = {
  id: 1,
  name: "Lee",
  nickname: "garnet",
  birth: "2002",
  bio: "hi",
  location: "경기도",
};

// 불가
// type User = {
//   height: number;
// };

const test = () => {
  // 스코프가 다르다면 OK!
  type User = string;
};

// index Signature
// 인덱스 시그니쳐
// 이 객체 타입에는 key가 string 타입이고
// value가 string 타입인 모든 프로퍼티를 포함된다.
type CountryCodes = {
  [key: string]: string;
};

// type CountryCodes = {
//   Korea: string;
//   USA: string;
//   UK: string;
//   // ... (약 100개)
//   Brazil: string;
// };

let countryCodes: CountryCodes = {
  Korea: "ko",
  USA: "us",
  UK: "uk",
  // ... (약 100개)
  Brazil: "bz",
};

// 인덱스 시그니쳐를 사용하면서
// 동시에 추가적인 프로퍼티를 또 정의할 때
// 인덱스 시그니쳐의 value 타입과
// 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 함
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 포함, value 타입이  number 이어야 함. 그 외의 타입은 오류!
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 23,
  USA: 24,
};
