# V&S — Calculadora de IMC

> Uma aplicação web simples e intuitiva para cálculo e interpretação do Índice de Massa Corporal (IMC).

## 📋 Sobre o projeto

O **V&S** é um projeto desenvolvido com o objetivo de criar uma ferramenta simples para auxiliar o usuário a calcular seu Índice de Massa Corporal (IMC) e compreender sua classificação.

Além da calculadora, o projeto apresenta informações sobre o IMC, suas classificações e alguns cuidados relacionados à interpretação do resultado.

O projeto foi desenvolvido como forma de praticar e consolidar conhecimentos em **HTML, CSS e JavaScript**, com foco em organização, interação com o usuário e construção de uma interface agradável e intuitiva.

---

## 🚀 Funcionalidades

- 🧮 Cálculo do IMC através de peso e altura
- 📊 Classificação do resultado
- 🎨 Alteração visual de acordo com a classificação do IMC
- 📍 Indicador visual da faixa de IMC
- ⚠️ Avisos personalizados de acordo com o resultado
- ✨ Animação na exibição do resultado
- 📱 Interface simples e intuitiva
- 📖 Página com informações sobre o projeto e o IMC
- 🧭 Navegação entre as páginas

---

## 🖥️ Tecnologias utilizadas

### Front-end

- **HTML5** — Estrutura das páginas
- **CSS3** — Estilização, layout e animações
- **JavaScript** — Lógica da aplicação e interação com o usuário

### Conceitos praticados

- Manipulação do DOM
- Eventos com `addEventListener`
- Funções em JavaScript
- Condicionais (`if`, `else if`, `else`)
- Validação de dados
- CSS Flexbox
- Pseudo-elementos
- Variáveis CSS
- Transições e animações
- Organização de arquivos

---

## 📐 Como funciona o cálculo

O IMC é calculado utilizando a seguinte fórmula:

**IMC = peso ÷ (altura × altura)**

Onde:

- `peso` é informado em quilogramas (kg)
- `altura` é informada em metros (m)

A aplicação utiliza as seguintes faixas:

| IMC | Classificação |
|---|---|
| Abaixo de 18,5 | Abaixo do peso |
| 18,5 – 24,9 | Peso normal |
| 25 – 29,9 | Sobrepeso |
| 30 ou mais | Obesidade |

> **Importante:** o IMC é apenas uma referência e não substitui uma avaliação realizada por um profissional de saúde.

---

## 📂 Estrutura do projeto

```text
V&S/
│
├── assets/
│   ├── imagens/
│   │
│   ├── js/
│   │   ├── calculadora.js
│   │   └── index.js
│   │
│   └── style.css
│
├── index.html
├── calculadora.html
├── sobre.html
└── README.md