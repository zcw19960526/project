<template>
  <div>
    <TreeSelect :options="list" @getValue="test($event)"  @node-click="test(value)" :props="props"></TreeSelect>
  </div>
</template>

<script>
import TreeSelect from "./TreeSelect";
export default {
  name: "goods",
  components: { TreeSelect },
  data() {
    return {
      props: {
        value: "value", // ID字段名
        label: "label", // 显示名称
        children: "children" // 子级字段名
      },
      list: [
        {
          value: "1",
          label: "一级 1",
          children: [
            {
              value: "1.1",
              label: "二级 1-1",
              children: [
                {
                  value: "1.2",
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          value: "2",
          label: "一级 2",
          children: [
            {
              value: "2.1",
              label: "二级 2-1",
              children: [
                {
                  value: "2.3",
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              value: "3",
              label: "二级 2-2",
              children: [
                {
                  value: "3.1",
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          value: "4",
          label: "一级 3",
          children: [
            {
              value: "4.1",
              label: "二级 3-1",
              children: [
                {
                  value: "4.1.1",
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              value: "5",
              label: "二级 3-2",
              children: [
                {
                  value: "5.1",
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    test(value) {
      console.log(value);
    }
  }
};
</script>

<style>
</style>