import TipBlock from './TipBlock'
import MxTable from './Table'
import './style/table/index.scss'

export default {
  install(Vue) {
    Vue.component(MxTable.name, MxTable)
    Vue.component(TipBlock.name, TipBlock)
  }
}

export {
  TipBlock,
  MxTable
}
