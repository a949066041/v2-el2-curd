## API

| 成员 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number |  |  |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number |  |  |
| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |  |

```html
<template>
  <div id="components-button-demo-button-group">
    test
  </div>
</template>
<style>
#components-button-demo-button-group h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
</style>
```


## FAQ

### Affix 使用 `target` 绑定容器时，元素会跑到容器外。

从性能角度考虑，我们只监听容器滚动事件。

相关 issue：[#3938](https://github.com/ant-design/ant-design/issues/3938) [#5642](https://github.com/ant-design/ant-design/issues/5642) [#16120](https://github.com/ant-design/ant-design/issues/16120)


<tip-block>
#### 固定状态改变的回调
可以获得是否固定的状态。
</tip-block>

```vue
<template>
  <tip-block :offset-top="120" @change="change">
    <a-button>120px to affix top</a-button>
  </tip-block>
</template>
<script>
export default {
  methods: {
    change(affixed) {
      console.log(affixed);
    },
  },
};
</script>
```
