<template>
  <Master>
      <Banner></Banner>
    <Content></Content>
  </Master>
</template>

<script>
import Content from '../components/Content'
import Banner from '../components/Banner'
import Master from './Master'
export default {
    components: {
        Master,
        Content,
        Banner
    }
}
</script>

<style>

</style>