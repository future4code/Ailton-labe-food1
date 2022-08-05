### Projeto LabeFoods - Rappi4
link do surge: http://labfood-final.surge.sh/

Trabalharam neste projeto: Lincoln Ribeiro, Igor Castro, Giovanna Magalhães, Sávio Ayres e Raoni Lobo.

Proposta: Criar uma plataforma de Delivery: a LabeFoods.

É um projeto mobile-first.

Funcionalidades/não funcionalidades do projeto
Página inicial (Login)
Funciona:
Dois inputs e um botão e um link para página de cadastro, caso não tenha usuário ainda.

Página de Cadastro.
Funciona:
Pequeno formulário com 5 inputs e um botão para finalizar o cadastro, que realiza uma requisição na API para criar uma conta. Logo após uma nova tela surge, de cadastro de endereço do usuário com 6 inputs e um botão para finalizar cadastro.

Feed de Restaurantes / busca Restaurante.
Funciona:
Exibe todos os restaurantes cadastrados, com nome / tempo de entrega / Frete. Exibe também um input de busca, onde é possível filtrar o restaurante pelo nome e um carrossel com filtro de categoria de restaurantes. Também exibe um footer de navegação para as páginas Feed/Carrinho/Perfil. 

Página detalhes do Restaurante (ao clicar no botão Detalhes)
Funciona:
Dados do restaurante com: Categoria, nome, duração de entrega e endereço. Exibe também o cardápio do restaurante filtrado por tipos de refeição, com a barra de navegação, botão no header para voltar e descrição da tela em que se encontra.
Cada ítem do cardápio contém nome, descrição, valor e um botão para adicionar os ítens e quantidades. 

Página Carrinho
Funciona:
O carrinho renderiza o endereço do usuário os ítens selecionados, valor do frete a ser pago, subtotal, modalidade de pagamento e um botão para confirmar pedido. Possindo também, o header e o footer com as informações de página e navegação por toda aplicação.

Mensagem Pedido
Funciona:
Após finalizar compra, o usuário é redirecionado para o feed, sendo impossibilitado de comprar até o período de entrega ser concretizado. Durante este período fica em exibição na tela feed do usuário a mensagem com os dados da compra tais quais: Valor total, restaurante e tempo de entrega.
Prints do LabeFoods:
