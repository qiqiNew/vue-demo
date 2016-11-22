<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNewItem"/>
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">{{item.label}}</li>
    </ul>
    <p>Child tells me: {{ childwords }}</p>
    <componentA msgFromFather='father told you:your selection' v-on:child-tell-me-something='lisenTo'></componentA><!--父级监听子级事件-->
  </div>
</template>

<script>
  import Store from './store'
  import ComponentA from './components/componentA'
  export default {
    data() {
      return {
        title: 'this is a todo list',
        items: Store.fetch(),
        newItem:'add a todo item',
        childwords: '' // 子级传过来的数据初始为空
      }
    },
    methods: {
      toggleFinish(item) {
        item.isFinished = !item.isFinished
      },
      addNewItem() {
        this.items.push({
          label: this.newItem,
          isFinished: false
        })
        this.newItem = ''
        Store.save()
      },
      lisenTo(msg) { // msg是从子级传过来的
        this.childwords = msg
      }
    },
    watch: {
      items: {
        handler(val, oldVal) {
          Store.save(val)
        },
        deep: true
      }
    },
    components: {ComponentA}
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
.finished {
  text-decoration: line-through;
}
</style>
