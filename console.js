/*
   以下为针对HTML页面操作 HTML、CSS、属性attribute
*/

// 提前设置缺省 default类在CSS里

// text...只能更改文本，inner包含文本及其标签。
document.querySelector("form label").textContent = "Good Name";

document.querySelector("#HTMLbtn").addEventListener("click", function() {
    document.querySelector("form label").innerHTML = "<em>Good Luck Name</em>";
});

// 以下2句可以直接用toggle在btn中表达
// document.querySelector("form label").classList.add("default");
// document.querySelector("form label").classList.remove("default");
document.querySelector("#CSSbtn").addEventListener("click", function() {
    document.querySelector("form label").classList.toggle("default");
});

// attribute对属性进行增删改操作
document.querySelector("th").setAttribute("class", "default");

document.querySelector("#CLASSbtn").addEventListener("click", function() {
    document.querySelector("form label").attributes.class.value = "attribute";
});
document.querySelector("#CLASSbtn").addEventListener("mouseleave", function() {
    document.querySelector("form label").classList.remove("attribute");
});










/*
    以下为控制台显示内容
 */
console.log("hello".length);
console.log("hello".charAt(0));
console.log("hello world".replace("hello", "goodbye"));
console.log("hello".toUpperCase());

var web1 = "";

function hd() {
    var web = "houdunren.com";
    web1 = "hanabi.com";
    console.log(web);
}
hd();
// console.log(web); // 函数内部声明的变量只能内部使用
console.log(web1); // web1为全局变量，没有块作用域概念（ES6新增）

// 非函数内部声明的var会影响全局，let/const只影响局部（块作用域 for while...）
var name = "lee";
let age = 15;
const Pi = 3.1415926;
console.log(name);
console.log(age);
console.log(age++);
console.log(Pi);
// console.log(Pi = 3.14);

// cosnt 对象（引用类型） 内部的值port 可以被修改
const INFO = {
    url: 'hanabi.com',
    port: '8080'
};
INFO.port = '443';
console.log(INFO);
Object.freeze(INFO);
// INFO.port = '443'; //变量被冻结后不可修改const

// 字符串加法
var x = "3" + 4 + 5;
var y = 3 + 4 + "5";
console.log(x);
console.log(y);
console.log(123 == "123"); // 有强制类型转换
console.log(123 === "123");

// 与&优先于或| 
console.log(true || false && false);

// 短路特性：前面为真就不判断后者，prompt是个输入框：没有输入视为false
let sex = prompt("你的性别是？") || "保密";
console.log(sex);

let opt = {
    url: ''
};

function getUrl(opt) {
    opt.url = '默认地址';
}
opt.url || getUrl(opt);
console.log(opt.url);

// 控制循环
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
} while (age < 18)

for (let i = 0; i < 3; i++) {
    console.log(age++);
    // age++ === {print age; age=age+1;} 称后置操作
    // ++age === {age=age+1; print age;} 称前置操作
}

// 打印杨辉三角：要注意每行 *前空格的个数，document.write是js对html的写方法
for (let i = 1; i <= 5; i++) {
    for (let n = 5 - i; n > 0; n--) {
        document.write('&nbsp;');
    }
    for (let m = i * 2 - 1; m > 0; m--) {
        document.write('*');
    }
    document.write("<br/>");
}
// 再打一遍，基本逻辑 先空格，再星星，层层打印，数量关系理清楚
for (let i = 1; i <= 5; i++) {
    for (let block = 5 - i; block > 0; block--) {
        document.write('&ensp;');
    }
    for (let star = 2 * i - 1; star > 0; star--) {
        document.write('*');
    }
    document.write('<br/>');
}

// case可合用，break跳出，continue跳到循环起始/标签label处继续执行，continue适合逐个处理文本（大学做过）
switch (name) {
    case "lee":
    case "lee1":
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
// for/in 效果上等同于前者 获得索引index，再遍历
for (let i in a) {
    console.log(a[i]);
}
// for/of 与 /in不同，它只能使用CONST类型迭代器遍历可迭代的数据结构，且直接取值。
for (const iterator of a) {
    console.log(iterator);
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