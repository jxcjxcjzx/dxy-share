# dxy-share

[![npm](https://img.shields.io/npm/v/dxy-share.svg?style=flat-square)](https://www.npmjs.com/package/dxy-share)
[![npm](https://img.shields.io/npm/dt/dxy-share.svg?style=flat-square)](https://www.npmjs.com/package/dxy-share)

丁香园前端分享组件

## Demo

[DXY Share Demo](http://dxy-biz-developer.github.io/dxy-share/demo)

## 使用方法

### 1. 使用 npm 安装

#### 安装

`$ npm install dxy-share --save`

#### 使用

JS:

```js
var dxy_share = require('dxy-share');
var share = new dxy_share();
share.show({
    id: 'share1',
    lst: ['tt', 'qzone', 'douban', 'weixin', 'sina', 'idxy'],
    style: 1,
    addTo:'（分享自 @丁香园）'
});
```

CSS:

```css
@import "dxy-share/dist/dxy-share.min.css";
```

### 2. 通过 `<script>` 直接引用

#### 引用

```html
<link rel="stylesheet" href="dxy-share.min.css">
<!--...-->
<script src="jquery.js"></script>
<script src="dxy-share.min.js"></script>
```

#### 使用

```js
var share = new dxy_share();    // 此时 dxy_share 为全局变量
share.show({
    id: 'share1',
    lst: ['sina', 'weixin', 'qzone', 'douban', 'idxy', 'renren'],
    style: 1,
    addTo:'（分享自 @丁香园）'
});
```

## API

```js
var share = new dxy_share();
share.show(options);
```

`options`:

+ `id`: String, 放置分享组件的容器id

+ `lst`: Array, 需要显示的分享项, 现有：`['sina', 'weixin', 'qzone', 'douban', 'idxy', 'renren']`

+ `style`: 组件的主题，现有: `1, 2, 3, 4, 5, 6, 7, 'm1'`

+ `addTo`: String, 追加在自动生成内容(网页title) 后的文本

+ `share_txt`: String, 自定义分享的文本内容, 默认为页面title

+ `da`: Boolean, 是否启用打点, 默认为 false