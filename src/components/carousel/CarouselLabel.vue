<template>
  <div :class="motherClass">
    <div :id="sid" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li v-for="n in items.length" :data-target="rid" :class="indicatorClass(n-1)" :data-slide-to="n-1"></li>
      </ol>
      <div class="carousel-inner">
        <div :class="cItemClass(index)" v-for="(item, index) in items" :key="item.id">
          <img :src="item.img" :class="realSize" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{item.title}}</h5>
            <p>{{item.desc}}</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" :href="rid" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" :href="rid" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CarouselLabel",
        data() {
            return {
              rid: `#${this.sid}`
            }
        },
        props: {
          sid: String,
          size: {
            required: false,
            default: 'full'
          },
          motherClass: {
            required: false,
            default: 'r-carousel'
          },
          items: Array
        },
      computed: {
          realSize: function() {
            let size = 'd-block '
            switch (this.size) {
              case 'full':
                size += 'w-100'
                    break;
              case 'semi-full':
                size += 'w-100 hw-nav'
                    break;
            }
            return size;
          }
      },
      methods: {
        cItemClass: function(i) {
          return `carousel-item ${(i === 0 ? 'active' : '')}`;
        },
        indicatorClass: function(i) {
          return `carousel-indicator ${(i === 0 ? 'active' : '')}`;
        }
      }
    }
</script>

<style scoped>
  .hw-nav {
    height: calc(100vh - 86px);
  }
  .carousel-inner img {
    object-fit: cover;
    object-position: center;
  }
  .carousel-caption {
    font-weight: 600;
    font-family: 'Segoe UI';
  }
  .carousel-caption h5{
    color: white;
    font-size: 30px;
  }

  .carousel-caption p {
    font-weight: 500;
  }

</style>
