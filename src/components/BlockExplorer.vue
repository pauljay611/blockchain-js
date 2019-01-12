<template>
  <div id="BlockExplorer">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 id="page-title">Block Explorer</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form>
          <div class="form-group">
            <input type="text" class="form-control" v-model="searchValue">
          </div>
          <div class="form-group">
            <select class="form-control" v-model="searchType">
              <option value="block">Block Hash</option>
              <option value="transaction">Transaction ID</option>
              <option value="address">Address</option>
            </select>
          </div>
          <button
            type="submit"
            class="btn btn-primary margin-auto btn-search"
            @click.stop.prevent="search(searchValue)"
          >Search</button>
          <p
            v-if="!block && !transaction && !addressData && initialSearchMade"
            class="no-data-text"
          >No data found for search.</p>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <!-- 'display block' table -->
        <h3 class="table-title" v-if="block">Block</h3>
        <table class="table table-striped" v-if="block">
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
        <!-- end 'display block' table -->
        <!-- 'display transaction' table -->
        <h3 class="table-title" v-if="transaction">Transaction</h3>
        <table class="table table-striped" v-if="transaction">
          <tbody>
            <tr>
              <td class="bold">Sender</td>
              <td>{{ transaction.sender }}</td>
            </tr>
            <tr>
              <td class="bold">Recipient</td>
              <td>{{ transaction.recipient }}</td>
            </tr>
            <tr>
              <td class="bold">Amount</td>
              <td>{{ transaction.amount }}</td>
            </tr>
          </tbody>
        </table>
        <!-- end 'display transaction' table -->
        <!-- 'display address' table -->
        <h3 class="table-title" v-if="addressData">Address</h3>
        <p id="balance-text" v-if="addressData">(Balance: {{ addressData.addressBalance }})</p>
        <table class="table table-striped" v-if="addressData">
          <thead>
            <tr>
              <th scope="col">Sender</th>
              <th scope="col">Recipient</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transaction, index) in addressData.addressTransactions" :key="index">
              <td>{{ transaction.sender }}</td>
              <td>{{ transaction.recipient }}</td>
              <td>{{ transaction.amount }}</td>
            </tr>
          </tbody>
        </table>
        <!-- end 'display address' table -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      block: null,
				transaction: null,
				addressData: null,
				initialSearchMade: false,
				searchValue: '',
				searchType: ''
    };
  },
 methods:{
				fetchBlock(blockHash){
					axios.get(`/block/${blockHash}`)
					.then(response => {
						this.block = response.data.block;
						this.transaction = null;
						this.addressData = null;
					});
				},
				fetchTransaction(transactionId){
					axios.get(`/transaction/${transactionId}`)
						.then(response => {
						this.transaction = response.data.transaction;
						this.block = null;
						this.addressData = null;
					});		
				},
				fetchAddressData(address){
					axios.get(`/address/${address}`)
					.then(response => {
						this.addressData = response.data.addressData;
						if (!this.addressData.addressTransactions.length) this
							.addressData = null;
						this.block = null;
						this.transaction = null;
					});
				},
				search(searchValue){
					this.initialSearchMade = true;
				if (this.searchType === 'block') {
					this.fetchBlock(searchValue);
				}
				else if (this.searchType === 'transaction') {
					this.fetchTransaction(searchValue);
				}
				else if (this.searchType === 'address') {
					this.fetchAddressData(searchValue);
				}
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
            