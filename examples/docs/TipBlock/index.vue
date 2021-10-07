<script>
import Api from './Api'
import Base from './Base'
import Base2 from './Base2'

const md = {
  cn: `# TipBlock
          小提示块
## 使用
对于项目标题提示显示
          ## 代码演示`
}
export default {
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <el-row gutter={20}>
          <el-col span={12}>
            <Base />
          </el-col>
          <el-col span={12}>
            <Base2 />
          </el-col>
        </el-row>
        <div class='api'>
          <Api />
        </div>
      </div>
    )
  }
}
</script>
