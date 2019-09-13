<template>
  <div class="book-card">
      <div class="card-body">
        <img src="../assets/book-1.jpg" alt="">
        <div class="book-desc">
          <h5 class="title">Harry Potter e a Pedra Filosofal</h5>
          <p class="desc">Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling.
            A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um
            bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.
          </p>
        </div>
      </div>
      <div class="card-footer">
        <div class="info">
          <h6>Editora:</h6>
          <p>Rocco</p>
        </div>
        <div class="info">
          <h6>Ano de publicação:</h6>
          <p>1997</p>
        </div>
      </div>
  </div>
</template>

<script>
    import Row from '@/components/grid/Row'
    import Column from '@/components/grid/Column'

    export default {
        name: "BookCard",
        components: {
            Row,
            Column
        }
    }
</script>

<style scoped>

  .book-card {
    padding: 7px;
    border: 1px solid rgba(108, 117, 125, 0.36);
    border-radius: 3px;
    width: 46%;
    height: 313px;
    margin-right: 4%;
    margin-bottom: 30px;
  }

  img {
    width: 120px;
    margin-right: 5px;
    height: 100%;
  }

  .card-body {
    padding: 5px;
    display: flex;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    background: transparent;
    border-top: 1px solid rgba(108, 117, 125, 0.36);
    padding: 1.25rem 1.25rem 10px;
  }

  .desc {
    font-size: 12px;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
  }

  @media screen and (max-width: 600px) {

    .book-card {
      height: max-content;
      width: 96%;
      margin: 10px auto;
    }

  }

</style>
