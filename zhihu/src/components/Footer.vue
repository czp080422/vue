<template>
  <div class="footer">
    <router-link to="/news" class="news">
      <div class="item">
        <img :src="'/static/images/news' + fileName" alt="">
        <h3>日报</h3>
      </div>
    </router-link>
    <router-link to="/themes" class="themes">
      <div class="item">
        <img :src="'/static/images/theme' + fileName" alt="">
        <h3>主题</h3>
      </div>
    </router-link>
    <router-link to="/sections" class="sections">
      <div class="item">
        <img :src="'/static/images/section' + fileName" alt="">
        <h3>专栏</h3>
      </div>
    </router-link>
    <router-link to="/about" class="about">
      <div class="item">
        <img :src="'/static/images/about' + fileName" alt="">
        <h3>关于</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      src: "",
      fileName: ".png"
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px 0;
  border: 1px solid #ccc;
}

.item {
  
}

.item img {
  height: 28px;
  weight: 28px;
  margin-bottom: 5px;
}

.item h3 {
  font-size: 16px;
  text-decoration: none;
  margin: 0;
}

.router-link-active {
  color: #09a814;
}
</style>
