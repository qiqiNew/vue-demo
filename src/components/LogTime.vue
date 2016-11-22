<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input type="date" class="form-control" v-model="timeEntry.date" placeholder="2016/11/11">
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input type="number" class="form-control" v-model="timeEntry.totalTime" placeholder="1h">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input class="form-control" type="text" v-model="timeEntry.comment" placeholder="注意事项"></input>
      </div>
    </div>
    <button class="btn btn-primary" @click="saveNewLog">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>
<script type="text/javascript">
  import Store from '../store'
  export default {
    data() {
      return {
        // 初始值
        timeEntry: {
          user: {
            name: 'michelle',
            email: 'yy@yymail.cn',
            image: '//ww4.sinaimg.cn/mw1024/9a0a5d05gw1f9zyr67ypxj20go0go0uk.jpg'
          }
        }
      }
    },
    methods: {
      saveNewLog() { // 子级向父级传递信息
        let timeEntry = this.timeEntry
        if (timeEntry.comment) {
          this.$emit('timeUpdate', timeEntry)
        } else {
          alert('您还未填写计划')
        }
      }
    }
  }
</script>
