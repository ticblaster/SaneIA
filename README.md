# SaneIA Água

Hotsite institucional da proposta **SaneIA Água**: inteligência operacional para redução de
perdas e priorização de ações no abastecimento de água.

> **Aviso importante**: este projeto é um **MVP demonstrativo**. Todos os dados exibidos no
> painel de BI, gráficos, ranking de ocorrências e ordens de serviço são **sintéticos e
> fictícios**, usados apenas para ilustrar visualmente a proposta. O site não possui backend,
> banco de dados, autenticação real ou integração com sistemas externos. Não há afirmação de
> clientes, contratos, parcerias ou resultados já obtidos.

## Visão geral

O hotsite funciona simultaneamente como:

1. apresentação institucional da proposta;
2. documento de escopo preliminar;
3. protótipo visual do futuro produto;
4. material de apoio a entrevistas com potenciais clientes;
5. material de apoio à submissão ao Programa Startup UFT (Pré-Incubação);
6. demonstração de viabilidade técnica e mercadológica.

## Stack

- [Vite](https://vitejs.dev/)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (ícones)
- [Recharts](https://recharts.org/) (gráficos)
- ESLint (qualidade de código)

Aplicação estática, single page, sem React Router (navegação por âncoras) e sem backend.

## Estrutura do projeto

```
SaneIA/
  .github/workflows/deploy.yml   # publicação automática no GitHub Pages
  public/                        # favicon e estáticos
  src/
    components/
      ui/                        # componentes de interface reutilizáveis
      illustrations/              # ilustrações SVG próprias (hero, fluxo de solução, gotas)
      dashboard/                 # subcomponentes do painel de BI (gráficos, ranking, OS)
      Header.tsx, Hero.tsx, ...  # uma seção do hotsite por arquivo
    data/
      dashboard-data.ts          # dados sintéticos do painel de BI
      scope-data.ts              # escopo, não escopo, público-alvo, roadmap etc.
      team-data.ts                # equipe
    App.tsx
    main.tsx
    index.css
  index.html
  vite.config.ts
  tailwind.config.js
```

## Instalação

Pré-requisitos: Node.js 18 ou superior.

```bash
npm install
```

## Execução local

```bash
npm run dev
```

O site ficará disponível em `http://localhost:5173`.

## Lint

```bash
npm run lint
```

## Build de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/`. Para pré-visualizar o build localmente:

```bash
npm run preview
```

## Publicação no GitHub Pages

O projeto já inclui um workflow (`.github/workflows/deploy.yml`) que publica automaticamente o
site no GitHub Pages a cada push na branch `main`.

### Passo a passo

1. Crie um repositório no GitHub (por exemplo, `SaneIA`) e envie este projeto para ele:

   ```bash
   git init
   git add .
   git commit -m "Hotsite institucional SaneIA Água"
   git branch -M main
   git remote add origin https://github.com/USUARIO/SaneIA.git
   git push -u origin main
   ```

2. No GitHub, acesse **Settings → Pages** do repositório e, em **Build and deployment**,
   selecione a origem **GitHub Actions**.

3. A cada push na branch `main`, o workflow:
   - instala as dependências;
   - define automaticamente `VITE_BASE_PATH` como `/nome-do-repositorio/`, a partir do nome real
     do repositório (`GITHUB_REPOSITORY`);
   - executa `npm run build`;
   - publica o conteúdo de `dist/` no GitHub Pages.

4. Após a primeira execução bem-sucedida, o site ficará disponível em:

   ```
   https://USUARIO.github.io/SaneIA/
   ```

### Base path (`VITE_BASE_PATH`)

O `vite.config.ts` lê a variável de ambiente `VITE_BASE_PATH` para definir o caminho base dos
assets. Isso permite que o site funcione tanto localmente (`/`) quanto publicado em um
subdiretório do GitHub Pages (`/nome-do-repositorio/`).

- Em desenvolvimento (`npm run dev`) e build local sem a variável definida, o padrão é `/SaneIA/`.
- No GitHub Actions, a variável é definida automaticamente a partir do nome do repositório.
- Para gerar um build com outro caminho base manualmente:

  ```bash
  VITE_BASE_PATH=/outro-nome/ npm run build
  ```

  No PowerShell:

  ```powershell
  $env:VITE_BASE_PATH = "/outro-nome/"; npm run build
  ```

## Como alterar textos e dados

- **Textos institucionais** (títulos, descrições, cards de texto fixo): editar diretamente os
  componentes em `src/components/*.tsx`.
- **Escopo, não escopo, público-alvo, hipóteses, roadmap, atores, modelo de negócio, impactos**:
  editar `src/data/scope-data.ts`.
- **Indicadores e gráficos do painel de BI** (KPIs, evolução de perdas, anomalias por região,
  tipos de alerta, mapa de calor, ranking de ocorrências, ordens de serviço, fatores de
  explicabilidade): editar `src/data/dashboard-data.ts`.
- **Equipe**: editar `src/data/team-data.ts`.

## Como substituir os dados sintéticos

Todos os números do painel demonstrativo (`src/data/dashboard-data.ts`) são fictícios. Para
atualizá-los com dados reais no futuro (fora do escopo atual deste MVP estático):

1. Seria necessário introduzir uma camada de backend, API ou banco de dados, o que está fora do
   escopo deste hotsite estático.
2. Os arquivos de dados foram organizados isoladamente (`src/data/`) justamente para facilitar
   uma futura substituição por uma fonte dinâmica, sem exigir mudanças na camada visual.
3. Até lá, qualquer atualização de números deve manter o caráter sintético e demonstrativo,
   evitando sugerir que os dados representam clientes, contratos ou operações reais.

## Limitações atuais

- Não há backend, banco de dados, autenticação ou chamadas a APIs externas.
- O formulário de contato é demonstrativo: não envia dados a nenhum servidor.
- Os botões do painel de ordens de serviço (criar, visualizar, marcar como em campo) abrem
  apenas um modal informativo local, sem persistência.
- Os indicadores, gráficos e ranking do painel de BI usam exclusivamente dados sintéticos.
- Este é um **MVP demonstrativo** em fase de pré-incubação: o escopo, o modelo de negócio e as
  hipóteses aqui descritos estão sujeitos a validação e podem mudar significativamente.
