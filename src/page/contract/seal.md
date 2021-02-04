### 印章管理

```
|-- src                             // 源码目录
    |-- api                             // 接口信息
    |-- assets                          // 静态资产
    |-- common                          // 配置信息
    |-- components                      // 公用组件组件
    |-- icons                           // svg图片目录
    |-- router                          // Vue Router 路由器
    |-- store                           // Vuex 状态管理   
    |-- views                           // 页面目录
        |--certs                                 // 证书管理
            |-- realname/enterprise                 // 企业证书   
                |-- Enterprise.vue                       // 企业证书列表页面
                |-- addEntCertificate.vue                // 添加企业证书    
                |-- viewCer.vue                          // 查看企业证书          
            |-- realname/personal                   // 个人证书
                |-- person.vue                           // 个人证书列表页面
                |-- addEntPertificate.vue                // 添加个人证书    
                |-- viewPer.vue                          // 查看个人证书 
        |--seal                                  // 印章管理
            |-- enterprise                          // 企业印章   
                |-- index.vue                            // 企业印章列表页面
                |-- addSealAdmin.vue                     // 添加印章负责人   
                |-- component/SealMake.vue               // 制作、编辑、查看、复制、变更、企业印章  
                |-- component/SealAuthOuter              // 印章授权页面        
            |-- personal                            // 个人印章
                |-- index.vue                            // 个人印章列表页面
                |-- addPersonalSeal.vue                  // 添加、查看、编辑个人印章    
            |-- sealrecord                          // 用印记录
                |-- index.vue                            // 用印记录列表页面
                |-- enterprise.vue                       // 企业用印记录
                |-- personal.vue                         // 个人用印记录   
    |-- bus.js                          // 全局通信工具
    |-- app.vue                         // 页面入口
    |-- main.js                         // 程序入口文件，加载各种公共组件
|-- .browserslistrc                 // 配置浏览器兼容
|-- .editorconfig                   // 忽略 ESlint 检查文件
|-- .eslintrc.js                    // ESlint 代码检查
|-- .gitignore                      // Git 忽略文件
|-- babel.config.js                 // 编译配置文件
|-- package.json                    // 依赖配置文件
|-- README.md                       // 说明
|-- vue.config.js                   // webpack 配置文件
```

1. 