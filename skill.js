1、对象转换为数组

    //注意对象必须是以下格式的才可以通过此方式转化为数组
    //获取的DOM集合，以及函数的arguments也可以通过此方式转化为数组
    var obj = {
        0: 'qian',
        1: 'long',
        2: 'chu',
        3: 'tian',
        length: 4

    }
    var objArr = Array.prototype.slice.call(obj);
    // var objArr = [].slice.call(obj);
    // var objArr = Array.prototype.slice.apply(obj);
    console.log(objArr)
    
2、验证是否为数组

  function isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
  }
  或者
  function isArray(obj) {
     return obj instanceof Array
  }
  
3、获取数组中最大或者最小值

  function maxAndMin(arr){
      return {
         max:Math.max.apply(null,arr.join(',').split(',')),
         min:Math.min.apply(null,arr.join(',').split(','))
      }
  }
  
4、保留指定小数位

  var num =4.345678;
  num = num.toFixed(4);  // 4.3457 第四位小数位以四舍五入计算
  
