// let a: string;
//可以直接使用字面量进行类型声明
let a: 10;
let b: "hello";
//联合类型
let c : "male" | "female";
let d : boolean | string;

//any表示任意类型，设置为any后，相当于对该变量关闭了ts类型检测
let e:any;

// 实际上是一个类型安全的any
let f:unknown;
f = 'a'
let g ='hello';
f = g
// 直接将f赋值给g会出问题
// g = f
if(typeof f === 'string'){
    g = f 
}
//类型断言 或者第二种
g =f as string;
g =<string>f;

// void never 主要用于设置函数的返回值

//返回值是string 或者是number 
function fn(): string | number{
    return 123;
}

//没有返回值的时候返回为空值
function voidfn():void{
    return ;
}

//never 表示没有值， 永远不返回 用得少
function neverfun():never{
//是用来报错的
throw new Error('出错啦');
}