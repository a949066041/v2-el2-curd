// 表格对齐方式
export const ALIGNS = {
  0: 'left',
  1: 'center',
  2: 'right'
}

// 提示
export const TOOLTIP = { 'show-overflow-tooltip': true }

// 对应匹配定宽
const MATCH_WIDTH = {}

// 创建对应列
export const createColumn = function(dataIndex, label, config, width) {
  const args = Array.from(arguments)
  if (args.length === 2) {
    config = {}
    width = null
  }
  if (typeof config === 'number') {
    width = config
    config = {}
  }
  width = MATCH_WIDTH[dataIndex] || width
  return {
    dataIndex,
    label,
    slots: typeof args.slice(-1)[0] === 'boolean',
    props: Object.assign({ width }, config)
  }
}
