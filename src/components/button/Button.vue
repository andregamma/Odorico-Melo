<template>
    <button :class="realStyle">

      <span class="btn-inner--icon" v-if="icon !== ''">
        <span v-if="iType === 'mdi'"> <m-icon :icon="icon" /> </span>
        <span v-else-if="iType === 'nci'"> <n-icon :icon="icon" /> </span>
      </span>

      <slot></slot>
    </button>
</template>

<script>
  import MIcon from '@/components/icon/MaterialIcon'
  import NIcon from '@/components/icon/NucleoIcon'
    export default {
        name: "Button",
        data() {
            return {
              style: `btn btn-${this.color} ${this.css}`,
            }
        },
        props: {
          color: {
            default: 'primary',
            required: false
          },
          css: {
            required: false,
            default: ''
          },
          icon: {
            required: false,
            default: ''
          },
          iType: {
            required: false,

            // mid (Material Icon) ou nci (Nucleo Icon)
            default: 'mdi'
          }
        },
      computed: {
          realStyle: function() {
            if (this.icon !== '') {
              this.style += ' btn-icon'
            }

            return this.style
          },
      },
      components: {
          MIcon,
          NIcon
      }
    }
</script>

<style scoped>
  i {
    top: 4px !important;
  }
</style>
