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

8、//  全局变量和局部变量
    var f = true;
    if (f === true) {
      var a = 10;
    }

    function fn() {
      var b = 20;
      c = 30;
    }

    fn();
    console.log(a);
    console.log(b);
    console.log(c);

    // a: 10, b: 报错， c: 30
    // js中在function内的新声明的变量才是局部变量， 没有用var声明的变量在哪里都是全局变量

9、// 实现快速排序

      function quickSort(arr) {
            if (arr.length <= 1) {
                return arr;
            }
            var leftArr = [];
            var rightArr = [];
            var x = Math.floor(arr.length / 2)
            var midNum = arr.splice(x, 1);
            
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] <= midNum[0]) {
                    leftArr.push(arr[i]);
                } else {
                    rightArr.push(arr[i]);
                }
            }

            return quickSort(leftArr).concat(midNum, quickSort(rightArr));
        }

        var arrtest = [1, 7, 2, 9, 4, 8];
        console.log(quickSort(arrtest));

10、 // null和undefined的区别？
     // null是一个表示”无”的对象，转为数值时为0；undefined是一个表示”无”的原始值，转为数值时为NaN。

     // 当声明的变量还未被初始化时，变量的默认值为undefined。

     // null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。

     // undefined表示”缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是：

        // （1）变量被声明了，但没有赋值时，就等于undefined。
        // （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
        // （3）对象没有赋值的属性，该属性的值为undefined。
        //（4）函数没有返回值时，默认返回undefined。

     // null表示”没有对象”，即该处不应该有值。典型用法是：

        // （1） 作为函数的参数，表示该函数的参数不是对象。
        // （2） 作为对象原型链的终点。

11、 // 创建ajax的过程
    
   // (1)创建`XMLHttpRequest`对象,也就是创建一个异步调用对象.

   // (2)创建一个新的`HTTP`请求,并指定该`HTTP`请求的方法、`URL`及验证信息.

  //  (3)设置响应`HTTP`请求状态变化的函数.

   // (4)发送`HTTP`请求.

   // (5)获取异步调用返回的数据.

   // (6)使用JavaScript和DOM实现局部刷新.


    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open('GET','demo.php','true');

    xmlHttp.send()

    xmlHttp.onreadystatechange = function(){

        if(xmlHttp.readyState === 4 & xmlHttp.status === 200){

        }

    }
