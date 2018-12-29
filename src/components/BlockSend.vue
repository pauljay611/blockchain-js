<template>
  <div id="BlockData">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 id="page-title">Wallet</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
        <form>
          <div class="form-group">
            <label for="Amount">Amount</label>
            <input type="text" class="form-control" placeholder="sending amount" v-model="amount">
          </div>
          <div class="form-group">
            <label for="Sender">Sender</label>
            <input type="text" class="form-control" placeholder="your name" v-model="sender">
          </div>
          <div class="form-group">
            <label for="Recipient">Recipient</label>
            <input
              type="text"
              class="form-control"
              placeholder="recipient name"
              v-model="recipient"
            >
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.stop.prevent="startTransaction"
          >Transaction</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      amount: 1,
      sender: "",
      recipient: "",
      initialSearchMade: false,
      searchValue: "",
      searchType: ""
    };
  },
  methods: {
    startTransaction() {
      axios
        .post(`/transaction/broadcast`, {
          amount: this.amount,
          sender: this.sender,
          recipient: this.recipient
        })
        .then(response => {
          console.log(response.data);
          window.location.href = "/BlockTransaction";
        });
    }
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
            