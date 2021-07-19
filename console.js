console.log("hello".length);
console.log("hello".charAt(0));
console.log("hello world".replace("hello", "goodbye"));
console.log("hello".toUpperCase());

// var全局，let局部
var name = "lee";
let age = 15;
const Pi = 3.1415926;
console.log(name);
console.log(age);
console.log(age++);
console.log(Pi);
// console.log(Pi = 3.14);

// 字符串加法
var x = "3" + 4 + 5;
var y = 3 + 4 + "5";
console.log(x);
console.log(y);
console.log(123 == "123");
console.log(123 === "123");

// 循环
if (name == "lee1") {
    console.log(name);
} else if (age == 18) {
    console.log(age);
} else {
    console.log("stranger");
}

do {
    age++;
    console.log(age, age >= 18 ? "adult" : "child");
}
while (age < 18)

for (let i = 0; i < 3; i++) {
    console.log(age++);
    // age++ === {print age; age=age+1;}
    // ++age === {age=age+1; print age;}
}

switch (name) {
    case "lee":
        console.log("lee");
        break;
    case "zhou":
        console.log("zhou");
        break;
    default:
        console.log("stranger");
}

// 对象
var obj = new Object;
var obj2 = {};

obj = {
    name: "jason",
    age: "18",
    contact: {
        phone: "183",
        eamil: "183@abc.com"
    }
}
console.log(obj);
console.log(obj.contact);
console.log(obj.contact.phone);

// 数组
var a = new Array();
var b = ["cat", "dog", "bird"];
a[0] = "cat";
a[1] = "dog";
a[4] = "bird";
a.unshift("lion");
a.push("pig");
console.log(a);
a.pop();

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
for (let i in a) {
    console.log(a[i]);
}

b.reverse();
console.log(b);

// 函数 参数可没有格式
var k = 1;

function add() {
    k++;
}
add();
console.log(k);
// 不支持重载 所以add(x)不识别
function add1(x) {
    k += x;
}
add1(4);
console.log(k);
// 设计N个参数arguments的函数
function addN() {
    let sum = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(addN(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// 闭包 返回的是一个新的function
function makeAdder(a) {
    return function(b) {
        return a + b;
    };
}
var func = makeAdder(4);
console.log(func(5));