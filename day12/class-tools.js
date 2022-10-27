 /* 
        定义一个函数，用来向元素中添加指定的class属性值
            参数：
                1、obj  要添加的class属性的元素
                2、cn   要添加的class值
        */
                function addClass(obj, cn){
                    obj.className += " "+cn;
               }
        
        
        
        
               /* 
               判断一个元素中是否含有指定的class属性值
                参数：
                    1、obj  要添加的class属性的元素
                        2、cn   要添加的class值
        
                如果有该class，则返回true，否则返回false
               */
              function hasClass(obj, cn){
                //判断obj中有没有cn  class
                //创建正则表达式
                //var reg = /\bb2\b/; //这样写太死板
                var reg = new RegExp("\\b"+cn+"\\b");
                return reg.test(obj.className);
        
              }
        
        
        
              /* 
                移除一个元素中指定的class属性
              */
             function removeClass(obj, cn){
                //创建一个正则表达式
                var reg = new RegExp("\\b"+cn+"\\b");
        
                //删除class
                obj.className = obj.className.replace(reg, "");
             }
        
        
        
        
        
             /* 
             toggleClass 可以用来切换一个类
                如果元素中有该类，则删除
                如果元素中没有该类，则添加
        
             */
             function toggleClass(obj, cn){
                //判断obj中是否含有cn
                if(hasClass(obj, cn)){
                    removeClass(obj, cn);
                
                }else{
                    addClass(obj, cn);
                }
             }