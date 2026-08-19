Você está trabalhando no repositório existente do hotsite **SaneIA Água**, uma aplicação React 18 + TypeScript + Vite + Tailwind CSS, publicada via GitHub Pages.

Sua tarefa é **auditar e atualizar o hotsite existente**, e não recriá-lo do zero.

## OBJETIVO

Reposicionar o SaneIA de maneira tecnicamente coerente com os aprendizados obtidos após uma primeira reunião com profissionais de uma concessionária de saneamento e com os questionamentos enviados posteriormente pela equipe técnica.

O hotsite precisa estar preparado para uma **segunda reunião técnica de validação**, demonstrando que o SaneIA:

1. não é apenas um dashboard;
2. não depende de Databricks;
3. não depende de CSV/Excel;
4. não é definido por um único algoritmo de Machine Learning;
5. funciona conceitualmente como uma **camada de inteligência operacional independente das fontes e dos sistemas de saída do cliente**;
6. pode atender tanto operadores com baixa maturidade digital quanto grandes concessionárias com arquiteturas modernas de dados;
7. pode futuramente operar em diferentes modelos de implantação, sujeitos à validação técnica e de segurança;
8. permanece um protótipo/MVP em validação, portanto não deve fazer afirmações falsas de capacidade já implementada, clientes, contratos, parceria formal ou resultados reais.

## CONTEXTO DE VALIDAÇÃO QUE DEVE ORIENTAR AS ALTERAÇÕES

Na primeira conversa com profissionais do setor, surgiram estes aprendizados:

* antes da gestão de perdas existe a gestão de serviços;
* ordens de serviço e histórico de intervenções são fontes fundamentais;
* idade e material da rede/ativos podem ser relevantes;
* pressão hidráulica e dispositivos de controle são relevantes;
* telemetria pode estar disponível;
* vazamentos confirmados e recorrência de ocorrências são sinais importantes;
* tipo de solo e intervenções externas próximas à rede podem contribuir para análises;
* dados geográficos como KML/KMZ podem ajudar a relacionar atributos aos trechos da rede;
* integração automática é preferível a importações manuais recorrentes;
* a solução não deve substituir sistemas operacionais existentes;
* resultados de campo devem retornar ao sistema e alimentar o aprendizado.

Posteriormente, a equipe técnica da concessionária explicitou que:

* o ambiente de dados deles está centralizado em uma plataforma corporativa do tipo lakehouse;
* querem entender requisitos técnicos, de integração e segurança;
* perguntaram quais mecanismos devem proteger os dados dos clientes;
* perguntaram se a IA é própria ou baseada em tecnologias existentes;
* perguntaram se seria possível executar a solução dentro do ambiente corporativo da concessionária;
* afirmaram possuir boa maturidade em dashboards;
* indicaram que a principal dor está no tratamento automatizado de uma grande base de dados para gerar **previsibilidade, identificação de perdas excessivas/anormais e potencial de produtividade operacional**.

IMPORTANTE:

Não transforme o produto em uma solução específica para essa concessionária.

Não transforme o produto em uma solução específica para Databricks.

Não exiba nome ou logotipo da concessionária.

Não exiba logotipos de fornecedores tecnológicos.

O hotsite é público e deve apresentar uma arquitetura genérica, reutilizável por diferentes operadores de saneamento.

## TESE CENTRAL DO PRODUTO

O novo posicionamento conceitual deve ser aproximadamente:

**SaneIA é uma camada de inteligência operacional para saneamento que se conecta às fontes de dados existentes do operador, trata e cruza informações operacionais, históricas, hidráulicas, geográficas e de serviços e produz sinais analíticos que apoiam previsão, detecção de anomalias, criticidade, produtividade e priorização das ações. Esses resultados podem ser consumidos pelos sistemas e dashboards que a organização já utiliza ou pela própria interface do SaneIA.**

Não copie obrigatoriamente esse texto literalmente. Use-o como princípio de produto.

## PRINCÍPIO DE ARQUITETURA

O produto deve ser apresentado como **source-agnostic e output-agnostic**.

Arquitetura conceitual:

