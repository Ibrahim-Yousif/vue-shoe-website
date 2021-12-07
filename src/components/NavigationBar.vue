<template>
  <nav class="navbar navbar-expand-lg bg-transparent navbar-light fixed-top ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hehe" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="hehe">


      <a class="navbar-brand etq-brand left-nav-item l" href="">ETQ.</a>


      <ul class="navbar-nav me-auto">
        <li class="nav-item"> <a href="#" class="nav-link  left-nav-item l">Men</a></li>
        <li class="nav-item"> <a href="#" class="nav-link  left-nav-item l">Women</a> </li>
        <li class="nav-item"> <a href="#" class="nav-link  left-nav-item l">Sale</a></li>
      </ul>
      <ul class="navbar-nav ms-auto right-ul">
        <li class="nav-item"> <a href="#" class="nav-link">Search</a></li>
        <li class="nav-item"> <a href="#" class="nav-link">Help</a> </li>

        <button data-popup-target="#popup-card" type="button" name="button">My account</button>

        <div class="popup-card" id="popup-card">
          <div class="popup-text">
            create an account or login to view your<br> orders, return or adjust your personal <br> information.
          <hr>
          </div>
          <div class="popup-registration">
            <button type="button" name="button">create account</button>
            <button type="button" name="button">login</button>

          </div>
        </div>
        <div id="overlay">

        </div>
        <li class="nav-item"> <a href="" class="nav-link">0</a> </li>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'NavigationBar'
}
</script>

<style scoped>

</style>