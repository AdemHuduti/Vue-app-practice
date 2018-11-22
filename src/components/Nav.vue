<template>
  <div>
    <nav class="navbar navbar-expand-lg myNavbar">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="zyox-logo" class="zyox-logo" />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fas fa-bars hamburger-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

        </ul>
        <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a to="*" class="mr-2 btn_als">Lorem</a>
            </li>
            <li class="nav-item">
              <a to="*" class="mr-2 btn_als btn-white">Lorem, ipsum dolor.</a>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hamburger-icon {
  color: #fff;
}

.navbar-toggler-icon {
  border-color: #fff;
}

.hash-mark,
.hash-companies {
  color: #fff;
}

.hash-awesome {
  color: rgb(129, 129, 129);
}

.btn_als {
  border: 1px solid #fff;
  font-size: 1rem;
  padding: 0.2rem 1rem;
  line-height: 40px;
  transition: 0.5s all ease;
  color: #fff;
  text-transform: uppercase;
}

.btn_als:hover {
  background-color: #fff;
}

.btn-white {
  background: #fff;
  color: #000;
}

.nav-item .btn-white:hover {
  background: #000;
  color: #fff;
}

.nav-item:first-child {
  color: #fff;
}

.zyox-logo {
  height: 30px;
}

.myNavbar {
  background: #000;
}

.myNavbar li a:hover {
  background: white;
  color: black;
}

.navbar-toggler:focus {
  outline: none;
}
</style>
