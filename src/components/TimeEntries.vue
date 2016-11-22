<template>
  <div>
    <router-link v-if="$route.path !== '/time-entries/log-time'" to="/time-entries/log-time" class="btn btn-primary">创建</router-link>
    <div v-if="$route.path==='/time-entries/log-time'"> <h3>创建</h3>  </div>
    <hr>
    <router-view v-on:timeUpdate="timeUpdate"></router-view><!--父级监听-->
    <div class="time-entries">
      <p v-if="!timeEntries.length"><strong>还没有任何任务</strong></p>
      <div class="list-group">
        <a class="list-group-item" v-for="timeEntry in timeEntries">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img v-bind:src="timeEntry.user.image" class="avatar img-circle img-responsive" />
              <p class="text-center"><strong> {{ timeEntry.user.name }}</strong></p>
            </div>
            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time"><i class="glyphicon glyphicon-time"></i> {{ timeEntry.totalTime }}</h3>
              <p class="label label-primary text-center"> <i class="glyphicon glyphicon-calendar"></i> {{ timeEntry.date }}</p>
            </div>
            <div class="col-sm-7 comment-section">
              <p>{{ timeEntry.comment }}</p>
            </div>
            <div class="col-sm-1">
              <button class="btn btn-xs btn-danger delete-button" v-on:click="deleteTimeEntry(timeEntry)"> X </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

</template>
<script>
  import Store from '../store'

  export default {
    data() {
      //初始化
      // let initEntry = {
      //   user: {
      //     name: 'michelle',
      //     email: 'yy@yymail.cn',
      //     image: '//ww4.sinaimg.cn/mw1024/9a0a5d05gw1f9zyr67ypxj20go0go0uk.jpg'
      //   },
      //   comment: '我的一个备注',
      //   totalTime: 2,
      //   date: '2016-11-22'
      // }
      return {
        timeEntries: Store.fetch()
      }
    },
    methods: {
      deleteTimeEntry(timeEntry) {
        let index = this.timeEntries.indexOf(timeEntry)
        if (window.confirm('确定要删除？')) {
          this.timeEntries.splice(index, 1)
          this.$emit('deleteTime', timeEntry)
        }
      },
      timeUpdate(timeEntry) {
        this.timeEntries.push(timeEntry)
      }
    },
    watch: {
      timeEntries: {
        handler(val, oldVal) {
          Store.save(val)
        },
        deep:true
      }
    }
  }
</script>
<style scoped>
  .avatar { height: 75px; margin: 0 auto; margin-top: 10px; margin-bottom: 10px; } .user-details { background-color: #f5f5f5; border-right: 1px solid #ddd; margin: -10px 0; } .time-block { padding: 10px; } .comment-section { padding: 20px; }
</style>
