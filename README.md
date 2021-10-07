> element-ui二次封装 配合curd使用

## Install
```shell
npm install v2-el-curd -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import ElCurd from 'v2-el-curd'

Vue.use(ElCurd)

// css
import 'v2-el-curd/lib/css/index.css'

// or
import {
  Table,
  tableMixin
} from 'v2-el-curd'