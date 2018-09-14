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
