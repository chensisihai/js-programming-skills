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
  // 或者
  function isArray(obj) {
     return obj instanceof Array
  }
  // 或者
  Array.isArray(obj);
  
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

5、判断字符串是否为空

    String.prototype.isEmpty = function () {
        return this.trim() === '';
    }

6、取数组的最后一个元素

    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    
    function last(arr) {
        return arr[arr.length -1]'
    }

7、数组去重
   （1） 利用对象的属性去重 （推荐使用）
    function unique(arr) { // 推荐使用
        var res = [];
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            if (!obj[arr[i]]) {
                arr.push(arr[i]);
                obj[arr[i]] = 1;
            }
        }
        return res;
    }

   （2）基本的去重方法： 
        定义一个新数组，并存放原数组的第一个元素，然后将原素组一一和新数组的元素对比，若不同则存放在新数组中。
        function unique(arr){
          var res = [arr[0]];
          for(var i=1;i<arr.length;i++){
            var repeat = false;
            for(var j=0;j<res.length;j++){
              if(arr[i] == res[j]){
                repeat = true;
                break;
              }
            }
            if(!repeat){
              res.push(arr[i]);
            }
          }
          return res;
        }
 
   （3） 利用下标查询 （indexOf）
         function unique(arr){
             var newArr = [arr[0]];
             for(var i=1;i<arr.length;i++){
                if(newArr.indexOf(arr[i]) == -1){
                     newArr.push(arr[i]);
                }
             }
                return newArr;
         }
   
    （4）先排序再去重
         先将原数组排序，在与相邻的进行比较，如果不同则存入新数组
         function unique(arr){
              var arr2 = arr.sort(function(a, b){
                  return a - b;
              });
              var res = [arr2[0]];
              for(var i=1;i<arr2.length;i++){
                if(arr2[i] !== res[res.length-1]){
                  res.push(arr2[i]);
                }
              }
              return res;
          }

8、数组元素删除

    Array.prototype.remove = function (val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };

9、数组与对象的深复制

    function deepCopy(obj) {
        if (typeof obj == 'object') {
            return JSON.parse(JSON.stringify(obj));
        }
        else {
            return obj
        };
    }

10、获取url传参

    function query(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var param = window.location.search.substr(1).match(reg);
        if (param !== null) {
            return unescape(param[2]);
        } else {
            return '';
        }
    }

11、字符串格式化

    String.prototype.format = function () {
        if (arguments.length == 0) return this;
        for (var str = this, i = 0; i < arguments.length; i++)
            str = str.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
        return str;
    };

12、日期格式化

    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "H+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    
13、表单序列化为JSON

    $.fn.serializeJSON = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };
