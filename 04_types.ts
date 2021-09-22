//object 表示一个js的对象 一切都是对象
let a:object;
a = function(){};

       

//{}用来指定对象中可以包含哪些属性
//语法：{属性名：属性值,属性名：属性值}

//在属性 名后面加上?, 表示属性可选 
let b:{name:string,age?:number}
b = {name:"悟空",age:18}
//[propName:string]；any 表示任意类型的属性
let c : {name:string, [propName:string]:any};
//定义了箭头函数的形式 设置函数结构的类型声明
/*
语法 (形参：类型，形参：类型)
*/
let d:(a:number,b:number)=>number;
d = function(n1:number,n2:number):number{
    return n1 + n2
}

// array 数值 
//string[]表示字符串数组
let e:string[];

let f:number[];

let g:Array<number>;
// g = [1,2,3,'hello']


/**元组  固定长度的数组 python */
let h:[string,number];

/**enum 枚举 最典型的应用 就是 可以选择一个的 */
enum ChineseZodia{
    rat=1,
    cattle=2,
    tiger=3
}
let rat = ChineseZodia.rat;

/* &表示同时并且  */
let j:{name:string}&{age:number}
// j = {name:1,age:10}
//正确写法
j = {name:"孙悟空", age:10}

//类型的别名
type myType = 1|2|3|4
let k:myType;
let l:myType;