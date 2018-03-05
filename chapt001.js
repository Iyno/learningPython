//数组
//数组是一组按顺序排列的集合，集合的每个值称为元素。
//JavaScript的数组可以包括任意数据类型

var arr=[1,2,3.14,'hello',null,true];
arr[0];//返回索引为0的元素，即1
arr[7];//索引超出了范围，返回undefined


// 另一种创建数组的方法是通过Array()函数实现
var arr2=new Array(1,2,3);

//对象-js的对象是由一组键-值的无序集合
var person={
    name:'Bob',
    age:20,
    tags:['js','web','mobile'],
    city:'beijing',
    hasCar:true,
    zipcode:null
};

//要获取一个对象的属性，我们用对象变量.属性名的方式
person.name;//Bob
person.zipcode;//null
console.log(person.city);

//变量
//变量名是大小写英文、数字、$和_的组合，且不能用数字开头。
// 变量名不能是JavaScript的关键字，如if、while等。申明一个变量用var语句

var a;
var $b=1;
var s_007='007';
var Answer=true;
var t=null;


//等于号=对变量进行赋值
//同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用var申明一次
var aa=123;
aa='ABC';
console.log(aa);

//strict模式
//如果不用var声明，则变量被声明为全局变量；
//使用var声明的变量作用范围在被申明的函数体内
//使用strict模式，如果未用var声明则会运行出错
//在代码第一行加上'use strict'

