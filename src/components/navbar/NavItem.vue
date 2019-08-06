<template>
  <li :class="style" >
    <router-link :to="url" :class="aStyle">
    <slot></slot>
    </router-link>
  </li>
</template>

<script>
    export default {
        name: "NavItem",
        data() {
            return {
              aStyle: `nav-link  ${this.linkCss}`,
              style: `${ (this.local === 'navbar' ? 'nav-item' : 'side-item') }`
            }
        },
        props: {
          linkCss: {
            required: false,
            default: ''
          },

          url: '',
          local: {
              default: 'navbar',
              required: false
          }
        }
    }
</script>

<style scoped>
  .side-item {
    font-size: 14px;
  }
</style>
