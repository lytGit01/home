### 输入url到页面展示的过程
1. [输入url获取url对应的IP](#DNS)
2. [TCP三次握手](#TCP)
3. [建立HTTP请求获取内容](#HTTP)
4. [TCP四次挥手](#CLOSE)
5. [浏览器渲染HTML](#BJC)

#### 一. 输入url获取url对应的IP的过程（DNS域名解析）<a id='DNS'></a>
> 1. 查找浏览器是否有缓存 有读取缓存 没有继续往下
> 2. 查找系统文件中是否有缓存
> 3. 查找路有缓存
> 4. 查找本地服务器没有发送给其他服务器，进行递归查找
> 5. 首先本地服务器向根域名服务器去找，返回定级域名服务器ip地址
> 6. 向顶级域名服务器去找，返回一级域名服务器ip地址
> 7. 向一级域名服务器去找，返回二级域名服务器ip地址
> 8. 重复6、7找到对应IP返回给浏览器
#### 二. TCP三次握手的过程 <a id='TCP'></a>
> 1. 浏览器询问服务器是否能建立连接  SYN(建立连接) = 1 seq = x(随机数)
> 2. 服务器回复浏览器可以建立连接 SYN(建立连接) = 1 seq = y(随机数) ACK(确认建立的是同一个连接) = x+1
> 3. 回复并向服务器证明自己有发送消息的能力 ACK + 1
#### 三. 建立HTTP请求获取内容的过程 <a id='HTTP'></a>
#### 响应与请求一样分成三个部分：响应行、响应头、响应体 (部分头属性解释 )
> Location：这个头配合302状态码，用于告诉客户端找谁（跳转）
> Server：服务器通过这个头，告诉浏览器服务器的类型
> Content-Encoding：告诉浏览器，服务器的数据压缩格式
> Content-Length：告诉浏览器，回送数据的长度
> Content-Type：告诉浏览器，回送数据的类型
> Last-Modified：告诉浏览器当前资源缓存时间
> Refresh：告诉浏览器，隔多长时间刷新
> Content-Disposition：告诉浏览器以下载的方式打开数据。例如： context.Response.AddHeader("Content-Disposition","attachment:filename=aa.jpg");>   context.Response.WriteFile("aa.jpg");
> Transfer-Encoding：告诉浏览器，传送数据的编码格式
> ETag：缓存相关的头（可以做到实时更新）
> Connection：响应完成后，是否断开连接。  close/Keep-Alive
> Date：告诉浏览器，服务器响应时间
> Expries：告诉浏览器回送的资源缓存多长时间。如果是-1或者0，表示不缓存
> Cache-Control：控制浏览器不要缓存数据   no-cache
> Pragma：控制浏览器不要缓存数据          no-cache

#### 状态码
> 2**	成功，操作被成功接收并处理
> 3**	重定向，需要进一步的操作以完成请求
> 4**	客户端错误，请求包含语法错误或无法完成请求
> 5**	服务器错误，服务器在处理请求的过程中发生了错误

#### 四. TCP四次挥手的过程 <a id='CLOSE'></a>
> 1. 对服务器说收到数据， 可以断开连接了
> 2. 服务器说 好的 我检查一下数据是否传完
> 3. 服务器说 数据已传完 可以断开
> 4. 断开连接

#### 五. 浏览器渲染HTML的过程 <a id='BJC'></a>
> 1. 重上到下开始解析HTML 生成 DOM tree
> 2. 遇到link 异步解析CSS  CSS tree （放在头部，如果放在尾部，等到html解析完成，可能会造成闪烁现象（回流,重绘）引起）
> 3. 遇到 script 会先执行 script (script放在尾部，避免面RENDER tree 未完成无法获取DOM)
> 4. DOM tree CSS tree 合成 RENDER tree() 