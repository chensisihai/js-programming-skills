1、 // 通用的时间注册函数
    function addEvent(element, type, handler){
        if (element.addEventListener) {
          element.addEventListener(type,handler,false);
        }else if (element.attachEvent) {
          element.attachEvent("on"+type,handler);
        }else{
          element["on"+type]=handler;
        }
    }
    
    // 拓展
    
    // ①获取事件：
    getEvent=function(event){
         return event ? event : window.event;
    }
    // ②获取Target
     getTarge=function(event){
            return event.target || event.srcElement;
        }
    // ③阻止默认事件
    preventDefault=function(event){ 
      if (event.preventDefault){ 
        event.preventDefault(); 
      } else { 
        event.returnValue = false; 
      }
    }
    // ④通用移除事件函数
    removeHandler=function(element, type, handler){ 
      if (element.removeEventListener){ 
        element.removeEventListener(type, handler, false); 
      } else if (element.detachEvent){ 
        element.detachEvent("on" + type, handler); 
      } else { 
        element["on" + type] = null; 
      } 
    }
    // ⑤阻止冒泡：
    stopPropagation=function(event){ 
      if (event.stopPropagation){ 
        event.stopPropagation(); 
      } else { 
        event.cancelBubble = true; 
      }
    }
