一款帮助在 VSCode 里面开发微信小程序的插件。该插件主要实现以下功能：
- [ ] 规则集操作
  - [ ] 在 wxss 文件中选择一个css规则集然后点击右键选择 压缩规则集 选项，可以将css规则集压缩至一行。
  - [ ] 在 wxss 文件中选择一个css规则集然后点击右键选择 展开规则集 选项，可以将css规则集展开并美化。
  - [ ] 选中 wxss 文件所有内容，执行上述操作。
  - [ ] 在命令面板中执行上述操作。
- [ ] 生成小程序 Page 和 Component 相关文件。
  - [ ] 在侧边资源管理器中点击右键选择创建相关文件。
  - [ ] 可选生成文件的默认内容。
  - [ ] 可选同时额外生成其他文件，如 less 文件。
- [ ] js文件微信原生api只能提示
  - [ ] 输入 wx. 提示相关api，过滤掉在编辑器中输入 wx 时的不相关提示。
- [ ] 格式化文件
  - [ ] 格式化 wxml 文件
- [ ] 监听 app.json 文件的改动，这个文件保存时解析里面的配置。
  - [ ] 可选开启路由映射，将小程序的路由方法的参数替换路由的名字。



## 格式化 wxml 
使用的场景是什么呢？

## 规则集
### 压缩规则集
将一个规则集压缩到一行
```css
/* 压缩前 */
div {
  width: 200px;
  height: 200px;
  font-size: 16px;
  background-color: red;
}

/* 压缩后 */
div { width: 200px; height: 200px; font-size: 16px; background-color: red; }
```
将一个规则集压缩到一行，用空格进行分隔。
多个空行合并成一行。
删掉注释下面的空行，为注释上面添加空行。



## app.json 智能提示

小程序全局配置里面用来定义底部tabbar的片段。
```json
  "tabbar": {
    "color": "",
    "selectColor": "",
    "list": [
      {"pagePath": "","text": "","iconPath": "","selectedIconPath": ""}
    ]
  }
```

在app.json 文件内编写配置的时候，在 tabbar 的 "{}" 里面，输入字母 c ，候选 color ,按下回车键在当前位置填充 color 。

## 参考资料
- VS Code 插件开发文档 <https://github.com/Liiked/VS-Code-Extension-Doc-ZH>