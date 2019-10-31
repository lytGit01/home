## null 传导运算符
 编程实务中，如果读取对象内部的某个属性，往往需要一该对象是否存在比如，
 要读取message.body.user.firstName，安全的写法是写成下面这样。
 ```js
    const firstName = (message
    && message.body
    && message.body.user
    && message.body.user.firstName) || 'default';
    // 这样的层层判断非常麻烦，因此现在有一个提案，引入了“Null 传导运算符”（null propagation operator）?.，简化上面的写法。
     const firstName = message?.body?.user?.firstName || ‘default’;
 ```