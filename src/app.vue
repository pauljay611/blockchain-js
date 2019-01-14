<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/BlockData" active-class="active">Block Data</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/BlockSend" active-class="active">Send Data</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/BlockExplorer" active-class="active">Block Explorer</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/BlockTransaction" active-class="active">Block Transaction</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/BlockMining" active-class="active">Block Mining</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import BlockData from './components/BlockData.vue'
export default {
  name: 'app',
  components:{
    BlockData
  }
}
</script>
<style lang="css">
html,
body {
  min-height: 100vh;
  background-color: #e8e8e8;
}
.header {
  margin-bottom: 50px;
}
.header > ul > li > a:hover{
  background-color: cadetblue;
  color: white;
}
.active{
  background-color: cadetblue;
  color: white;
}
.container {
  padding-top: 50px;
  padding-bottom: 50px;
}
#page-title {
  text-align: center;
  margin-bottom: 40px;
}
.table-title {
  margin-bottom: 20px;
  text-align: center;
}
.table {
  background-color: #ffffff;
  box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.75);
}
#balance-text {
  text-align: center;
  margin-top: -20px;
  margin-bottom: 30px;
}
.margin-auto {
  margin: auto;
  display: block;
}
.btn-search {
  margin-bottom: 50px;
}
.bold {
  font-weight: 700;
}
.no-data-text {
  color: red;
  text-align: center;
}
</style>
