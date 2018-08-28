1、 var arr = [0, 1, 2];
    arr[10] = 6;
    arr.filter(funtion(x) {
        return x === undefined;
    });
    
    //结果为： []
    
    //原因： filter执行的时候首先检查索引值是不是数组的一个属性  0 in Array => true;  5 in Array => false; 10 in Array => true  ，也就是说 3-9都是
    //没有初始化的，是不存在的， array的函数调用时会跳过这些坑
      
    console.log(arr.length) // 11
    console.log(arr[5]) // undefined
    
    
2、 console.log([,,].length) // 2 或者 3  ie8 浏览器上结果为3

3、 function f() {
        return f;
    }

    new f() instanceof f // false

    //当代码 new f()执行时，下面事情将会发生：一个新对象被创建。它继承自 f.prototype , 构造函数 f被执行。执行的时候，相应的传参会被传入，同时上下文( this)会被指定为这个新实例。 new f等同于 new f()，只能用在不传递任何参数的情况。
    //如果构造函数返回了一个“对象”，那么这个对象会取代整个 new出来的结果。如果构造函数没有返回对象，那么 new出来的结果为步骤1创建的对象，
    //ps：一般情况下构造函数不返回任何值，不过用户如果想覆盖这个返回值，可以自己选择返回一个普通对象来覆盖。当然，返回数组也会覆盖，因为数组也是对象
    //于是，我们这里的 new f()返回的仍然是函数 f本身，而并非他的实例
    
