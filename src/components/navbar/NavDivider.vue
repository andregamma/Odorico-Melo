<template>
    <li :class="dir"></li>
</template>

<script>
    export default {
        name: "NavDivider",
        data() {
            return {
                dir: `nav-divider ${ ( this.direction === "horizontal" ? this.direction : 'vertical' ) } ${ (this.flat ? 'flat' : 'gradient') }`
            }
        },
        props: {
            direction: {
                default: 'horizontal',
                required: false,
                type: String
            },
            flat: {
                default: false,
                required: false,
                type: Boolean
            }
        },
    }
</script>

<style scoped>
  .nav-divider {
    border-radius: 1px;
    background: #6c757d;
    position: relative;
  }

  .horizontal {
    width: 1.5px;
    height: 40px;
    margin: auto 5px;
  }

  .horizontal.gradient {
    background: linear-gradient(180deg, transparent, #6c757d, transparent);
  }

  .vertical {
    width: 70%;
    height: 1.5px;
    margin: 5px auto;
  }

  .vertical.gradient {
    background: linear-gradient(190deg, transparent, #6c757d, transparent);
  }
</style>
