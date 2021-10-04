<template>
  <div class="wrapper" ref="wrapper">
    <div
      class="mx__table"
    >
      <!-- 搜索插槽 -->
      <div
        v-if="!noSearch"
        class="mx__table__query"
        p10
        mb10
      >
        <div class="mx__table__query-search">
          <div class="clearfix" style="display: flex; align-items: center;">
            <tip-block :title="title" />
            <slot name="tools" />
          </div>
          <slot name="search" />
        </div>
      </div>
      <div
        class="table__wrapper"
        p10
      >
        <slot v-bind="{ height: config['height'] }" name="list">
          <Table
            ref="table"
            v-bind="$attrs"
            v-on="$listeners"
            v-loading="loading"
            :height="config['height']"
            :header-align="alignTable"
            :data="dataSource"
            tooltip-effect="dark"
            width="100%"
            stripe
          >
            <item-column
              v-for="item of columns"
              :key="item.dataIndex"
              :empty-column="emptyColumn"
              :config="item"
              :slots="$scopedSlots[item.dataIndex]"
            />
          </Table>
        </slot>
        <el-pagination
          v-if="pagination"
          layout="prev, pager, next, sizes, total"
          prev-text="上一页"
          next-text="下一页"
          :total="total"
          :page-size="limit"
          :current-page="page"
          @current-change="(val) => { $emit('update:page', val) }"
          @size-change="(val) => { $emit('update:limit', val) }"
        />
      </div>
      <!-- 弹出窗口 解决根节点问题 -->
      <slot />
    </div>
  </div>
</template>

<script>
import { Table } from 'element-ui'
import ItemColumn from './ItemColumn'
import { ALIGNS } from 'ui/utils/table'

export default {
  name: 'MxTable',
  components: { ItemColumn, Table },
  props: {
    noSearch: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '搜索'
    },
    align: {
      type: Number,
      default: 1
    },
    dataSource: {
      type: Array,
      default: () => ([])
    },
    columns: {
      type: Array,
      default: () => ([])
    },
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    loading: {
      type: Boolean,
      default: false
    },
    emptyColumn: {
      type: String,
      default: '-'
    },
    tableHeightFixed: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    fixEl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      config: {
        height: 0
      }
    }
  },
  computed: {
    alignTable() {
      return ALIGNS[this.align]
    }
  },
  watch: {
    dataSource() {
      this.$nextTick(() => {
        const { table } = this.$refs
        if (table) {
          table.bodyWrapper.scrollTop = 0
          table.bodyWrapper.scrollLeft = 0
        }
      })
    }
  },
  created() {
    const height = this.$attrs.height
    this.$nextTick(() => {
      // 计算表格高度
      this.tableHeightFixed
        ? this.handleRecomputedHeight()
        : height
          ? this.$set(this.config, 'height', height)
          : this.$delete(this.config, 'height')
    })

    if (this.tableHeightFixed) {
      this.$once('hook:beforeMount', () => {
        window.addEventListener('resize', this.handleRecomputedHeight)
      })

      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('resize', this.handleRecomputedHeight)
      })
    }
  },
  methods: {
    handleRecomputedHeight() {
      if (this.$attrs.height) {
        this.config.height = this.$attrs.height
        return
      }
      this.$nextTick(() => {
        setTimeout(() => {
          const wrapperBox = this.fixEl
            ? (document.querySelector(this.fixEl).clientHeight - 10)
            : (document.querySelector('.pc-wrapper').clientHeight || document.body.clientHeight)
          const searchHeight = (!this.noSearch && (this.$scopedSlots.search || this.title))
            ? document.querySelector('.mx__table__query').clientHeight + 10
            : 0
          const paginationHeight = this.pagination ? 49 : 0
          const pcPadding = 20 // box
          this.config.height = wrapperBox - searchHeight - paginationHeight - pcPadding
        })
      })
    }
  }
}
</script>
