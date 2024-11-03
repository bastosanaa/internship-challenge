# Salutho - Desafio de Estágio para Desenvolvedor de Software

## Visão Geral

Este desafio consiste em desenvolver uma aplicação em React que interage com uma API Django para calcular o menor número inteiro divisível por todos os números dentro de um intervalo específico. Você deverá demonstrar competência tanto em desenvolvimento frontend com React quanto em backend com Django.

### Funcionalidades

- **Frontend:**

  - [ x ] A aplicação deve ter um formulário com dois campos de entrada para que o usuário possa inserir os números que definem o intervalo (x a y).
  - [ x ] Os números inseridos devem ser validados para garantir que:
    - [ x ] Ambos os números são inteiros positivos.
    - [ x ] O valor de x deve ser menor que y.
    - [ x ] O intervalo não deve ser menor ou igual a zero.
  - [ x ] Após a inserção e validação dos números, o frontend deve fazer uma requisição à API Django para obter o resultado do cálculo.
  - [ x ] A resposta deve ser exibida na mesma página.

- **Backend (API Django):**
  - [ x ] Desenvolver uma rota que receba dois números (x e y) via solicitação HTTP.
  - [ x ] A API deve calcular o menor número inteiro que é divisível por todos os números do intervalo x a y.
  - [ x ] Retornar o resultado para o frontend.

### Tecnologias

- **Frontend:** React
- **Backend:** Django
- **Estilização:** Escolha livre entre CSS puro, pré-processadores (como SASS ou LESS) ou bibliotecas de componentes estilizados (como styled-components).

### Configuração do backend

Antes de executar o projeto, certifique-se de ter o Python e o pip instalados em seu sistema.

1. navegue até o diretório do backend

2. instale as dependencias

pip install -r requirements.txt

3. inicie o servidor

python manage.py runserver

### Configuração do frontend

Antes de executar o projeto, certifique-se de ter o Node.js e o npm instalados em seu sistema.

1. navegue até o diretório do frontend

2. instale as dependências

npm install

3. inicie a página web localmente

npm run dev

### Rodando projeto em produção

Você também pode rodar o projeto em build caso deseje, tornando desnecessário rodar o frontend localmente de forma independente

1. para isso, inicie o backend como nas instruções acima e clique na url de redirecionamento para o browser que aparecerá no console
