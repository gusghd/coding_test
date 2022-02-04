// 21.다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.
// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
// 3)  var x = new Set('javascript');
// 4)  var x = new Set(range(5));
// 5)  var x = new Set();
// 답: 3, 5

// 22. 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?
// 1)  i / 6 == 0
// 2)  i % 6 == 0
// 3)  i & 6 == 0
// 4)  i | 6 == 0
// 5)  i // 6 == 0
// 답: 2

// 23. console.log(10/3)의 출력 결과는 3이다.
// 답: X (javascript의 '/' 연산자는 소수점까지 나온다.)

// 24. 민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다. 민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.
const input = 'Justin Biber';
console.log(input.toUpperCase());

// 25. 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다. 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다. 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.
const area = (radius) => {
    return radius * radius * 3.14;
}

const input2 = '5';
console.log(area(input2));

// 26. 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다. 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다. 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
const planets = {
    '수성': 'Mercury',
    '금성': 'Venus',
    '지구': 'Earth',
    '화성': 'Mars',
    '목성': 'Jupiter',
    '토성': 'Saturn',
    '천왕성': 'Uranus',
    '해왕성': 'Neptune'
}
const input3 = '지구';
console.log(planets[input3]);

// 27. 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다. 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.
// 입력
// Yujin Hyewon
// 70 100
const nameInput = 'Yujin Hyewon';
const scoreInput = '70 100';
const names = nameInput.split(' ');
const scores = scoreInput.split(' ');
const resultObj = names.reduce((prev, curr, idx) => {
    prev[curr] = scores[idx];
    return prev;
}, {})
console.log(resultObj);

// 28.2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.  예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.
// 입력
// Javascript
const word = 'Javascript';
for(let i = 1; i < word.length; i++) {
    console.log(word[i-1] + ' ' + word[i]);
}
// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

// 29. 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다. 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.
const alpha = 'a';
if (/[A-Z]/.test(alpha)) {
    console.log('YES');
} else {
    console.log('NO');
}

// 30. 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다. 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요
const str = 'pineapple is yummy';
const search = 'apple';
console.log(str.indexOf(search));