FONTES
→ INGESTÃO E INTEGRAÇÃO
→ QUALIDADE E PREPARAÇÃO
→ ENGENHARIA DE ATRIBUTOS / TRANSFORMAÇÃO
→ INTELIGÊNCIA OPERACIONAL
→ RESULTADOS ANALÍTICOS
→ SISTEMAS DE CONSUMO

Exemplos de fontes possíveis:

* CSV/XLSX;
* bancos de dados relacionais;
* APIs;
* data lakes;
* lakehouses;
* sistemas corporativos;
* sistemas de ordens de serviço;
* telemetria;
* GIS;
* KML/KMZ/GeoJSON;
* cadastros de ativos;
* dados de pressão;
* leituras e consumo.

Não afirme que todos esses conectores já estão implementados.

Quando necessário, use textos como:

* “arquitetura prevista”;
* “conectores possíveis”;
* “capacidade a ser validada no piloto”;
* “integração sujeita à arquitetura e às políticas do operador”.

## DIFERENTES NÍVEIS DE MATURIDADE DOS CLIENTES

Deixe evidente que a arquitetura pode se adaptar a diferentes realidades.

Exemplo conceitual:

### Operação com menor maturidade digital

CSV / Excel / dados exportados
→ SaneIA
→ dashboard, relatório ou arquivo estruturado

### Operação com maior maturidade digital

APIs / bancos / data lake / lakehouse / sistemas corporativos
→ conectores seguros
→ SaneIA Intelligence Engine
→ API / sistemas existentes / BI / GIS / automações

O produto não deve tratar um cenário como superior comercialmente ao outro. São formas diferentes de integração.

## ALTERAÇÕES ESPECÍFICAS

### 1. HERO

Manter o conceito de:

“Inteligência operacional para transformar dados de saneamento em prioridades de ação.”

Refinar o texto para deixar claro que:

* o SaneIA se conecta às fontes existentes;
* gera inteligência;
* a redução de perdas é um primeiro domínio/caso de uso;
* dashboard é apenas uma das possíveis formas de consumo.

Não colocar Databricks no Hero.

Não prometer previsão comprovada.

Usar “apoiar previsibilidade”, “identificar padrões” ou formulações equivalentes enquanto não houver validação com dados reais.

### 2. PROBLEMA

Atualizar o problema.

Não centralizar a narrativa apenas em:

“dados dispersos em planilhas”.

Esse problema continua existindo para alguns operadores, mas não é universal.

Introduzir duas classes de problema:

1. baixa maturidade:

   * dados fragmentados;
   * planilhas;
   * baixa integração;
   * processos manuais;

2. alta maturidade:

   * grande volume de dados já digitalizados;
   * múltiplas fontes;
   * dificuldade de transformar o volume em conhecimento acionável;
   * necessidade de processamento automatizado;
   * correlação de sinais;
   * previsibilidade;
   * priorização e produtividade.

Tese:

**O gargalo pode estar tanto na organização dos dados quanto na capacidade de extrair inteligência deles.**

### 3. VALIDAÇÃO COM O SETOR

Atualizar `SectorValidationSection`.

Manter linguagem cuidadosa:

* reunião de validação com profissionais do setor;
* não afirmar cliente;
* não afirmar parceria formal;
* não afirmar piloto contratado.

Adicionar que a segunda rodada de diálogo técnico refinou a hipótese:

* organizações maduras podem já possuir dashboards;
* a oportunidade do SaneIA está principalmente na camada de tratamento, correlação e inteligência que antecede esses dashboards.

Preservar o aprendizado:

“antes da gestão de perdas existe a gestão de serviços”.

### 4. PÚBLICO-ALVO

Revisar os cards.

Não limitar o produto implicitamente a pequenos operadores.

Cobrir:

* SAAEs;
* autarquias;
* municípios;
* companhias estaduais/regionais;
* concessionárias privadas;
* operadores de diferentes portes;
* equipes de eficiência operacional, perdas, manutenção, analytics e gestão de serviços.

Explicar que o método de integração varia conforme a maturidade tecnológica.

### 5. SOLUÇÃO

A seção atual fala em cinco capacidades e começa por “Importação de planilhas”.

Substituir por capacidades mais gerais, aproximadamente:

