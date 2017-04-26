<template>
  <div>
    <div class="themes">
      <div class="list" v-for="item in datalist" @click="toDetail(item.id)">
        <img class="img" :src="item.thumbnail">
        <div class="title">
          <h3>{{item.name}}</h3>
          <span>{{item.description}}</span>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios"
import Footer from "@/components/Footer"

export default {
  name: 'themes',
  data () {
    return {
      datalist: []
    }
  },
  components: {
    Footer
  },
  methods: {
    toDetail: function(id){
      //this.$router.push("/news/detail/" + id);
    }
  },
  created () {
    var that = this;
    axios.get("http://localhost:8088/themes")
      .then((res) => {
        that.datalist = res.data.others;
      })
      .catch((error) => error);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .themes {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    bottom: 72px;
    top: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
    padding: 4px;
    background-color: #ededed;
  }
  .list {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 4px;
    background-color: #fff;
    cursor: pointer;
  }
  .img {
    width: 276px;
    height: 276px;
  }
  .title {
    background: #fff;
    width: 276px;
    text-align: left;
    padding: 4px;
  }
  .title > h3 {
    margin: 0;
    font-size: 18px;
    font-weight:550;
  }
  .title > span {
    text-align: left;
  }
</style>
