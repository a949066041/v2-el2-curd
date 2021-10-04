import TipBlock from './TipBlock'
import MxTable from './Table'
import './style/index.scss'

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
