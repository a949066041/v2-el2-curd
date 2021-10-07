> element-ui二次封装 配合curd使用

## Install
```shell
npm install element-ui v2-el-curd -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import ElementUI from 'element-ui'
import ElCurd from 'v2-el-curd'

Vue.use(ElCurd)
Vue.use(ElementUI)

// css
import 'element-ui/lib/theme-chalk/index.css'
import 'v2-el-curd/lib/css/index.css'

// or
import {
  Table,
  tableMixin
} from 'v2-el-curd'