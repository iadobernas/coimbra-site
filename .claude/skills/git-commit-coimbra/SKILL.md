---
name: git-commit-coimbra
description: Gerenciamento de Git para o projeto Coimbra. Use esta skill SEMPRE que o usuário pedir para fazer commit, push, salvar mudanças, publicar o site, ou subir alterações. Garante commits padronizados, push automático e deploy no Railway.
---

# Git — Projeto Coimbra

## Fluxo Padrão

Sempre que o usuário pedir para salvar, commitar ou publicar:

```bash
cd C:\Users\berna\projetos\claude-code\coimbra-site
git add .
git commit -m "tipo: descrição clara do que foi feito"
git push
```

Após o push, o Railway detecta automaticamente e republica o site em:
**https://coimbra-site-production.up.railway.app**
(aguardar 2-3 minutos para o deploy concluir)

## Prefixos de Commit

| Prefixo | Quando usar |
|---------|-------------|
| `feat:` | Nova funcionalidade ou página |
| `fix:` | Correção de bug ou erro |
| `style:` | Mudança visual, cores, layout |
| `refactor:` | Reorganização de código sem mudar comportamento |
| `content:` | Atualização de textos, preços, produtos |
| `chore:` | Configurações, dependências |

## Exemplos de Commits

```bash
# Novidades
git commit -m "feat: página de produto individual com detalhes"
git commit -m "feat: filtro por categoria no catálogo"

# Correções
git commit -m "fix: número do WhatsApp corrigido"
git commit -m "fix: endereço atualizado para Av. Brigadeiro Eduardo Gomes"
git commit -m "fix: categorias dos produtos corrigidas"

# Visual
git commit -m "style: redesign completo do hero com gradiente verde"
git commit -m "style: otimização do layout mobile"

# Conteúdo
git commit -m "content: 78 produtos reais da planilha oficial"
git commit -m "content: preços e embalagens atualizados"
```

## Verificar Status Antes de Commitar

```bash
git status          # ver arquivos modificados
git diff            # ver o que mudou em detalhes
git log --oneline   # ver histórico de commits
```

## Se Der Erro no Push

Erro de autenticação:
```bash
# Usar Personal Access Token como senha
# Username: iadobernas
# Password: ghp_... (token gerado em github.com/settings/tokens)
```

Erro de branch:
```bash
git branch -M main
git push -u origin main
```
