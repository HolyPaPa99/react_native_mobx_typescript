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

# 2.mobx 数据模型定义和页面监听数据变更自动刷新

## （1）数据模型定义

    数据模型定义根目录：src/models/
    mobx store：src/models/index.tsx

- 所有数据模型定义必须建立在数据模型定义根目录下
- 为不同数据模型创建对应的子目录（例如我要新建 User 类，首先创建模型子目录 user/）
- 对于较为复杂的复合数据模型可以拆分模型文件，但模型的导出文件必须为 index.tsx(例如 User 类 language 属性记录用户选择的语言，简单字符串类型)
- 修改模型数据属性，必须通过模型的 action 方法

  如：

  ```
    import {observable, action} from 'mobx';
    import {getStorage} from '@/common/localStorage/index';
    import StorageModel from '@/common/localStorage/model/StorageModel';

    class User {
    @observable language: string = 'en';

    @action setLanguage(language: string) {
        this.language = language;
    }
    constructor() {
        getStorage().then((storage: StorageModel) => {
        if (storage && storage.language) {
            this.setLanguage(storage.language);
        }
        });
    }
    }

    const userStore = new User();

    export default userStore;
  ```

- 将新数据模型注册到 mobx store

  如：

  ```
  import todoStore from './todo';
  import userStore from './user';

  const stores = {
    todoStore,
    userStore,
  };

  export default stores;
  ```

## （2）页面监听数据模型数据更新

通过 mobx 的 inject 高阶组件将数据模型注入 react 组件的 props 中，当模型的数据发生变化的时候自动刷新 react 组件显示(详细参考 mobx-react)。

如：

```
    @inject('userStore')
    class LoginScreen extends React.Component
```

# 3.后台服务请求 api 组件开发

# 4.国际化

配置根目录：src/common/intl/

app 国际化语言配置：

- 英文：src/common/intl/lang/en_US.tsx
- 简体中文：src/common/intl/lang/zh_CN.tsx

应用：
通过 react-intl 的 injectIntl 高阶组件将 intl 注入到 react 组件的 props 中（详细参考 react-intl）。

如：

```
export default injectIntl(LoginScreen);
```

# 5.导航

# 6.iconfont 使用

从 iconfont 平台找 icon 或自己设计 icon 向量图标然后导入 iconfont 平台再从 iconfont 平台导出 ttf 文件配置到项目里(这个版本 ios 已配置好，如需更新直接替换 ttf 文件即可，android 版本后面补充)。

iconfont 目录文件：

- icon 编码对照 map 文件：src/common/iconfont/iconfont.json
- iconfont 向量图标组件化文件：src/common/iconfont/iconfont.tsx
- ttf 文件(从 iconfont 平台导出):src/common/iconfont/iconfont.ttf

使用：

```
import * as Iconfont from '@/common/iconfont/Iconfont';

const icon = ()=>{
    return (
        <Iconfont.Phone />
    )
}
```

# 7.日志格式统一

# 8.公共组件开发规范

# 9.UI 组件开发规范

# 10.页面开发规范

# 11.分辨率自适应问题

```

```
