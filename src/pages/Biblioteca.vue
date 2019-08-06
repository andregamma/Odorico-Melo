<template>
    <section class="container" page="biblioteca">
      <row>
        <column size="3">
          <side-bar>
            <h6>Filtrar</h6>
            <nav-divider :flat=true direction="vertical"/>
            <p class="group-title">Disponibilidade</p>

            <nav-item local="side" url="/biblioteca/c/fisico">Físico</nav-item>
            <nav-item local="side" url="/biblioteca/c/digital">Digital</nav-item>

            <p class="group-title">Gênero</p>

            <nav-item local="side" url="/biblioteca/c/biologia">Biologia</nav-item>
            <nav-item local="side" url="/biblioteca/c/escolar">Escolar</nav-item>
            <nav-item local="side" url="/biblioteca/c/ficcao-cientifica">Ficção Ciêntifica</nav-item>

          </side-bar>
        </column>
        <column>
          <row class="book-area">
            <book-card></book-card>
            <book-card></book-card>
            <book-card></book-card>
            <book-card></book-card>
          </row>
        </column>
      </row>
    </section>
</template>

<script>
  import Row from '@/components/grid/Row'
  import Column from '@/components/grid/Column'
  import SideBar from '@/components/navbar/SideBar'
  import NavItem from '@/components/navbar/NavItem'
  import NavDivider from '@/components/navbar/NavDivider'
  import BookCard from "@/components/BookCard"

    export default {
        name: "Biblioteca",
        data() {
            return {
                sideItems: [
                    { id: 0, name: 'Disponíveis', ref: 'disponiveis' },
                    { id: 1, name: 'Fisico', ref: 'fisico' },
                    { id: 2, name: 'Digital', ref: 'digital' },
                    { id: 3, name: 'Ficção Científica', ref: 'ficcao-cientifica' },
                ]
            }
        },
        props: {},
        methods: {
          itemRoute: (ref) => {
              return `biblioteca/c/${ref}`
          }
        },
        components: {
          Row,
          Column,
          SideBar,
          NavItem,
          NavDivider,
          BookCard
        }
    }
</script>

<style scoped>
  .vertical.flat {
    margin: 5px 0;
  }
  .group-title {
    margin: 5px 0;
    font-size: 12px;
    font-weight: bold;
  }
  section {
    padding-top: 70px;
  }
</style>
