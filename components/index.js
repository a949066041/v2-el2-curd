import TipBlock from './TipBlock'
import MxTable from './Table'

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
