---
name: produto-coimbra
description: Cadastro, edição e remoção de produtos no catálogo do site da Coimbra. Use esta skill SEMPRE que o usuário quiser adicionar um produto novo, editar um produto existente, corrigir preço, mudar categoria, atualizar embalagens, ou remover um produto do catálogo. Garante que o formato do arquivo produtos.ts seja mantido corretamente.
---

# Gerenciamento de Produtos — Coimbra

## Arquivo de Produtos
Localização: `src/data/produtos.ts`

## Estrutura de um Produto

```typescript
{
  id: 1,                                    // número sequencial único
  nome: "Nome do Produto",                  // nome oficial da empresa
  categoria: "Limpeza e Conservação",       // categoria exata (ver lista abaixo)
  slug: "nome-do-produto",                  // lowercase com hífens, sem acentos
  icone: "🧴",                             // emoji relevante
  descricao: "Descrição curta de 1 linha.", // máximo 100 caracteres
  preco: "A partir de R$ 14,00",           // menor preço disponível
  embalagens: ["2L", "5L", "20L", "50L"],  // array com todos os tamanhos
  precosPorEmbalagem: {                     // preço exato por embalagem
    "2L": "R$ 14,00",
    "5L": "R$ 31,50",
    "20L": "R$ 124,50",
    "50L": "R$ 276,00"
  },
  finalidade: "Texto descrevendo para que serve o produto.",
  beneficios: [                             // 3-4 itens
    "Benefício 1",
    "Benefício 2",
    "Benefício 3"
  ],
  indicacoes: [                             // onde/como usar
    "Indicação 1",
    "Indicação 2"
  ],
  modoDeUsar: "Texto explicando como usar o produto.",
  diluicao: "1:10 para uso geral",         // null se não aplicável
  composicao: [                             // ingredientes principais
    "Ingrediente 1",
    "Ingrediente 2"
  ],
  precaucoes: [                             // OBRIGATÓRIO para produtos químicos
    "Manter fora do alcance de crianças",
    "Em caso de contato com olhos, lavar com água"
  ],
  principioAtivo: "Nome do princípio ativo", // null se não aplicável
  imagem: null                              // null até ter foto real
}
```

## Categorias Oficiais

Use EXATAMENTE estes nomes (case-sensitive):

| Categoria | Produtos típicos |
|-----------|-----------------|
| `Automotivo` | Pneu Brill, Chassidol NC, Degras 275 Viscoso, Eletro Span |
| `Cozinha` | Detergente Clorado Solmix |
| `Industrial` | DS 100, Span AC, Span Ativado Viscoso, Span Gelatinoso, Span Solv, Querosene |
| `Limpeza e Conservação` | Span Desinfetantes, Span Cremol, Span Cloro, Solmix, Alvejam |
| `Lavanderia` | Lava Roupa Coco/Tradicional, Span Mol, Span Soft Plus, Span Perlon |
| `Pós Obra` | Concrespan, Span Limpa Vidros, Span Xispa Incolor |
| `Químicos` | Essências, Glicerina, Hidróxido de Sódio, Óleo de Eucalipto, Vaselina |
| `Tratamento de Piso` | Coimbril Super, Pasta Gelin, Span Ceras, Span Past |

## Como Gerar o Slug

Regras:
1. Tudo em minúsculas
2. Espaços viram hífens
3. Remover acentos: á→a, é→e, í→i, ó→o, ú→u, ã→a, ç→c
4. Remover caracteres especiais: / . %

Exemplos:
- "DEGRAS 275 VISCOSO" → `degras-275-viscoso`
- "SPAN DESINF. CONCENTRADO E." → `span-desinf-concentrado-e`
- "GLICERINA BI-DESTILADA" → `glicerina-bi-destilada`
- "ESSENCIA CASCATA/FLORAL ÓLEO" → `essencia-cascata-floral-oleo`

## Adicionar Produto Novo

1. Abrir `src/data/produtos.ts`
2. Encontrar o último ID e incrementar
3. Adicionar o produto seguindo a estrutura acima
4. Verificar se o slug é único
5. Salvar e fazer commit:
```bash
git add . && git commit -m "content: produto [NOME] adicionado ao catálogo" && git push
```

## Editar Produto Existente

1. Buscar pelo `nome` ou `id` no arquivo
2. Editar apenas os campos necessários
3. Manter o `id` e `slug` iguais (a menos que o nome mude)
4. Fazer commit:
```bash
git add . && git commit -m "content: produto [NOME] atualizado - [o que mudou]" && git push
```

## Remover Produto

1. Remover o objeto do array
2. NÃO renumerar os IDs dos outros produtos (evita quebrar links)
3. Fazer commit:
```bash
git add . && git commit -m "content: produto [NOME] removido do catálogo" && git push
```

## Ícones Sugeridos por Categoria

```
Automotivo:    🚗 🛞 🔧 🚙
Cozinha:       🍽️ 🧼 🫧
Industrial:    🏭 ⚙️ 🔩 🧪
Limpeza:       🧹 🪣 💧 ✨
Lavanderia:    👕 🫧 🌊
Pós Obra:      🏗️ 🪟 🧱
Químicos:      ⚗️ 🧪 💊 🌿
Tratamento:    🪣 ✨ 🏠
```
