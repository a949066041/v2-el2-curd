<cn>
#### 基本
最简单的用法。
</cn>

```vue
<template>
  <div>
    <tip-block />
    <el-button @click="hello">test</el-button>
  </div>
</template>

<script>
import { hello } from '@/utils'
export default {
  data() {
    return {
      top: 10,
      bottom: 10,
    };
  },
  methods: {
    hello
  }
};
</script>
```