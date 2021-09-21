<cn>
#### 基本
最简单的用法。
</cn>

```vue
<template>
  <div class="pc-wrapper" style="height: 400px">
    <mx-table :columns="columns" :data-source="[{ a: 1 }, { b: 2 }]">
      <template v-slot:c>
        test
      </template>
    </mx-table>
  </div>
</template>

<script>
import { createColumn } from '@/utils/table'
export default {
  data() {
    return {
      columns: [
        createColumn('a', '标签组名称'),
        createColumn('b', '标签内容'),
        createColumn('c', '标签人数', true)
      ],
    };
  }
};
</script>
```