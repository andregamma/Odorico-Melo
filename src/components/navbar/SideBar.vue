<template>
  <div class="navbar-container">
    <div @click="toggleNav" class="toggle-side">
      <n-icon icon="single-copy-04" size="1.2" />
    </div>
    <div class="overflow"></div>
    <nav class="nav flex-column sidebar">
      <slot></slot>
    </nav>
  </div>
</template>

<script>
    import NIcon from '@/components/icon/NucleoIcon'
    export default {
        name: "SideBar",
        data() {
            return {}
        },
        props: {},
        methods: {
          toggleNav: () => {

              $('.sidebar').fadeToggle()

              $('.toggle-side').toggleClass('active')

              $('.overflow').toggle()

          }
        },
        components: {
            NIcon
        }
    }
</script>

<style scoped>
  .sidebar {
    border-right: 1px solid #ccc;
    width: 210px;
    min-height: 70vh;
    height: 100%;
  }

  .toggle-side {
    cursor: pointer;
    display: none;
    position: fixed;
    z-index: 999;
    background: #fff;
    padding: 5px 3px 0;
    border-radius: 4px;
    margin-top: -35px;
  }

  .overflow {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 980;
    background: rgba(0, 0, 0, 0.70);
    top: 0;
    left: 0;
    display: none;
  }

  .toggle-side.active i {
    color: #0da5c0;
  }

  @media screen and (max-width: 600px) {

    .toggle-side {
      display: block;
    }

    .sidebar {
      display: none;
      position: fixed;
      z-index: 990;
      background: white;
      min-height: 100vh;
      height: 100%;
      padding: 10px;
      position: fixed;
      left: 0px;
    }

  }

</style>

