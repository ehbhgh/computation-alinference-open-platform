<!--
 * @Description: 
 * @Author: Wang Su
 * @Date: 2024-01-15 09:43:06
 * @LastEditors: Wang Su
 * @LastEditTime: 2024-01-16 10:53:48
-->
<template>
  <div class="wltable">
    <el-table
      v-bind="$attrs"
      v-on="$listeners"
      tooltip-effect="dark"
      size="mini"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <template v-for="(item, index) in column">
        <el-table-column
          v-bind="item.attrs"
          v-if="item.attrs.type == 'selection'"
          :key="index"
        />
        <el-table-column v-bind="item.attrs" v-else :key="index">
          <template v-slot:default="scope">
            <slot :scope="scope" :name="item.slot" v-if="item.slot" />
            <template v-else>
              {{ scope.row[item.attrs.prop] }}
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "wl-table",
  props: {
    column: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    tableRowStyle({ row, rowIndex }) {
      return "color: #575757;height: 38px;line-height: 38px;padding:0;";
    },
    tableRowClassName({ rowIndex }) {
      if ((rowIndex + 1) % 2 === 0) {
        return "oddRow";
      }
      return "evenRow";
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/.el-table--mini {
  font-size: 14px;
  color: #fff;
}
/deep/.el-table {
  th.is-leaf {
    padding: 6px 0;
    background-color: #dfdfdf;
    border-bottom: none;

    div {
      font-weight: 500;
    }
  }

  td {
    padding: 6px 0;
    border: none;
    height: 36px;
    border-bottom: none;
  }

  tbody {
    tr {
      height: 36px !important;
      line-height: 36px !important;
    }
  }
}

/deep/.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #f4f4f4;
}

/deep/.el-table__body tr.hover-row > td {
  background-color: #078782 !important;
}
//解决部分浏览器tabel抖动问题。
/deep/.el-table {
  width: 99.9% !important;
}
/deep/.el-table__fixed-right-patch {
  border: none;
}
//table移入
/deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #078782;
}
/deep/.el-table--mini td {
  padding: 0 !important;
}

/deep/.el-table .cell {
  color: #333 !important;
}
/deep/.el-table .ascending .sort-caret.ascending {
  border-bottom-color: #006f6b;
}

/deep/.el-table .descending .sort-caret.descending {
  border-top-color: #006f6b;
}
/deep/.oddRow {
  background-color: #f4f4f4 !important;
}
/deep/.evenRow {
  background-color: #fff !important;
}
</style>
<style lang="scss">
.wltable {
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #078782 !important;
    border-color: #078782 !important;
  }
}
</style>
