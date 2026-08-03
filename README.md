# 日本語 Study Guide — Capítulos 45 a 50

Apostila digital de revisão de japonês (Capítulos 45–50), em HTML/CSS/JS puro — sem frameworks, sem build, sem dependências.

## Status

| Capítulo | Conteúdo | Status |
|---|---|---|
| Introdução | Como usar o site | ✅ Completo |
| 45 | 場合・のに | ✅ Completo |
| 46 | ところです・ばかりです・はずです | ✅ Completo |
| 47 | そうです・ようです・～がします | ✅ Completo |
| 48 | Verbos causativos | ✅ Completo |
| 49 | 尊敬語 | ✅ Completo |
| 50 | 謙譲語 | ✅ Completo |
| Revisão Geral | Quadro-resumo de tudo | ✅ Completo |
| Exercícios Finais | 50 questões (nível N4/N3) | ✅ Completo |

## Estrutura do projeto

```
.
├── index.html          → página inicial (Introdução)
├── cap45.html … cap50.html
├── revisao.html
├── exercicios.html
├── css/
│   └── style.css        → todo o design do site (cores, tabelas, cards, responsivo)
├── js/
│   └── main.js           → menu lateral + interações (mostrar/ocultar gabarito)
└── README.md
```

Cada capítulo é um arquivo `.html` independente e autocontido. Isso significa que **atualizar ou corrigir um capítulo não afeta os outros** — basta editar o arquivo correspondente.

### Como o menu lateral funciona

O menu lateral **não** está copiado em cada página. Ele é gerado automaticamente pelo `js/main.js`, a partir de uma lista (`NAV_ITEMS`) no topo do arquivo. Para adicionar, renomear ou reordenar uma página no menu, edite só essa lista — todas as páginas atualizam sozinhas, porque todas carregam o mesmo `main.js`.

## Rodando localmente

Não precisa de servidor nem de instalação. Basta abrir `index.html` no navegador (duplo clique ou "Abrir com..."). Como não há nenhuma chamada `fetch()` a arquivos externos, funciona até sem internet — só as fontes do Google Fonts (usadas para deixar o japonês mais bonito) precisam de conexão; sem internet, o site cai automaticamente para fontes do sistema.

## Publicando

### GitHub Pages (mais simples, já que o código já vai pro GitHub)
1. Suba esta pasta para um repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em "Source", selecione a branch (geralmente `main`) e a pasta `/ (root)`.
4. Salve — o site fica no ar em `https://seu-usuario.github.io/nome-do-repositorio/`.

### Vercel
1. Importe o repositório em [vercel.com/new](https://vercel.com/new).
2. Quando perguntar o "Framework Preset", deixe como **Other** — não há build.
3. Deploy. Pronto.

### Netlify Drop (sem GitHub, só para testar rápido)
Arraste a pasta inteira para [app.netlify.com/drop](https://app.netlify.com/drop) — gera um link público na hora, sem conta.

## Adicionando um novo capítulo no futuro

1. Copie a estrutura de `cap46.html` (head + `<nav id="sidebar"></nav>` + `<main>...</main>` + `<script src="js/main.js">`).
2. Escreva o conteúdo do capítulo dentro de `<main><section class="content-section active">...</section></main>`, seguindo os mesmos componentes já usados (`.card`, `.example`, `.warn-box`, `.gabarito`, etc. — veja `css/style.css` para a lista completa de classes disponíveis).
3. Adicione a página na lista `NAV_ITEMS` em `js/main.js`.
