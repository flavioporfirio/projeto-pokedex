/*
quando clicar no pokémon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correpondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos:
- listagem
- cartão do pokémon
*/

// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaselecaopokemons = document.querySelectorAll('.pokemon') 
const pokemonscard = document.querySelectorAll('.cartao-pokemon')


listaselecaopokemons.forEach(pokemon => 
{
    // Trabalhar com o evento de click feito pelo usuário na listagem de pokémons
   
    pokemon.addEventListener('click', () => 
    {
        // remover a classe ativa que marca o pokémon selecionado
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // ao clicar em um pokémon da listagem pegamos o id para saber qual cartão mostrar.
        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonAbrir.classList.add('aberto')

        //remover a classe aberto só do cartão que esta aberto
        const listagemPokemonAtivo = document.querySelector('.ativo')
        listagemPokemonAtivo.classList.remove('ativo')

        //adicionar a classe aberto só do cartão que esta aberto

        const listagemIdPokemonAtivar = document.getElementById(idPokemonSelecionado)

        listagemIdPokemonAtivar.classList.add('ativo')

    })
})