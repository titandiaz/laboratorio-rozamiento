<template>
  <div class="presentation">
    <div class="wrapper-logo">
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div class="head">
      <h1 class="display-3">Fuerza de fricción estática</h1>
      <h4 class="subtitle">Laboratorio de Física </h4>
    </div>
    <div class="body">
      <p class="display-4">Cristian Camilo Diaz</p>
      <p class="display-4">Juan Carlos Otalora</p>
      <p class="display-4 profesor">Ing. Isaias Olarte</p>
      <!-- <h4 class="subtitle">Estudiantes</h4> -->
    </div>
    <div class="footer">
      <router-link class="link" to="/inicio">
        <button class="btn btn-success" type="button">Siguiente</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.presentation {
  display: grid;
  grid-template-rows: .3fr .7fr 1.3fr .4fr;
  height: 100vh;
  text-align: center;
}
.subtitle {
  line-height: 1;
}
.body {
  p {
    padding: 0;
    margin: 0;
  }
}
.wrapper-logo {
  img{
    max-width: 320px;
  }
}
.link {
  color: #fff;
  &:hover {
    color: #fff;
  }
}
.profesor {
  margin-top: 70px !important;
}
</style>