1. **Conexão com fontes de dados**
2. **Qualidade e preparação**
3. **Engenharia e correlação de atributos**
4. **Inteligência operacional**
5. **Entrega e integração dos resultados**
6. opcionalmente **feedback operacional e aprendizado**

Você pode manter cinco ou passar para seis capacidades se isso melhorar a narrativa.

“Upload de planilhas” deve aparecer como uma possibilidade de ingestão, não como definição da plataforma.

### 6. PRIMEIRO MVP

Reformular `FirstMvpSection`.

Atualmente está excessivamente centrado em:

KMZ → OS/pressão/idade → score → mapa.

KMZ continua importante, mas passa a ser uma fonte geoespacial opcional.

Transformar o MVP conceitual em algo próximo de:

**Recorte operacional**
→ conjunto mínimo de fontes confiáveis
→ integração
→ tratamento
→ criação de atributos
→ modelo analítico
→ prioridade/previsibilidade/anomalia/produtividade
→ validação com especialistas e resultados de campo.

Manter geografia, OS, pressão, idade/material e KMZ como exemplos importantes para o primeiro piloto, sem apresentá-los como arquitetura obrigatória do produto.

### 7. PIPELINE

Esta é uma das alterações mais importantes.

Renomear:

**Extração**
para
**Ingestão e integração**

Retirar:

“Futuras integrações”

porque integração é parte da arquitetura alvo atual.

A nova etapa pode conter exemplos como:

* arquivos CSV/XLSX;
* APIs;
* bancos de dados;
* data lakes/lakehouses;
* sistemas corporativos;
* GIS/geodados;
* sincronização batch ou incremental.

Não afirme conectores implementados se não existem.

Revisar “Transformação” para incorporar:

* normalização;
* consolidação;
* janelas temporais;
* agregações;
* correlação entre fontes;
* engenharia de atributos;
* contexto por setor/ativo/trecho/serviço.

Revisar “Inteligência”.

RETIRAR `Isolation Forest` da narrativa institucional principal.

Substituir por algo como:

* modelos estatísticos;
* modelos de Machine Learning;
* análise temporal;
* detecção de anomalias;
* recorrência;
* modelos preditivos quando houver dados adequados;
* criticidade;
* produtividade operacional;
* priorização;
* explicabilidade.

A arquitetura não deve ser definida por um algoritmo específico.

### 8. IA: POSICIONAMENTO

Criar ou incorporar um pequeno bloco explicativo:

**“A IA do SaneIA não é um único modelo.”**

Explicar conceitualmente:

* o SaneIA pode combinar estatística, regras de domínio e modelos de Machine Learning;
* a técnica é selecionada conforme o caso de uso, volume, qualidade e disponibilidade de dados;
* modelos podem utilizar bibliotecas e tecnologias consolidadas de mercado/open source;
* o valor próprio do SaneIA está na arquitetura, pipeline de saneamento, engenharia de atributos, integração dos sinais operacionais, calibração, explicabilidade e ciclo de feedback;
* não afirmar existência de modelo proprietário treinado se isso não existe;
* não apresentar LLM como núcleo obrigatório da solução;
* se LLM for mencionado, limitar seu uso potencial a dados não estruturados ou interfaces explicativas.

### 9. PROCESSAMENTO

A expressão “tratamento instantâneo” surgiu em conversa de validação, mas NÃO prometa hard real-time.

Criar uma arquitetura flexível:

* batch;
* processamento incremental;
* micro-batch;
* near-real-time quando o caso de uso, fonte e infraestrutura justificarem.

Streaming em tempo real pode aparecer somente como possibilidade futura e sujeita a requisitos.

A frequência deve ser orientada pelo SLA e pela natureza do dado.

### 10. SAÍDAS

Modificar radicalmente a percepção da etapa “Saídas”.

Hoje o dashboard aparece primeiro.

Apresentar algo como:

**Resultados SaneIA**

* scores;
* alertas;
* previsões;
* anomalias;
* rankings;
* prioridades;
* indicadores derivados;
* recomendações explicáveis.

Depois mostrar formas de consumo:

* API;
* JSON/arquivos estruturados;
* webhooks/eventos, apenas como arquitetura possível;
* BI já utilizado pelo cliente;
* GIS/mapas;
* sistemas de gestão;
* sistemas de ordens de serviço;
* dashboard próprio do SaneIA.

O dashboard SaneIA é opcional.

### 11. DASHBOARD DEMONSTRATIVO

NÃO remover o painel existente.

Renomear conceitualmente a seção de:

“Demonstração de BI”

para algo como:

**“Uma das formas de consumir a inteligência gerada”**

ou

**“Camada demonstrativa de visualização”**.

Adicionar antes do painel uma mensagem explícita:

> O motor analítico é desacoplado da visualização. Em operações que já possuem BI ou sistemas corporativos, os resultados podem ser integrados a essas ferramentas. O painel abaixo demonstra apenas uma possível experiência de consumo.

Manter todos os avisos sobre dados sintéticos.

### 12. PRODUCT LOGIC

A seção:

“Dashboard tradicional: mostra o que aconteceu”
versus
“SaneIA: indica onde investigar”

está conceitualmente boa.

Aprimorá-la.

Evitar depreciar BI tradicional.

Usar uma comparação complementar:

**BI e sistemas existentes**
organizam e apresentam informações.

**SaneIA**
adiciona uma camada analítica para transformar dados em sinais de decisão.

Mensagem:

**SaneIA complementa o ecossistema existente, não exige substituí-lo.**

### 13. CASOS DE USO

Adicionar uma seção clara com três **casos de uso candidatos a validação**, sem afirmar resultados comprovados:

#### A. Previsibilidade operacional

Identificar regiões, trechos, ativos ou contextos com maior probabilidade de recorrência ou ocorrência futura, quando os dados históricos permitirem.

#### B. Perdas e comportamentos anormais

Identificar combinações de sinais que merecem investigação por possível anomalia ou perda acima do comportamento esperado.

#### C. Potencial de produtividade

Priorizar atividades, regiões ou grupos de ocorrências em que a atuação da equipe possa gerar maior impacto operacional.

Mostrar claramente:

**casos de uso em validação com o setor**.

### 14. ARQUITETURA DE INTEGRAÇÃO

Adicionar uma nova seção visual profissional.

Exemplo:

FONTES
Arquivos | APIs | Bancos | Lakehouse/Data Lake | Telemetria | GIS | OS

↓

CAMADA DE INTEGRAÇÃO
Conectores | credenciais controladas | validação | sincronização

↓

SANEIA INTELLIGENCE ENGINE
Preparação | atributos | modelos | explicabilidade | priorização

↓

RESULTADOS
Scores | alertas | previsão | criticidade | produtividade

↓

CONSUMO
BI | API | GIS | sistemas corporativos | dashboard SaneIA

Criar essa arquitetura usando React/Tailwind/Lucide ou SVG próprio.

Não usar logos de terceiros.

### 15. SEGURANÇA E IMPLANTAÇÃO

Criar uma nova seção:

**“Integração, segurança e implantação”**

O objetivo é responder conceitualmente às preocupações de uma organização empresarial sem afirmar capacidades que ainda não foram implementadas.

Separar visualmente:

#### Princípios de integração

* mínimo privilégio;
* preferencialmente acesso somente leitura às fontes;
* credenciais técnicas dedicadas quando aplicável;
* contratos/esquemas de dados definidos;
* sincronização controlada;
* segregação por cliente;
* rastreabilidade.

#### Segurança esperada para produção

Apresentar como requisitos arquiteturais, não como funcionalidades já implantadas:

* TLS em trânsito;
* criptografia em repouso de acordo com a infraestrutura utilizada;
* gerenciamento seguro de segredos;
* controle de acesso;
* segregação lógica;
* logs e auditoria;
* minimização dos dados;
* anonimização/pseudonimização quando aplicável;
* política de retenção;
* observância à LGPD.

Não afirmar certificações inexistentes.

Não citar ISO 27001, SOC 2 ou qualquer certificação caso não exista.

#### Opções de implantação em avaliação

Mostrar conceitualmente:

1. SaaS gerenciado pelo SaneIA;
2. ambiente isolado/dedicado;
3. implantação no ambiente controlado do cliente, quando técnica e comercialmente viável.

