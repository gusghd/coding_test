// 41. 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요. 소수이면 YES로, 소수가 아니면 NO로 출력해주세요. (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
const input = 5;

function isPrime(num) {
    if (num === 2 || num === 3) {
        return true;
    }

    // 제곱근보다 작은 수에서 나눠지는 수가 안나오면 소수
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(input));


// 42. 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요? 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.
// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// 제한 조건
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다. 
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

const month = 5;
const date = 24;

function calculateDay(m, d) {
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    return day[new Date(`2020/${m}/${d}`).getDay()];
}

console.log(calculateDay(month, date));



// 43. 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다. 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?
// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

function convertBinary(num) {
    const binary = [];
    while(num > 0) {
        binary.push(num % 2);
        num = Math.floor(num / 2);
    }
    binary.reverse();
    return binary.join('');
    // return num.toString(2);
}

console.log(convertBinary(33));


// 44. 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
// 예를들어 18234 = 1+8+2+3+4 이고 정답은 18 입니다. 3849 = 3+8+4+9 이고 정답은 24입니다.

function sumNumbers(num) {
    return num.toString().split('').reduce((prev, curr) => {
        return parseInt(prev) + parseInt(curr);
    }, 0)
}

console.log(sumNumbers(18234));

// 답안 방법
let n = prompt('숫자를 입력하세요.');
let sum = 0;

while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
}

console.log(sum);


//45. Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다. 이를 이용하여 현재 연도(2022)를 출력해보세요.
const time = new Date().getTime();
const year = Math.floor(time/(1000*60*60*24*365)) + 1970;
console.log(year);


//46. 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 
// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고, 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
let sum = 0;
for(let i = 10; i <= 15; i++) {
    if ( i < 10) {
        sum += i;
    } else {
        i.toString().split('').forEach(num => sum += parseInt(num, 10))
    }
}
console.log(sum);

// 47. 바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다.  중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.
// 아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.
const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
};
const temp = {}
for(let name in people) {
    if(!temp[name] || temp[name] !== people[name]) {
        temp[name] = people[name];
    }
}
console.log(Object.keys(temp).length);
// Set 이용
const set = new Set();
for(let name in people) {
    set.add(people[name]);
}
console.log(set.size);

// 48. 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
const input8 = 'AAABBBcccddd';

const convert = input8.split('').map(char => {
    if(/[A-Z]/g.test(char)) {
        return char.toLowerCase();
    } else {
        return char.toUpperCase();
    }
}).join('');

console.log(convert);

// 49. 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10
const input9 = '10 9 8 7 6 5 4 3 2 1';
const nums = input9.split(' ');
console.log(Math.max(...nums));

// 50. 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다. 아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
function bubble(arr) {
    let result = arr.slice(); 

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j <result.length - i; j++) {
            if (result[j] > result[j + 1]) {
                //빈칸을 채워주세요.
                const temp = result[j];
                result[j] = result [j+1];
                result[j+1] = temp;
            }
        }
    }
    return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
});

console.log(bubble(items));