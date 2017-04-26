<template>
  <div class="footer">
    <router-link to="/news">
      <img >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer'
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
  height: 32px;
  weight: 32px;
}

.item h3 {
  font-size: 16px;
  text-decoration: none;
  margin: 0;
}

.router-link-active {
  color: red;
}
</style>
