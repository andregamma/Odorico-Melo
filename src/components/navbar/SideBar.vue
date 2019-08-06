<template>
  <nav class="nav flex-column sidebar">
   <slot></slot>
  </nav>
</template>

<script>
    export default {
        name: "SideBar",
        data() {
            return {}
        },
        props: {}
    }
</script>

<style scoped>
  .sidebar {
    border-right: 1px solid #ccc;
    width: 210px;
    min-height: 70vh;
    height: 100%;
  }
</style>