Não afirmar que on-premises, Kubernetes ou alguma cloud específica já está pronta.

Usar expressões como:

“arquitetura a ser definida conforme políticas de segurança e infraestrutura do operador”.

### 16. DATABRICKS

O produto NÃO pode ficar dependente de Databricks.

Se o termo aparecer no código/texto, ele deve aparecer somente como exemplo não exclusivo, preferencialmente nem isso no hotsite público.

O conceito correto é:

“data lake/lakehouse corporativo”.

A integração específica com Databricks será discutida tecnicamente com um potencial parceiro de validação, mas não define o produto.

### 17. QUALIDADE DOS DADOS

Manter e fortalecer essa seção.

Adicionar a ideia de que:

**qualidade/confiança do dado deve acompanhar o resultado analítico.**

Exemplo:

Prioridade alta + confiança alta
é diferente de
prioridade alta + dados insuficientes.

Não inventar métricas reais.

### 18. EXPLICABILIDADE

Manter.

A explicação deve ser centrada em fatores operacionais compreensíveis:

* histórico de OS;
* recorrência;
* idade/material;
* pressão;
* variação temporal;
* vazamentos confirmados;
* contexto territorial;
* sinais de telemetria, quando houver.

Não apresentar percentuais sintéticos como evidência real.

### 19. MODELO DE NEGÓCIO

O modelo atual é excessivamente centrado em SaaS por assinatura.

Transformá-lo em hipóteses comerciais modulares:

* assinatura do motor de inteligência;
* cobrança conforme porte/volume/escopo;
* implantação/configuração;
* conectores e integrações específicas;
* dashboard SaneIA como camada opcional;
* suporte/capacitação;
* piloto controlado;
* possibilidade de execução em ambiente dedicado ou do cliente;
* contratação pública quando aplicável.

Tudo deve continuar claramente marcado como hipótese comercial em validação.

### 20. ROADMAP

Atualizar o roadmap.

Uma sequência mais coerente seria:

1. problema e hipóteses iniciais;
2. protótipo sintético;
3. validação técnica com profissionais do setor;
4. definição de caso de uso e contrato mínimo de dados;
5. integração controlada com dados reais;
6. baseline estatístico/ML;
7. comparação com histórico/resultado operacional;
8. ciclo de feedback;
9. expansão de conectores e casos de uso;
10. evolução comercial.

Não precisa usar dez cards. Agrupe em fases visualmente limpas.

### 21. ESTÁGIO DO PROJETO

Atualizar para refletir:

Concluído:

* problema identificado;
* protótipo conceitual;
* dados sintéticos;
* primeira validação setorial;
* segunda rodada de questionamentos técnicos;
* refinamento da arquitetura conceitual.

Próximo:

* definir caso de uso;
* definir conjunto mínimo de dados;
* definir arquitetura de integração e segurança;
* executar piloto controlado, caso haja acordo.

Não marcar como concluído aquilo que depende da próxima reunião.

### 22. ESCOPO E NÃO ESCOPO

Revisar completamente.

Retirar da definição principal de escopo itens excessivamente específicos como:

* “Modelo inicial Isolation Forest”.

Não escopo não deve dizer genericamente:

“Integração automática com todos os sistemas legados”

de uma maneira que faça integração parecer futura.

Pode dizer:

* conectores universais para qualquer sistema;
* substituição dos sistemas corporativos existentes;
* decisões autônomas sem validação humana;
* garantia de previsão de rompimentos;
* streaming real-time obrigatório;
* IoT próprio;
* esgoto no primeiro ciclo;
* resultados comprovados antes do piloto.

### 23. TERMINOLOGIA

Preferir:

* inteligência operacional;
* priorização;
* previsibilidade;
* recorrência;
* anomalia;
* criticidade;
* produtividade operacional;
* gestão de serviços;
* integração;
* engenharia de atributos;
* explicabilidade;
* sinais analíticos;
* suporte à decisão.

Evitar:

* IA mágica;
* previsão garantida;
* detecção garantida;
* tempo real sem requisito definido;
* substituição da decisão humana.

### 24. DESIGN

Preservar a identidade visual atual:

