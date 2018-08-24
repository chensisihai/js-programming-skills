1、 var arr = [0, 1, 2];
    arr[10] = 6;
    arr.filter(funtion(x) {
        return x === undefined;
    });
    
    结果为： []
    
    原因： filter执行的时候首先检查索引值是不是数组的一个属性  0 in Array => true;  5 in Array => false; 10 in Array => true  ，也就是说 3-9都是
    没有初始化的，是不存在的， array的函数调用时会跳过这些坑
      
    console.log(arr.length) // 11
    console.log(arr[5]) // undefined
    
    
2、 console.log([,,].length) // 2 或者 3  ie8 浏览器上结果为3
