<template>
  <nav :class="style">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img :src="logo" alt="logo" class="logo logo-img" id="logo-nav">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-default">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a :href="url">
                <img :src="logo" alt="logo">
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav ml-lg-auto">
          <slot></slot>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "navbar",
        props: {
          logo  : String,
          logoType: {
            required: false,
            default: 'img'
          },
          url   : String,
          color : {
            default: 'dark'
          },
          css   : {
            type: String,
            default: '',
            required: false
          },
          expand: {
            default: 'expand',
            required: false
          }
        },
        data() {
            return {
              style: `navbar navbar-${this.expand} navbar-dark bg-${this.color} ${this.css}`
            }
        },
    }
</script>

<style>
  .navbar-nav .nav-link i {
    margin-right: 0.3rem;
  }
</style>