* azul profundo;
* teal;
* fundo claro;
* cards;
* Lucide;
* Tailwind;
* aparência institucional B2B;
* responsividade.

Melhorar apenas onde necessário.

A nova arquitetura de integração deve ser uma das peças visuais mais fortes da página.

Evite excesso de texto.

Use cards curtos, diagramas e progressão visual.

Não adicionar imagens externas.

Não usar logos de Databricks, AWS, Azure, Google Cloud, da concessionária consultada ou de outros fornecedores/operadores.

### 25. ORDEM DA NARRATIVA

Reorganize `App.tsx` se necessário.

A ordem sugerida é:

1. Hero
2. Big number/contexto de perdas
3. Problema
4. Aprendizados da validação setorial
5. Para quem é
6. Nova proposta de solução
7. Casos de uso candidatos
8. Arquitetura de integração
9. Pipeline
10. Segurança e implantação
11. Primeiro piloto/MVP
12. Qualidade
13. Inteligência/explicabilidade
14. Formas de consumo
15. Dashboard demonstrativo
16. Ciclo operacional/feedback
17. Escopo/não escopo
18. Validação
19. Modelo de negócio
20. Impacto
21. Estágio/roadmap
22. Equipe/contato

Não precisa seguir exatamente essa ordem se houver justificativa de UX melhor.

## PRINCÍPIO DE HONESTIDADE

Este ponto é obrigatório.

O projeto ainda é um protótipo em validação.

Sempre diferencie:

**já implementado no hotsite/protótipo**
de
**arquitetura proposta para um piloto**
de
**capacidade futura**.

Não transformar desenhos conceituais em falsas funcionalidades existentes.

Todos os dados demonstrativos continuam sintéticos.

Não afirmar:

* integração já funcionando com concessionária;
* acesso a dados reais;
* cliente;
* contratação;
* piloto fechado;
* parceria formal;
* modelo preditivo validado;
* redução percentual comprovada;
* certificações de segurança.

## README

Atualize também o `README.md`.

Ele deve refletir o novo posicionamento:

* hotsite institucional;
* protótipo demonstrativo;
* SaneIA como camada de inteligência;
* interface desacoplada do motor analítico;
* fontes e saídas múltiplas;
* arquitetura de integração ainda conceitual;
* dados sintéticos;
* ausência atual de backend/integrações reais no hotsite estático.

## CÓDIGO

Antes de alterar:

1. audite a estrutura existente;
2. preserve componentes reutilizáveis;
3. prefira evoluir `scope-data.ts` e criar componentes bem delimitados;
4. não reescreva o projeto inteiro;
5. mantenha TypeScript estrito;
6. mantenha acessibilidade;
7. mantenha responsividade;
8. não introduza dependências sem necessidade.

Crie novos componentes apenas quando fizer sentido, por exemplo:

* `UseCasesSection.tsx`
* `IntegrationArchitectureSection.tsx`
* `SecurityDeploymentSection.tsx`
* `ConsumptionModesSection.tsx`

Nomes podem variar.

## VALIDAÇÃO FINAL OBRIGATÓRIA

Ao terminar:

1. execute `npm run lint`;
2. execute `npm run build`;
3. corrija todos os erros;
4. verifique links e âncoras;
5. revise responsividade conceitualmente em mobile/tablet/desktop;
6. procure textos antigos que contradigam o novo posicionamento;
7. procure especificamente pelas strings:

   * `Isolation Forest`
   * `Futuras integrações`
   * `Importação de planilhas`
   * `Dashboard`
   * `KMZ`
   * `tempo real`
     e confirme que o uso remanescente está coerente;
8. confirme que nenhuma capacidade futura foi apresentada como já implementada.

## GIT

Não faça push.

Não faça deploy.

Não altere remote.

Ao final, apresente:

1. resumo executivo das mudanças;
2. arquivos alterados/criados;
3. principais decisões de posicionamento;
4. resultado de lint;
5. resultado de build;
6. eventuais pontos que ainda exigem decisão humana;
7. `git diff --stat`;
8. `git status --short`.

O resultado final deve preparar o hotsite para uma conversa técnica com uma grande concessionária sem perder sua característica de produto escalável para **múltiplos operadores e diferentes arquiteturas de dados**.
