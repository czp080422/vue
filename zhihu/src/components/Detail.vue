<template>
  <div>
    <div class="title">
      <h1>{{data.title}}</h1>
      <!--<div>
        <h4>作者：<span style="color:blue;font-weight:normal;">qianmucheng</span></h4>
      </div>-->
    </div>
    <div class="news-detail" v-html="detail"></div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'news',
  data () {
    return {
      detail: "",
      data: {}
    }
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
   
  },
  created () {
    var that = this;
    var id = this.$route.params.id;
    axios.get("http://localhost:8088/news/detail?id=" + id)
      .then((res) => {
        that.data = res.data;
        that.detail = res.data.body;
      })
      .catch((error) => error);
  },
  updated () {
    document.querySelector(".headline").style.display = "none";
    document.querySelector(".view-more").style.display = "none";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .news-detail {
    text-align: left;
  }
</style>
