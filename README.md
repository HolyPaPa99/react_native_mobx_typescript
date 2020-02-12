# react_native_mobx_typescript

# 目录结构

```
--src                    #源码根目录
|--api                   #后台Api请求组件目录
|--assets                #静态资源文件目录
| |--png                 #png文件目录
|   |--login             #登录配图文件目录
|--common                #公共代码目录
| |--axios               #axios请求组件目录
| |--iconfont            #iconfont配置目录
| |--intl                #intl国际化多语言支持配置目录
| |--localStorage        #本地存储组件目录
| | |--model             #本地存储数据模型定义目录
| |--log                 #日志格式化组件目录
| |--mobx                #mobx配置目录
| |--navigation          #导航配置目录
| |--utils               #公共工具组件目录
|--components            #UI组件目录
| |--form                #表单组件目录
| |--languageSwitch      #语言切换组件目录
| |--navigator           #导航组件目录
|--config                #系统配置目录
|--models                #数据模型定义目录
| |--user                #用户数据模型
|--screens               #页面开发目录
|--home                  #主页
|--login                 #登录页
```

---

# 1.概述

这是一个应用 typescript 面向对象编程的基础框架项目，以注册登录功能为例搭建基于 ReactNative+mobx 的移动端开发框架。框架整合的主要第三方库包括：

- react-native
- mobx
- axios 异步请求
- react-intl 国际化（这个版本做简体中文和英文支持）
- react-navigation 导航
- iconfont 阿里向量图标平台应用代码


