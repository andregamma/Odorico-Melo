<template>
    <i :style="style" class="material-icons">{{icon}}</i>
</template>

<script>
    export default {
        name: "material",
        data() {
            return {}
        },
        props: {
          icon: String,
          size: {
            default: 1,
            required: false
          },
          css: {
            default: '',
            required: false
          }
        },
      computed: {
        iconSize: function() {
          let d = 18,
            i = 'font-size:';

          return `${i} ${(d*this.size)}px`
        },
        style: function() {
          return `${this.iconSize} ${this.css}`
        }
      }
    }
</script>

<style scoped>
  i {
    top: 4px !important;
  }
</style>
