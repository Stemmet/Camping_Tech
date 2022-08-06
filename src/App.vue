<template>
  <navbar></navbar>
  <router-view/>
</template>

<script>
 import navbar from './components/navbar.vue'

  export default{
    name: 'App',
    components:{
      navbar,
    }
  }
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}

</style>
