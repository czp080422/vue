<template>
  <div>
    <div class="news">
      <div class="list-title">{{getDate}}</div>
      <div class="list" v-for="item in datalist" @click="toDetail(item.id)">
        <img class="img" :src="item.images[0]">
        <div class="title">
          <h3>{{item.title}}</h3>
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
  name: 'news',
  data () {
    return {
      datalist: []
    }
  },
  components: {
    Footer
  },
  computed: {
    getDate: function(){
      var date = new Date();
      var year = date.getFullYear();
      var month = (date.getMonth() + 1) < 10? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
      var day = date.getDate() < 10? "0" + date.getDate() : date.getDate();
      return  year + "年" + month + "月" + day + "日";
    }
  },
  methods: {
    toDetail: function(id){
      this.$router.push("/news/detail/" + id);
    }
  },
  created () {
    var that = this;
    axios.get("http://localhost:8088/news")
      .then((res) => {
        that.datalist = res.data.stories;
      })
      .catch((error) => error);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-title {
    margin: 10px;
    font-size: 20px;
    padding-left: 10px;
    border-left: 5px solid blue;
  }
  .news {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    bottom: 72px;
    top: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
    background-color: #ededed;
  }
  .list {
    flex-shrink: 0;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center ;
    margin: 2px 0;
    padding: 0 4px;
    width: 100%;
    background-color: #fff;
    cursor: pointer;
  }
  .img {
    width: 80px;
    height: 80px;
  }
  .title {
      flex: 1;
  }
  .title > h3 {
    text-align: left;
    margin: 0;
    padding: 0 10px;
    font-size: 18px;
    font-weight:normal;
  }
</style>
