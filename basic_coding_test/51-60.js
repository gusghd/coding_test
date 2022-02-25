// 51. 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.
// 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

function mergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];

    while (left.length > 0 && right.length > 0){
        if (left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        /*빈칸을 채워주세요*/
        result.push(left.shift());
    }
    while (right.length) {
        /*빈칸을 채워주세요*/
        result.push(right.shift());
    }

    return result;
}

const array = '3 1 2 6 5 4 7'.split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));


// 52. 퀵소트
function quickSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i=1; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = '3 1 2 6 5 4 7'.split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array));


// 53. 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자. 
// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)
// 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.

function checkBraket(input) {
    const arr = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === ']') {
            if (arr.pop() !== '[') {
                return 'NO';
            }
        } else if (input[i] === '}') {
            if (arr.pop() !== '{') {
                return 'NO';
            }
        } else if (input[i] === ')') {
            if (arr.pop() !== '(') {
                return 'NO';
            }
        } else {
            arr.push(input[i])
        }
    }

    return arr.length === 0 ? 'YES' : 'NO';
}

console.log(checkBraket('([()])'))


// 54. 연속되는 수
// 은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다. 
// 그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.

// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오.

function checkConsecutive(input) {
    arr = input.split(' ').map(item => parseInt(item, 10)).sort((a, b) => a - b);

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i]+1 !== arr[i+1]) {
            return 'NO'
        }
    }

    return 'YES';
}

// 55. 하노이의 탑

// 하노이의 탑은 프랑스 수학자 에두아르드가 처음으로 발표한 게임입니다. 하노이의 탑은 A, B, C 3개의 기둥과 기둥에 꽂을 수 있는 N 개의 원판으로 이루어져 있습니다. 이 게임에서는 다음의 규칙을 만족해야 합니다.

// > 1. 처음에 모든 원판은 A 기둥에 꽂혀 있다.
// 2. 모든 원판의 지름은 다르다.
// 3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
// 4. 작은 원반 위에 큰 원반을 놓을 수 없다.
// 5. 한 번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다.
// > 

// 이 규칙을 만족하며 A 기둥에 있는 원반 N 개를 모두 C 원반으로 옮기고 싶습니다.
// 모든 원반을 옮기기 위해 실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램을 완성해 주세요.

// >하노이의 탑은 hanoi(n-1)의 개수만큼 경유지점으로 이동을 한 후 
// 원판을 목표지점으로 옮기고 
// 다시 경유지점에서 목표지점까지 hanoi(n-1)의 개수만큼 이동해야한다.

const route = [];

function hanoi(num, start, end, temp){
    //원판이 한 개일 때에는 바로 옮기면 됩니다.
    if (num === 1) {
        route.push([start, end]);
        return NaN;
    }

    //원반이 n-1개를 경유기둥으로 옮기고
    hanoi(num-1, start, temp, end);
    //가장 큰 원반은 목표기둥으로
    route.push([start, end]);
    //경유기둥과 시작기둥을 바꿉니다.
    hanoi(num-1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);


// 56. 객체의 함수 응용
// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
// 데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

// 출력
// England 22023

function diffWidthWithKorea(nations) {
    const koreaWidth = nations['korea'];
    let min = Number.MAX_SAFE_INTEGER;
    let contury = '';

    for(const key in nations) {
        if (key !== 'korea' && min > nations[key] - koreaWidth) {
            min = nations[key] - koreaWidth;
            contury = key;
        }
    }

    console.log(contury, min);
}

diffWidthWithKorea(nationWidth);



// 57. # 1의 개수
// **0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.
// 그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.

function countNumberOfOne(maxNumber) {
    let count = 0;

    for (let i = 0; i <= maxNumber; i++) {
        const arr = i.toString().split('');
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === '1') {
                count += 1;
            }
        }
    }

    return count;
} 

console.log(countNumberOfOne(1000))
// 해설답안
let s = '';
for(let i = 0; i <= 1000; i++){
    s += i;
}
console.log(s);
console.log(s.match(/1/g).length);


// 58. 콤마 찍기

// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

// **숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**

// 예를 들어, **123456789**를 입력받았으면 **123,456,789**를 출력해야 합니다.

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

numberWithCommas('**123456789**');


// 59.빈칸채우기
// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.
// 입력
// hi

// 출력
// ========================hi========================

function fillEqual(input) {
    const left = Math.round((50 - input.length) / 2);
    let result = '';
    
    result = input.padStart(left, '='); 
    result = result.padEnd(50, '=')

    // for(let i = 0; i < left; i++) {
    //     result += '=';
    // }

    // result += input;

    // for(let i = 0; i < 50 - left - input.length; i++) {
    //     result += '=';
    // }

    return result;
}

console.log(fillEqual('hi'));


// 60.번호 매기기

// 새 학기가 되어 **이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다**.
// 데이터에 입력된 이름을 아래와 같이 출력해 주세요.

// 데이터
students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연']


// 출력
// 번호: 1, 이름: 강은지
// 번호: 2, 이름: 강채연
// 번호: 3, 이름: 권윤일
// 번호: 4, 이름: 김민호
// 번호: 5, 이름: 김유정
// 번호: 6, 이름: 김진이
// 번호: 7, 이름: 김채리
// 번호: 8, 이름: 박지호
// 번호: 9, 이름: 박현서
// 번호: 10, 이름: 최성훈
// 번호: 11, 이름: 한지호
// 번호: 12, 이름: 홍유진

function sortStudent(studentArray) {
    studentArray.sort();
    for(const [idx, std] of studentArray.entries()) {
        console.log(`번호: ${idx+1}, 이름: ${std}`);
    }
}

console.log(sortStudent(students));