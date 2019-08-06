<template>
  <i :style="iconSize" :class="style"></i>
</template>

<script>
    export default {
      name: "NucleoIcon",
      data() {
          return {
            style: `ni ni-${this.icon}`
          }
      },
      props: {
        'icon': String,
        'size': {
          required: false,
          default: 1,
          type: Number
        }
      },
      computed: {
        iconSize: function(){
          return `font-size: ${(18 * this.size)}px; `
        }
      }
    }
</script>

<style scoped>

</style>
