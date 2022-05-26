<template>
  <div class="pagination">
    <!-- @click给search中method中的自定义事件传递页数 -->
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <!-- 上面部分 -->
    <!-- 如果起始页start大于1（当前页是第四页） 就需要这个1  1...23456...31 -->
    <button
      v-if="startNumAndEndNum.start > 1"
      @click="$emit('getPageNo', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <!-- 如果起始页start大于2（当前页是第五页） 就需要这个...  1...34567...31 -->
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <!-- 中间部分 v-for遍历 v-if去判断隐藏页数小于起始页的值，v-for和v-if不能放一块-->
    <span v-for="(page, index) in startNumAndEndNum.end" :key="index">
      <button
        v-if="page >= startNumAndEndNum.start"
        @click="$emit('getPageNo', page)"
        :class="{ active: pageNo == page }"
      >
        {{ page }}
      </button>
    </span>

    <!-- 下面部分 -->
    <!-- 当前页是27的时候就不要... 25 26 27 28 29...31 -->
    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <!--终止页要小于整个页数，如果等于的话，end在中间部分已经遍历就不需要了，所以不要等于  -->

    <button
      v-if="startNumAndEndNum.end < totalPage"
      @click="$emit('getPageNo', totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  // 从Search组件传过来的
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    //   总共多少页 比如91/3=31
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      // 5.解构动态属性 const movie = { title: 'Heat' };const { title } = movie;title; // => 'Heat'
      const { continues, pageNo, totalPage } = this;
      // 定义两个变量，起始和终止
      let start = 0,
        end = 0;
      // 总页数小于连续的页码数5>4
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        // parseInt() 函数解析字符串并返回整数。continus是字符串
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        // 当前页如果是第一页（start 1-2=-1）或者第二页(start 2-2=0)，数据不正常，负数或者0
        if (start < 1) {
          start = 1;
          // continues是字符串，不转换成数字的话上面v-for就遍历有问题了
          end = parseInt(continues);
        }
        // 当前页是30(27 28 29 30 31),若当前页是31(27 28 29 30 31)
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - parseInt(continues) + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
