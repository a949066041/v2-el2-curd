<script>
import Api from './Api'
import Start from './start'
import Base from './Base'

const md = {
  cn: `# MxTable
          基于el-table二次封装
## 使用
对于项目中表格进行统一使用, 配合mixin进行快速开发
          ## 代码演示`
}
export default {
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <div class='block'>
          <Start />
        </div>
        <Base />
        <div class='api'>
          <Api />
        </div>
      </div>
    )
  }
}
</script>
