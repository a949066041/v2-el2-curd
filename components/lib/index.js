import TipBlock from './TipBlock'
import Table from './Table'

const components = {
  TipBlock,
  Table
}

const install = function(Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install
}

export default API
