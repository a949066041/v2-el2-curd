<cn>
#### 基本
最简单的用法。
</cn>


```vue
<template>
  <div class="background">
    {{ a }}
    <el-button @click="hello">test</el-button>
    <tip-block  />
  </div>
</template>

<script>
import { hello } from '@/utils/index.js'
export default {
  data() {
    return {
      a: 'test'
    }
  },
  methods: {
    hello
  }
}
</script>
```
