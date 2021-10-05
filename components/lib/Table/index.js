import Table from './src/main'

Table.install = function(Vue) {
  Vue.components(Table.name, Table)
}

export default Table
