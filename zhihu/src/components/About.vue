<template>
  <div>
    <div class="about">
      <h2>关于</h2>
      <p><label>姓名：</label><span>程宗平</span></p>
      <p><label>性别：</label><span>男</span></p>
      <p><label>职业：</label><span>前端开发</span></p>
      <p><label>就职：</label><span>ZTE中兴</span></p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer"

export default {
  name: '',
  data () {
    return {
      
    }
  },
  components: {
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
}
</style>
