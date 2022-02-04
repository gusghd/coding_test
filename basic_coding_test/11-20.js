// 11. 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. for를 사용해야 합니다.

let s = 0;
//pass
for(let i = 1; i <= 100; i++) {
    s += i;
}
console.log(s);

// 12.다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오. 주어진 소스 코드를 수정해선 안됩니다.

class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }

    attack() {
        console.log('파이어볼');
    }
}

// 프로토타입형
function Wizard(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
}

Wizard.prototype.attack = function() {
    console.log('파이어볼');
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
// 출력
// 545 210 10
// 파이어볼


// 13. 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다. 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.
// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const input = 1;
console.log(planets[input - 1]);


// 14. 영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다. 입력으로 랜덤한 숫자 n이 주어집니다.
// 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.
const input2 = 5;
if (input2 % 3 === 0) {
    console.log('짝');
} else {
    console.log(input2);
}

// 15. 신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다. 만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 해주세요.
const input3 = '김다정';
console.log(`안녕하세요. 저는 ${input3}입니다.`);

// 16. 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
const input4 = '거꾸로';
console.log(input4.split('').reverse().join(''));

// 17. 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다. 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.
// 입력으로 키가 주어지면 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.
const input5 = 177;
if(input5 > 150) {
    console.log('YES');
} else {
    console.log('NO');
}

// 18. 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다. 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 단, 소숫점 자리는 모두 버립니다.
const input6 = '77 55 48';
const total = input6.split(' ').reduce((prev, curr) => {
    return Number(prev) + Number(curr);
}, 0)
console.log(Math.floor(total / 3));

// 19. 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
const input7 = '5 3';
const [a, b] = input7.split(' ');
console.log(Math.pow(a, b));

// 20. 공백으로 구분하여 두 숫자가 주어집니다. 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
const input8 = '22 5';
const [num1, num2] = input8.split(' ');
console.log(`${Math.floor(num1/num2)} ${num1%num2}`);