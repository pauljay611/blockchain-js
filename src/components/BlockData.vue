<template>
  <div id="BlockData">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 id="page-title">Chain</h1>
        <h4 id="page-title">
          Sync node:
          <span v-for="(node, index) in nodes" :key="index">{{node}}</span>
        </h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="newNodeUrl">
          <div class="input-group-append">
            <button
              class="btn btn-outline-primary"
              type="button"
              @click.stop.prevent="syncNode"
            >Synchronize</button>
          </div>
        </div>
      </div>
      <div class="col-md-3" v-for="(block, index) in chainData" :key="index">
        <table class="table table-striped table-responsive">
          <tbody>
            <tr>
              <td class="bold">Block Hash</td>
              <td>{{ block.hash }}</td>
            </tr>
            <tr>
              <td class="bold">Index</td>
              <td>{{ block.index }}</td>
            </tr>
            <tr>
              <td class="bold">Time Stamp</td>
              <td>{{ block.timestamp }}</td>
            </tr>
            <tr>
              <td class="bold">Nonce</td>
              <td>{{ block.nonce }}</td>
            </tr>
            <tr>
              <td class="bold">Previous Hash</td>
              <td>{{ block.previousBlockHash }}</td>
            </tr>
            <tr>
              <td class="bold">Number Transactions</td>
              <td>{{ block.transactions.length }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlockData",
  data() {
    return {
      nodes: [],
      chainData: [],
      transaction: null,
      pendingTransactions: [],
      newNodeUrl: ""
    };
  },
  methods: {
    getBlockData() {
      axios.get(`/blockchain`).then(response => {
        this.nodes = response.data.networkNodes;
        this.chainData = response.data.chain;
        this.pendingTransactions = response.data.pendingTransactions;
      });
    },
    syncNode() {
      console.log(this.newNodeUrl);
      axios
        .post(`/register-and-broadcast-node`, {
          newNodeUrl: this.newNodeUrl
        })
        .then(response => {
          console.log(response);
          location.reload();
        });
    }
  },
  mounted() {
    this.getBlockData();
  }
};
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