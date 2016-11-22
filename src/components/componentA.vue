<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <button @click="onClickMe">click!</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello from componentA',
      toFather: 'dad, I love U' // 子级传给父级的信息
    }
  },
  props: ['msgFromFather'],
  methods: {
    onClickMe() {
      alert(this.msgFromFather)
      this.$emit('child-tell-me-something', this.toFather)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
