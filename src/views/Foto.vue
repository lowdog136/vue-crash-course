<template>
  <div class="AboutClub">
    <h3>Страница с фото</h3>
  </div>
<!--  <select v-model="filter">-->
<!--    <option value="foto_2011"> 2011 год</option>-->
<!--    <option value="foto_2012"> 2012 год</option>-->
<!--    <option value="foto_2013"> 2013 год</option>-->
<!--  </select>-->
<!--  <br>-->
<!--  <br>-->
  <img width="450" height="330" src="../assets/images/ultra/2013/11-08/1.jpg"> <br>
  <img width="450" height="330" src="../assets/images/ultra/2013/11-08/2.jpg">
</template>
<script>
export default {
  data () {
    return {
      filter: '2013'
    }
  }
  // watch: {
  //   filter (value) {
  //     console.log(value)
  //   }
  // }
}
</script>
