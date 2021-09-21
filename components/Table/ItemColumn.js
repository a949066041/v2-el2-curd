
import { ALIGNS } from 'ui/utils/table'
import { isFalsy } from 'ui/utils'
import { TableColumn } from 'element-ui'

export default {
  functional: true,
  name: 'ItemColumn',
  props: {
    config: [Object, Boolean],
    slots: [Function, undefined]
  },
  render(h, c) {
    // 校验检查
    let errorSlots = false
    const { config, slots: slotsFn } = c.props

    if (!config) {
      return null
    }

    const { alignTable, emptyColumn } = c.parent

    const { slots, props = {}, dataIndex, label } = config

    const { empty, alignType, dict } = props

    if (typeof config === 'boolean' && !config) {
      return null
    }

    if (slots && typeof slotsFn !== 'function') {
      errorSlots = true
      console.error(new Error(`[mx:error] ${dataIndex}插槽没有进行配置，请检查`))
    }

    const emptyText = typeof empty === 'string' ? empty : emptyColumn

    // 值匹配
    const itemValue = (row) => {
      const computedValue = dataIndex.split('.').reduce((prev, item) => prev && prev[item], row)
      return dict
        ? dict[computedValue || 0]
        : typeof computedValue === 'string' && computedValue === ''
          ? emptyText
          : isFalsy(computedValue)
            ? emptyText
            : computedValue
    }

    return h(TableColumn, {
      props: {
        ...props,
        prop: dataIndex,
        label: label,
        align: ALIGNS[alignType] || alignTable,
        formatter: (row) => itemValue(row)
      },
      scopedSlots: slots && !errorSlots && {
        default: (scope) => slotsFn({ ...scope, value: itemValue(scope.row) })
      }
    })
  }
}
