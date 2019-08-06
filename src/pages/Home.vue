<template>

  <carousel-label :items="carousel_items" size="semi-full" sid="index-carousel" />

</template>

<script>


  import MIcon from '@/components/icon/MaterialIcon'
  import NIcon from '@/components/icon/NucleoIcon'
  import RButton from '@/components/button/Button'
  import CarouselLabel from '@/components/carousel/CarouselLabel'

  export default {
    name: 'Home',
    data () {
      return {
        carousel_items: [
          {
            'id': 1,
            'img': '/static/img/slider/1.png',
            'title': 'Matriculas abertas para 2019',
            'desc': 'As matriculas podem ser feitas online ou vindo a nossa escola.'
          },
          {
            'id': 2,
            'img': 'https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2016/04/1140-yeager-sell-your-used-books.imgcache.rev6feda141288df73e8fd100822bb375ea.jpg',
            'title': 'Vraunalise',
            'desc': 'Testando 123'
          }
        ]
      }
    },
    components: {
      RButton,
      MIcon,
      NIcon,
      CarouselLabel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
