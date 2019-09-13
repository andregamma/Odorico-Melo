<template>
    <div class="row">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "row",
        data() {
            return {}
        },
        props: {}
    }
</script>

<style scoped>

  @media screen and (max-width: 600px) {
    .row {
      flex-direction: column;
    }
  }

</style>
