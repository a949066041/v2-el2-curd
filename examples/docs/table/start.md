## 如何使用
1. 配合createColumn进行列创建
- 第一种 2个参数 第一个参数为列索引 第二个参数为标题  
- 第二种 3个参数 前俩参数同上 第三个参数为对象时为该列每一项el-column-item参数；工具函数提供了`TOOLTIP`对象可直接传递第三个参数，或解构使用[el-column-item参数](https://element.eleme.io/#/zh-CN/component/table#table-column-attributes)。当第三个参数为数字时为该列宽度。
- 第三种 4个参数与上同 分别为 索引、标题、参数、宽度
**注意：**`最后一个参数为true时`表示当列为一个插槽，插槽值为当前`key`值。在mx-table使用时使用v-slot:`[key]`进行处理
```js
import { createColumn, TOOLTIP } from '@/utils/table'
const columns = [
  // 第一种 2个参数 第一个参数为列索引 第二个参数为标题
  createColumn('key', 'a'),
  // 第二种 3个参数 前俩参数同上 第三个参数为每一项el-column-item参数
  // 工具函数提供了
  createColumn('key', 'a', TOOLTIP),
  createColumn('key', 'a', { 'max-width': '500px' }),
  createColumn('key', 'a', { 'max-width': '500px', ...TOOLTIP }),
  createColumn('key', 'a', 500),
  createColumn('key', 'a', { 'max-width': '500px' }, 500),
  // 第三种
  createColumn('key', 'a', true),
  createColumn('key', 'a', TOOLTIP, true),
  createColumn('key', 'a', { 'max-width': '500px' }, 500, true),
]
```