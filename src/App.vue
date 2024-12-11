<script setup>
import api from "./components/Req";
import { ref } from "vue";

//Estados reativos
const carregar = ref(false);
const erro = ref(null);
const dados = ref([]);

// função para buscar dados (GET)
const buscarDados = async () => {
  carregar.value = true;
  erro.value = null;
  try {
    const response = await api.get("/products");
    dados.value = response.data;
  } catch (err) {
    erro.value = err.message;
  } finally {
    carregar.value = false;
  }
};

// função para selecionar produto
const carrinho = ref([]);
const pushCarrinho = (produto) => {
  carrinho.value.push(produto);
};

// função para apagar produto
// const apagarProduto = (produto)=>{
  
  
// }


</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="centralizar">
    <div>
      <button @click="buscarDados()">Fazer requisição</button>
    </div>
    <div>
      <div v-if="carregar">Carregando Produtos</div>
      <div v-else-if="erro">Erro:{{ erro }}</div>

      <div class="flex-between">
        <span>Quantidade total : {{ dados.length }}</span>
        <span>Selecionados: {{ carrinho.length }}</span>
      </div>

      <div class="produtos">
        <div v-for="produto in dados" :key="produto.id" class="details">
          <div class="itens-span">
            <span>Título:{{ produto.title }}</span>
            <span>Preço:{{ produto.price }}</span>
            <span>Categoria: {{ produto.category }}</span>
          </div>
          <div>
            <img :src="produto.image" :alt="produto.image" class="img" />
          </div>
          <div class="div-btns">
            <button @click="pushCarrinho(produto)" class="btn-carrinho">Selecionar</button>
            <button @click="apagarProduto(produto)" class="btn-carrinho">Apagar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-between{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
}
.details {
  display: flex;
  gap: 10px;
}
.img {
  width: 120px;
}
.itens-span {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 150px;
}
.produtos{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.centralizar{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.div-btns{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.btn-carrinho{
  height: 50px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
