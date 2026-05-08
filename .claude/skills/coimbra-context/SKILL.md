---
name: coimbra-context
description: Contexto completo do projeto do site da Coimbra Produtos de Limpeza. Use esta skill SEMPRE que o usuário mencionar o projeto Coimbra, pedir para mexer no site, criar componentes, corrigir algo, ou qualquer tarefa relacionada ao desenvolvimento do site da Coimbra. Contém stack técnica, cores, informações da empresa, estrutura de pastas e padrões do projeto.
---

# Projeto: Site Coimbra Produtos de Limpeza

## Informações da Empresa
- **Nome:** Coimbra Produtos de Limpeza
- **Razão Social:** COIMBRA INDUSTRIAL E MERCANTIL EIRELI
- **CNPJ:** 16.583.494/0001-14
- **Fundação:** 1972 (mais de 53 anos)
- **Slogan:** "Tudo para Limpeza"
- **Endereço:** Av. Brigadeiro Eduardo Gomes, 1472, Glória, Belo Horizonte – MG, CEP: 30830-340
- **Telefone:** (31) 3474-1533
- **WhatsApp:** (31) 93474-1533 → link: https://wa.me/5531934741533
- **Email:** vendas@coimbra.ind.br
- **Horário Atacado:** Segunda a Sexta, 08h às 18h
- **Horário Varejo/Loja:** Segunda a Sexta 08h às 18h | Sábado 08h às 13h
- **Instagram:** @coimbraprodutoslimpeza

## Cores Oficiais da Marca
```
Verde escuro principal: #1a6b3a
Verde muito escuro:     #0d4a24
Verde claro (fundo):    #f0f7f3
Vermelho:               #c0392b
Branco:                 #ffffff
Cinza claro (fundo):    #f9fafb
```

## Stack Técnica
- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS (sem CSS externo)
- **Fontes:** Montserrat (títulos) + Inter (texto)
- **Deploy:** Railway → https://coimbra-site-production.up.railway.app
- **Repositório:** https://github.com/iadobernas/coimbra-site

## Estrutura de Pastas
```
src/
├── app/
│   ├── layout.tsx          # Layout global com Header e Footer
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # Página 404
│   ├── icon.tsx            # Favicon
│   ├── quem-somos/
│   │   └── page.tsx
│   ├── catalogo/
│   │   ├── page.tsx        # Listagem de produtos
│   │   └── [slug]/
│   │       ├── page.tsx    # Página individual do produto
│   │       └── loading.tsx
│   └── contato/
│       └── page.tsx
├── components/
│   ├── Header.tsx          # Header com barra superior + menu
│   ├── Footer.tsx          # Footer verde 4 colunas
│   ├── HeroSection.tsx     # Hero da home (100vh, verde escuro)
│   ├── StatsSection.tsx    # +53, +50, 100%, BH·MG
│   ├── SegmentosSection.tsx # Lar / Empresas / Indústrias
│   ├── CategoriasSection.tsx # Cards de categorias
│   ├── PorQueSection.tsx   # Diferenciais (fundo verde escuro)
│   ├── CTASection.tsx      # CTA final
│   └── WhatsAppFloat.tsx   # Botão flutuante WhatsApp
└── data/
    └── produtos.ts         # 67 produtos reais com preços e embalagens
```

## Categorias de Produtos
1. Automotivo
2. Cozinha
3. Industrial
4. Limpeza e Conservação
5. Lavanderia
6. Pós Obra
7. Químicos
8. Tratamento de Piso

## Padrões do Projeto

### Componentes
- SEMPRE adicionar `'use client'` em componentes com: onClick, onChange, onMouseEnter, onMouseLeave, useState, useEffect, useRef, Intersection Observer
- Componentes puramente visuais podem ser Server Components (sem 'use client')
- Sempre TypeScript com tipagem correta

### Estilização
- Apenas Tailwind CSS — sem arquivos CSS externos
- Border radius padrão: `rounded-2xl` nos cards
- Sombras: `shadow-lg` padrão, `shadow-2xl` no hover
- Transições: `transition-all duration-300 ease-in-out`
- Mobile-first: começar pelo mobile, depois md: e lg:

### Links Externos
- Sempre com `target="_blank" rel="noopener noreferrer"`
- WhatsApp sempre: https://wa.me/5531934741533
- Mensagem padrão WhatsApp produto: `Olá! Tenho interesse no produto [NOME]. Gostaria de um orçamento.`

### Git
- Prefixos de commit: `feat:` (novo), `fix:` (correção), `refactor:` (refatoração), `style:` (visual)
- Após qualquer mudança: `git add . && git commit -m "mensagem" && git push`
- O Railway faz deploy automático após o push
