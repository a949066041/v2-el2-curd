## API
| 参数 | 说明 | 类型 | 可选值	| 默认值 |
| --- | --- | --- | --- | --- |
| noSearch | 是否显示搜索区域 | Boolean |  | false |
| title | 搜索区域label | String |  | 搜索 |
| align | 表格位置方式 | Number | 0: 'left', 1: 'center', 2: 'right' | 1 |
| dataSource | 显示的数据 | array | | [] |
| columns | 显示列 | array | [{ ...el-table-column }] | [] |
| pagination | 是否分页 | boolean | | true |
| total | 分页总数（pagination为true分页后可用） | number | | 0 |
| page | 当前页数（pagination为true分页后可用） | number | | 1 |
| limit | 每页条数（pagination为true分页后可用） | number | | 10 |
| emptyColumn | 空值显示 | string | | - |
| loading | 加载状态 | boolean | | false |
| tableHeightFixed | 是否根据高度计算table高度 | boolean | | true |
| fixEl | 计算高度基准位置(el select) | string |  | .pc-wrapper |
