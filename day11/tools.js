        /* 
        尝试创建一个可以执行简单动画的函数
            参数：
                1、obj    要执行的动画对象
                2、attr   要执行动画的样式，比如：left,top,height,width
                3、target   执行动画的目标位置
                4、speed   移动的速度（正数向右移动，负数向左移动）
                5、callback   回调函数，这个函数将会在动画执行完毕以后执行 
        */
                function move(obj,attr,target,speed,callback) {
                    clearInterval(obj.timer);
            
                    //获取元素目前的位置，不需要在计时器内部定义，因为只需要获取一次
                    var current = parseInt(getStyle(obj,attr));
            
                    //判断速度的正负值，这样在用户输入时，就不需要考虑速度是否为正负值
                    //如果从0到800移动，则speed为正
                    //如果从800到0移动，则speed为负
                    if(current > target){
                            //此时速度为赋值
                            speed = -speed;
                    }
                    //开启一个定时器，用来执行动画效果
                    //向obj添加属性，使不同的对象拥有不同的定时器标识
                    obj.timer = setInterval(function(){
                        //获取box1原来的值
                        var oldValue = parseInt(getStyle(obj,attr));
            
                        //在旧值的基础上，增加
                        var newValue = oldValue + speed;
            
                        //判断newValue是否大于800
                        //从800向0移动
                        //向左移动时，需要判断newValue是否小于target
                        //向右移动时，需要判断newValue是否大于target
                        if((speed < 0 && newValue < target)  ||  (speed > 0 && newValue > target)){
                            newValue = target;
                        }
            
                        //将新值设置给box1
                        obj.style[attr] = newValue + "px";
            
                        //当元素运动到800时，停止执行
                        if(newValue == target){
                            //到达目标，停止执行
                            clearInterval(obj.timer);
                            //动画执行完毕，如果传来函数进来就调用回调函数，否则不需要
                            callback &&callback();
                        }
                        
                    },30);
                    }
            
            
                    /* 
                    定义一个函数，用来获取指定元素的当前样式
                    参数：
                        obj  要获取的样式元素
                        name  要获取的样式名
            
                    解决浏览器兼容性问题，就是该方法，判断哪个有哪种方法就是用哪种方法
                    
                    */
                   function getStyle(obj,name){
                    
            
                    
                    if(window.getComputedStyle){
            
                    //正常浏览器的方式，具有getComputedStyle()方法
                    return getComputedStyle(obj,null)[name];
                    }
                    else{
            
                    //IE8的浏览器方式，没有getComputedStyle()方法
                    return obj.currentStyle[name];
                    }
            
            
                    /* 
                    上面的判断语句代码可以改写成下面的方法
                    */
                    //return window.getComputedStyle ? getComputedStyle(obj,null)[name] : obj.currentStyle[name];
            
            
                   }