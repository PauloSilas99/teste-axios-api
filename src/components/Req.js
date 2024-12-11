// No Vue 3, quando se utiliza o setup dentro da <script>,
// não é permitido exportar valores explicitamente com export default.
// O setup é projetado para definir e disponibilizar logicamente 
// tudo que está dentro do escopo do componente diretamente no template.
// Quando você tenta usar export default, isso conflita com a funcionalidade do setup.
{/* <script setup>
import axios from 'axios';

const apiAxios = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
    headers: {
        'Content-Type':'application/json'
    }
});

export default apiAxios;
</script> */}

import axios from "axios";
const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers:{
        'Content-Type':'application/json'
    }
});
export default api;
