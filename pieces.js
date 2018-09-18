1、判断是否为undefined类型

    typeof window.a == 'undefined';

2、 var a = null;
    console.log(typeof a); // 'object'

    null值为一个空指针对象

3、 var undefined;
    undefined == null; // true    undefined与null相等，但不恒等（===）
    1 == true;   // true    尝试将boolean转换为number，0或1
    2 == true;   // false
    0 == false;  // true
    0 == '';     // true   一个是number一个是string时，会尝试将string转换为number
    NaN == NaN;  // false
    [] == false; // true
    [] == ![];   // true

    // 尝试将Object转换成number或string，取决于另外一个对比量的类型
    // 所以，对于0、空字符串的判断，建议使用 “===” 。“===”会先判断两边的值类型，类型不匹配时为false。


    // 然后：

    var foo = "11"+2-"1";
    console.log(foo);  // 111
    console.log(typeof foo); // Number

    var foo = "11"+2+"1";    //体会加一个字符串'1' 和 减去一个字符串'1'的不同
    console.log(foo); // '1121'
    console.log(typeof foo); // String

4、// 为了保证页面输出安全，我们经常需要对一些特殊的字符进行转义，请写一个函数escapeHtml，将<, >, &, “进行转义

//     function escapeHtml(str) {
//         return str.replace(/[<>”&]/g, function(match) {
//             switch (match) {
//                    case “<”:
//                       return “<”;
//                    case “>”:
//                       return “>”;
//                    case “&”:
//                       return “&”;
//                    case “\””:
//                       return “"”;
//               }
//           });
//     }

5、 foo = foo ||bar // 这行代码是什么意思？为什么要这样写？
    //  等价于
    if(!foo) foo = bar; //如果foo存在，值不变，否则把bar的值赋给foo。

    // 短路表达式：作为"&&"和"||"操作符的操作数表达式，这些表达式在进行求值时，只要最终的结果已经可以确定是真或假，求值过程便告终止，这称之为短路求值。


6、for(var i=1;i<=3;i++){
      setTimeout(function(){
          console.log(i);   
      },0); 
    };  // 4, 4, 4

 //  如何让上述代码输出 1，2， 3

   for(var i=1;i<=3;i++){
       setTimeout((function(a){  //改成立即执行函数
           console.log(a);   
       })(i),0); 
   };

7、 Math.ceil()用作向上取整。
    Math.floor()用作向下取整。
    Math.round() 我们数学中常用到的四舍五入取整。

    console.log(0.6|0)//0
    console.log(1.1|0)//1
    console.log(3.65555|0)//3
    console.log(5.99999|0)//5
    console.log(-7.777|0)//-7

    console.log(3|4); //7
    console.log(4|4);//4
    console.log(8|3);//11
    console.log(5.3|4.1);//5
    console.log(9|3455);//3455

    // 单竖线 '|'运算就是 转换为2进制之后相加得到的结果， 和0运算时向下取整
