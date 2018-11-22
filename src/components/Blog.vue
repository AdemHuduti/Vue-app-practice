<template>
  <div>
    <div class="container">
      <div class="row mb-5 mt-5">
        <div class="col-md-6">
          <img src="https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg" alt="jezo" class="img-fluid">
        </div>
        <div class="col-md-6">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aliquam veniam dolorem, ipsa, fugit aperiam laborum debitis repudiandae quaerat facere vero, vitae iusto eveniet deserunt. Illum sit cumque, velit reiciendis laborum obcaecati nemo recusandae, voluptates maxime porro quia dolore. Magni doloremque dolore quo ducimus sed sequi nulla perferendis, ad suscipit consequuntur, quas ex adipisci earum eveniet voluptate quisquam. Et, laudantium.</p>
          <div>
            <router-link to="/data" class="btn btn-success">Data</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lorem: "ha lorem",
      toggle: true,
      btn_name: true
    };
  },
  methods: {
    toggleMe() {
      this.toggle = !this.toggle;
      this.btn_name = !this.btn_name;
    }
  }
};
</script>

<style>
</style>
