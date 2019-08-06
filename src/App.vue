<template>
  <div id="app">
    <header>
      <nav-bar
        logo="/static/img/logos/branco.png"
        url="#"
        color="dark" >

        <nav-item url="/">Inicio</nav-item>
        <nav-item url="/biblioteca">Biblioteca</nav-item>
        <nav-item url="#">Sobre</nav-item>

        <nav-divider />

        <nav-item url="#"> Entrar </nav-item>
        <r-button color="default" > Registrar </r-button>
      </nav-bar>
    </header>

    <main>
      <router-view/>
    </main>

    <footer>

    </footer>

  </div>
</template>

<script>
  import NavBar from '@/components/navbar/NavBar'
  import NavItem from '@/components/navbar/NavItem'
  import NavDivider from '@/components/navbar/NavDivider'
  import RButton from '@/components/button/Button'

export default {
  name: 'App',
  components: {
    NavBar,
    NavItem,
    NavDivider,
    RButton
  },
}
</script>

<style>
</style>
