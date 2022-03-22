const cartoesPokemon = document.querySelectorAll('.cartao-pokemon');
const listagemPokemon = document.querySelectorAll('.listagem .pokemon');

function setPokemon() {
  if(cartoesPokemon && listagemPokemon) {
    function changePokemon(index) {
      cartoesPokemon.forEach(pokemon => {
        pokemon.classList.remove('aberto');
      })
    
      listagemPokemon.forEach(cabecaPokemon => {
        cabecaPokemon.classList.remove('ativo');
      })
    
      cartoesPokemon[index].classList.add('aberto');
      listagemPokemon[index].classList.add('ativo');
    }
    
    listagemPokemon.forEach((cabecaPokemon, i) => {
      cabecaPokemon.addEventListener('click', () => {
        changePokemon(i);
      });
    })
  }
}
setPokemon();