# 🎁 Amigo Secreto - Praticando Lógica de Programação

Este repositório contém o projeto de um sistema de **Amigo Secreto**, desenvolvido como um desafio de lógica de programação. O objetivo principal é permitir que o utilizador adicione nomes a uma lista e realize um sorteio aleatório e circular entre os participantes.

## 🚀 Evolução do Projeto e Auxílio da IA

O projeto iniciou-se como um desafio estrutural básico. Após a conclusão da lógica inicial, utilizei o **Google Gemini** para uma mentoria avançada. Em vez de apenas receber o código pronto, trabalhámos num método de ensino focado em:
1. **Entender o "Porquê":** Compreender a anatomia de cada função e método.
2. **Boas Práticas:** Implementação de validações robustas e tratamento de erros.
3. **Escalabilidade:** Organizar o código para que novas funcionalidades pudessem ser adicionadas sem quebrar o sistema.

## 🛠️ Novas Funcionalidades (Pós-Mentoria)

Graças à exploração de conceitos avançados de JavaScript, o projeto conta agora com:

* **Validação de Nomes Duplicados:** O sistema impede a entrada de nomes idênticos, garantindo a integridade do sorteio.
* **Remoção Dinâmica de Nomes:** Implementei a funcionalidade de remover um amigo da lista apenas clicando sobre o seu nome.
* **UX com Atalhos de Teclado:** Adição de um `EventListener` para permitir o uso da tecla `Enter` ao adicionar nomes.
* **Limite de Participantes:** Trava de segurança para um máximo de 8 amigos, ideal para pequenos grupos.
* **Sorteio Aleatório (Fisher-Yates):** Uso de um algoritmo profissional de embaralhamento para garantir que o sorteio seja imprevisível e justo.
* **Limpeza de Buffer:** O sistema limpa automaticamente os resultados de sorteios anteriores antes de gerar um novo.

## 🧠 Conceitos Técnicos Aplicados

* **Manipulação do DOM:** Uso intensivo de `getElementById`, `innerHTML` e `textContent`.
* **Lógica de Arrays:** Aplicação de métodos como `.push()`, `.splice()`, `.some()` e `.forEach()`.
* **Algoritmos:** Implementação de embaralhamento baseado em índices e números aleatórios (`Math.random`).
* **Tratamento de Dados:** Uso de `.trim()` e normalização de strings para evitar entradas vazias ou erros de digitação.

## 💻 Como utilizar

1. Digite o nome de um amigo no campo de entrada.
2. Pressione **Enter** ou clique em **Adicionar**.
3. Repita o processo (mínimo de 4 amigos, máximo de 8).
4. Se errar um nome, basta
