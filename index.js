// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
function checkArray(str){
    return str instanceof Array; 
}
console.log(checkArray(a));
console.log(checkArray(b));

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function mul(array){
    for(let i=0;i<array.length;i++)
    {
        array[i]=array[i]*2;
    }
    return array;
}
console.log(mul(a));

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
function case1(str){
    return str.join(" ")
}
function case2(str){
    return str.join("+")
}
function case3(str){
    return str.join(",")
}
console.log("case 1 output:",case1(colors));
console.log("case 2 output:",case2(colors));
console.log("case 3 output:",case3(colors));

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function sortNumber(a,b){
    return a-b;
}
console.log(a.sort(sortNumber))

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(str){
    var obj={};
    var maxNum=0;
    var mostChar=null;
    for(let i=0;i<str.length;i++){
        let char=str[i];
        obj[char] === undefined ? obj[char]=1 : (obj[char]++);
        if(obj[char]>maxNum){
            mostChar=char;
            maxNum=obj[char];
        }
    }
    return mostChar;
}
console.log(findMost(a));