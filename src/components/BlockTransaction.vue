<template>
  <div id="BlockTransaction">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 id="page-title">Transaction</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="(transaction, index) in pendingTransactions" :key="index">
        <table class="table table-striped table-responsive">
          <tbody>
            <tr>
              <td class="bold">Amount</td>
              <td>{{ transaction.amount }}</td>
            </tr>
            <tr>
              <td class="bold">Sender</td>
              <td>{{ transaction.sender }}</td>
            </tr>
            <tr>
              <td class="bold">Recipient</td>
              <td>{{ transaction.recipient }}</td>
            </tr>
            <tr>
              <td class="bold">TransactionId</td>
              <td>{{ transaction.transactionId }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chainData: [],
      transaction: null,
      pendingTransactions: []
    };
  },
  methods: {
    getTransactionData() {
      axios.get(`/blockchain`).then(response => {
        this.chainData = response.data.chain;
        this.pendingTransactions = response.data.pendingTransactions;
      });
    }
  },
  mounted() {
    this.getTransactionData();
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
            