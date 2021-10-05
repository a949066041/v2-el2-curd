import TipBlock from './src/main'

TipBlock.install = function(Vue) {
  Vue.components(TipBlock.name, TipBlock)
}

export default TipBlock
