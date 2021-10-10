<template>
    <div class="page-wrap">
        <ul>
            <li v-show="prePage" class="li-page" @click="goPrePage()">上一页</li>
            <li v-for="(i,index) in showPageBtn" :class="{active: i === currentPage, pointer: i, hover: i && i !== currentPage}"
                 @click="goPage(i);" :key="index">
                <a v-if="i" class="notPointer">{{i}}</a>
                <a v-else>···</a>
            </li>
            <li v-show="nextPage" class="li-page" @click="goNextPage()">下一页</li>
        </ul>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            total: 'getTotal',
            limit: 'getLimit',
            offset: 'getOffset',
        }),
        totalPage() {
            return Math.ceil(this.total / this.limit)
        },
        offsetData() {
            return this.offset
        },
        currentPage() {
            return Math.ceil(this.offsetData / this.limit) + 1
        },
        prePage() {
            return this.offsetData !== 0 && this.total
        },
        nextPage() {
            return (this.offsetData + this.limit < this.total) && this.total
        },
        showPageBtn() {
            const pageNum = this.totalPage
            const index = this.currentPage
            if (pageNum <= 5) return [...new Array(5)].map((v, i) => i + 1)
            if (index <= 2) return [1, 2, 3, 0, pageNum]
            if (index >= pageNum - 1) return [1, 0, pageNum - 2, pageNum - 1, pageNum]
            if (index === 3) return [1, 2, 3, 4, 0, pageNum]
            if (index === pageNum - 2) return [1, 0, pageNum - 3, pageNum - 2, pageNum - 1, pageNum]
            return [1, 0, index - 1, index, index + 1, 0, pageNum]
        }
    },
    methods: {
        ...mapMutations({
            pre_page: 'pre_page',
            next_page: 'next_page',
            go_page: 'go_page',
            setCurrent: 'setCurrent'
        }),
        goPage(i) {
            if (i === 0 || i === this.currentPage) return
                this.go_page(i)
                this.$emit('playsonglist',this.limit,this.offset)
        },
        goPrePage() {
            this.pre_page(this.offset)
            this.$emit('playsonglist',this.limit,this.offset)
        },
        goNextPage() {
            this.next_page(this.offset)
            this.$emit('playsonglist',this.limit,this.offset)
        },
        
    }
}
</script>

<style lang="less">
.page-wrap {
  text-align: center;
  ul {
    display: inline-block;
    list-style: none;
    overflow: hidden;
    margin-left: -10vh;
    li {
      float: left;
      border: 1px solid #ccc;
      color: #1e5a6b;
      padding: 1px 10px;
      margin: 0 3px;
      border-radius: 10%;
      user-select: none;
      a{
          color: #1e5a6b;
      }
    }
  }
  .pointer {
    cursor: pointer;
  }
  .hover {
    &:hover {
      border-color: #7ba6b3;
    }
  }
  .li-page {
    line-height: 1.5;
    cursor: pointer;
    color: #1e5a6b;
    &:hover {
      color: #7ba6b3;
    }
  }
  .active {
    border-color: #246c81;
  }
}
</style>