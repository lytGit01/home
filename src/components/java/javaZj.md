### 集合
#### Collectin
```
1. List ==> ArrayList LinkedList
2. Queue ==> LinkedList
3. Set
```

##### @RestController
```
@RestController = @Controller + @ResponseBody组成，等号右边两位同志简单介绍两句，
就明白我们@RestController的意义了：

@Controller 将当前修饰的类注入SpringBoot IOC容器，使得从该类所在的项目跑起来的过程中，
这个类就被实例化。当然也有语义化的作用，即代表该类是充当Controller的作用

@ResponseBody 它的作用简短截说就是指该类中所有的API接口返回的数据，甭管你对应的
方法返回Map或是其他Object，它会以Json字符串的形式返回给客户端，本人尝试了一下，
如果返回的是String类型，则仍然是String。
```

##### @RequestMapppping
```
RequestMapping是一个用来处理请求地址映射的注解，可用于类或方法上。
用于类上，表示类中的所有响应请求的方法都是以该地址作为父路径。

value：    指定请求的实际地址，指定的地址可以是URI Template 模式（后面将会说明）；
method：   指定请求的method类型， GET、POST、PUT、DELETE等；
consumes： 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html;
produces:  指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回consumes： 
           指定处理请求的提交内容类型（Content-Type），例如application/json, text/html;
params：   指定request中必须包含某些参数值是，才让该方法处理。
headers：  指定request中必须包含某些指定的header值，才能让该方法处理请求。                                                          
```

```
@ControllerAdvice        // 全局异常注解
@ExceptionHandler        // 异常回调 
@ComponentScan           // 添加扫描路径  
@Override                // 重写方法
@MapperScan
@SpriBootApplication

```

```
1. java.security 【加密】
2. lobbok 【插件，优化冗余代码】
    @Date  简化get ser counstor
    @Slf4j 打印日志
3. exception 异常错误处理
```
