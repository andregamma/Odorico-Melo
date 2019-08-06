<template>
    <div :class="realClass">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Column",
        data() {
            return {}
        },
        props: {
          size: {
            required: false,
            default: ''
          }
        },
        computed: {
          realClass: function() {
            return `col${ (this.size !== '' ? '-' + this.size : '') }`
          }
        }
    }
</script>

<style scoped>

</style>
