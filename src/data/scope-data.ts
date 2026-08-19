export const scopeItems = [
  'Ingestão de dados a partir de arquivos (CSV/XLSX) como uma das formas possíveis de entrada',
  'Validação, padronização e score de confiabilidade dos dados importados',
  'Indicadores operacionais consolidados',
  'Modelos estatísticos e de Machine Learning para identificação de anomalias e priorização',
  'Ranking de prioridades por ligação, trecho ou setor, com explicação dos fatores considerados',
  'Dashboard demonstrativo, como uma das possíveis formas de consumo dos resultados',
  'Ordens de serviço simplificadas, vinculadas aos alertas gerados',
  'Arquitetura conceitual de integração com fontes e sistemas de consumo do operador',
  'Uso de dados públicos e sintéticos em todas as demonstrações',
];

export const nonScopeItems = [
  'Esgotamento sanitário no primeiro ciclo',
  'Conectores universais prontos para qualquer sistema legado, sem esforço de integração',
  'Substituição dos sistemas operacionais, corporativos ou de BI já usados pelo operador',
  'Decisões autônomas sem validação humana',
  'Garantia de previsão de rompimentos de rede',
  'Streaming em tempo real obrigatório como pré-requisito de funcionamento',
  'Sensores e infraestrutura de IoT próprios',
  'Aplicativo móvel nativo',
  'Cobrança e faturamento de usuários finais',
  'Uso de dados pessoais não anonimizados',
  'Resultados operacionais comprovados antes da realização de um piloto',
  'Certificações de segurança ainda não obtidas',
];

export const audienceCards = [
  { title: 'SAAEs e autarquias municipais', description: 'Serviços autônomos e estruturas públicas com responsabilidade técnica sobre a operação de água, muitas vezes com maturidade digital inicial.' },
  { title: 'Prefeituras e departamentos municipais', description: 'Órgãos responsáveis pela gestão do abastecimento em municípios de diferentes portes.' },
  { title: 'Companhias estaduais e regionais', description: 'Prestadores de maior escala, com múltiplos sistemas corporativos e grande volume de dados já digitalizados.' },
  { title: 'Concessionárias privadas', description: 'Operadores com arquiteturas de dados mais maduras, incluindo data lakes, lakehouses e plataformas corporativas.' },
  { title: 'Equipes de perdas e eficiência operacional', description: 'Responsáveis por indicadores, metas e priorização de investimentos e inspeções.' },
  { title: 'Equipes de manutenção e campo', description: 'Profissionais que executam inspeções, reparos e registram os resultados das intervenções.' },
  { title: 'Equipes de analytics e gestão de serviços', description: 'Responsáveis por tratar dados, acompanhar ordens de serviço e gerar conhecimento operacional a partir deles.' },
];

export const audienceNote =
  'A forma de integração varia conforme a maturidade tecnológica de cada operador: de planilhas exportadas até conectores com bancos de dados, APIs e plataformas corporativas. Nenhum desses caminhos é tratado como comercialmente superior ao outro.';

export const problemEvidenceCards = [
  'Vazamentos e extravasamentos',
  'Falhas operacionais',
  'Erros de medição',
  'Consumos não autorizados',
  'Inconsistências cadastrais',
  'Informações ausentes ou incompletas',
];

export const problemLowMaturity = [
  'Dados fragmentados em planilhas e sistemas legados',
  'Baixa integração entre cadastro, campo e análise',
  'Processos manuais de priorização de inspeções',
  'Dificuldade para identificar regiões ou trechos críticos',
];

export const problemHighMaturity = [
  'Grande volume de dados já digitalizados em múltiplas fontes',
  'Dificuldade de transformar esse volume em conhecimento acionável',
  'Necessidade de processamento automatizado e correlação de sinais',
  'Falta de previsibilidade, priorização e visibilidade de produtividade operacional',
];

export const problemThesis =
  'O gargalo pode estar tanto na organização dos dados quanto na capacidade de extrair inteligência deles.';

export const solutionCapabilities = [
  { title: 'Conexão com fontes de dados', description: 'Arquivos, bancos de dados, APIs, data lakes/lakehouses e sistemas corporativos do operador, conforme sua maturidade e arquitetura.' },
  { title: 'Qualidade e preparação', description: 'Validação, padronização e score de confiabilidade das informações antes da análise.' },
  { title: 'Engenharia e correlação de atributos', description: 'Cruzamento de sinais operacionais, históricos, hidráulicos, geográficos e de serviços em atributos analisáveis.' },
  { title: 'Inteligência operacional', description: 'Modelos estatísticos e de Machine Learning selecionados conforme o caso de uso, para detectar padrões, anomalias e prioridades.' },
  { title: 'Entrega e integração dos resultados', description: 'Resultados disponibilizados para os sistemas, BI ou dashboards que o operador já utiliza, ou pela interface própria do SaneIA.' },
  { title: 'Feedback operacional e aprendizado', description: 'Os resultados de campo podem retornar ao histórico e apoiar a recalibração e evolução da inteligência ao longo do tempo.' },
];

export const useCases = [
  {
    letter: 'A',
    title: 'Previsibilidade operacional',
    description: 'Identificar regiões, trechos, ativos ou contextos com maior tendência ou risco de recorrência ou ocorrência futura, quando os dados históricos permitirem.',
  },
  {
    letter: 'B',
    title: 'Perdas e comportamentos anormais',
    description: 'Identificar combinações de sinais que merecem investigação por possível anomalia ou perda acima do comportamento esperado.',
  },
  {
    letter: 'C',
    title: 'Potencial de produtividade',
    description: 'Priorizar atividades, regiões ou grupos de ocorrências em que a atuação da equipe possa gerar maior impacto operacional.',
  },
];

export const integrationSourceExamples = [
  'Arquivos CSV/XLSX',
  'APIs',
  'Bancos de dados relacionais',
  'Data lakes / lakehouses',
  'Sistemas corporativos',
  'Sistemas de ordens de serviço',
  'Telemetria',
  'GIS / KML / KMZ / GeoJSON',
];

export const integrationLayerSteps = [
  {
    title: 'Fontes',
    description: 'Arquivos, APIs, bancos, lakehouse/data lake, telemetria, GIS e ordens de serviço do operador.',
  },
  {
    title: 'Camada de integração',
    description: 'Conectores, credenciais controladas, validação de esquema e sincronização — arquitetura prevista, sujeita a validação técnica.',
  },
  {
    title: 'SaneIA Intelligence Engine',
    description: 'Preparação dos dados, engenharia de atributos, modelos analíticos, explicabilidade e priorização.',
  },
  {
    title: 'Resultados',
    description: 'Scores, alertas, previsão, criticidade e produtividade operacional.',
  },
  {
    title: 'Consumo',
    description: 'BI, API, GIS, sistemas corporativos ou o dashboard próprio do SaneIA.',
  },
];

export const maturityPathLow = {
  title: 'Operação com menor maturidade digital',
  steps: ['CSV / Excel / dados exportados', 'SaneIA', 'Dashboard, relatório ou arquivo estruturado'],
};

export const maturityPathHigh = {
  title: 'Operação com maior maturidade digital',
  steps: ['APIs / bancos / data lake / lakehouse / sistemas corporativos', 'Conectores seguros', 'SaneIA Intelligence Engine', 'API / sistemas existentes / BI / GIS / automações'],
};

export const actors = [
  { role: 'Gestor', description: 'Acompanha indicadores, prioridades e regiões críticas para apoiar decisões estratégicas.' },
  { role: 'Analista', description: 'Acompanha a qualidade dos dados, revisa inconsistências e avalia os alertas gerados pelo sistema.' },
  { role: 'Equipe de campo', description: 'Recebe ordens de serviço, realiza inspeções e registra os resultados obtidos.' },
  { role: 'Administrador', description: 'Gerencia usuários, parâmetros, integrações e configurações da plataforma.' },
];

export const hypothesesToValidate = [
  'Quais dados os operadores realmente possuem e em quais sistemas',
  'Em quais formatos e com qual granularidade esses dados estão disponíveis',
  'Como as perdas são classificadas e as inspeções priorizadas hoje',
  'Quais requisitos técnicos, de integração e segurança são exigidos pelo ambiente do operador',
  'Quais mecanismos de proteção de dados são necessários para cada arquitetura de implantação',
  'Quais indicadores geram valor percebido para o operador',
  'Se há interesse em realizar um piloto controlado, com escopo e dados mínimos definidos',
];

export const validationSteps = [
  { label: 'Entrevistas exploratórias com potenciais clientes', done: true },
  { label: 'Construção do protótipo demonstrativo', done: true },
  { label: 'Teste com dados sintéticos', done: true },
  { label: 'Primeira reunião de validação com profissionais do setor', done: true },
  { label: 'Segunda rodada de questionamentos técnicos (integração, segurança e arquitetura)', done: true },
  { label: 'Definição de caso de uso e conjunto mínimo de dados', done: false },
  { label: 'Possível piloto controlado', done: false },
  { label: 'Evolução do modelo de negócio', done: false },
];

export const nextValidationHypothesis =
  'Uma hipótese inicial é priorizar trechos ou regiões com maior tendência ou risco de recorrência de vazamentos, combinando histórico de serviços, idade/material da rede e pressão hidráulica como conjunto mínimo de dados do piloto.';

export const businessModelItems = [
  'Assinatura do motor de inteligência (SaneIA Intelligence Engine)',
  'Cobrança proporcional a porte, volume de dados ou escopo contratado',
  'Implantação e configuração inicial',
  'Conectores e integrações específicas, sob demanda',
  'Dashboard próprio do SaneIA como camada opcional',
  'Suporte e capacitação das equipes',
  'Projeto piloto controlado, com escopo e prazo definidos',
  'Execução em ambiente dedicado ou no ambiente do cliente, quando viável',
  'Possibilidade futura de contratação pública',
];

export const impactCategories = [
  {
    category: 'Econômico',
    items: [
      'Melhor alocação das equipes',
      'Priorização de inspeções',
      'Redução de retrabalho',
      'Redução de intervenções pouco produtivas',
      'Identificação mais rápida de regiões críticas',
      'Apoio à redução de água perdida',
      'Melhor utilização de orçamento operacional',
    ],
  },
  {
    category: 'Ambiental',
    items: [
      'Redução potencial do desperdício de água tratada',
      'Melhor uso de energia e recursos utilizados na produção e distribuição',
      'Apoio à sustentabilidade dos sistemas de abastecimento',
    ],
  },
  {
    category: 'Social',
    items: [
      'Maior confiabilidade do abastecimento',
      'Potencial redução de interrupções',
      'Melhor uso de recursos públicos e privados destinados à infraestrutura essencial',
    ],
  },
];

export const roadmapPhases = [
  { phase: 'Fase 1', title: 'Problema e hipóteses iniciais', description: 'Entrevistas exploratórias e levantamento de hipóteses junto a potenciais operadores.' },
  { phase: 'Fase 2', title: 'Protótipo sintético e validação setorial', description: 'Protótipo com dados públicos e sintéticos, avaliado com profissionais do setor em duas rodadas técnicas.' },
  { phase: 'Fase 3', title: 'Caso de uso e contrato mínimo de dados', description: 'Definição, junto ao operador, de um problema delimitado e do conjunto mínimo de dados necessário.' },
  { phase: 'Fase 4', title: 'Integração controlada e baseline analítico', description: 'Integração com dados reais em ambiente controlado, construção de baseline estatístico/ML e comparação com histórico operacional.' },
  { phase: 'Fase 5', title: 'Ciclo de feedback e expansão', description: 'Retorno dos resultados de campo ao sistema, expansão de conectores, casos de uso e evolução do modelo comercial.' },
  { phase: 'Fase futura', title: 'Novos domínios', description: 'Extensão da proposta para outros domínios operacionais, incluindo esgotamento sanitário, conforme aprendizados dos primeiros ciclos.' },
];

export const pipelineSources = [
  'Leituras de hidrômetros',
  'Histórico de consumo',
  'Cadastro de ligações',
  'Setores e regiões',
  'Ordens de serviço e histórico de intervenções',
  'Ocorrências de campo e vazamentos confirmados',
  'Idade e material da rede/ativos',
  'Pressão hidráulica e dispositivos de controle',
  'Tipo de solo e obras externas próximas à rede',
  'Telemetria, quando disponível',
];

export const pipelineIngestion = [
  'Arquivos CSV/XLSX',
  'APIs',
  'Bancos de dados relacionais',
  'Data lakes / lakehouses corporativos',
  'Sistemas corporativos e de ordens de serviço',
  'GIS e geodados',
  'Sincronização batch ou incremental',
];

export const pipelineValidation = [
  'Checagem de campos',
  'Dados ausentes',
  'Duplicidades',
  'Inconsistências',
  'Normalização de unidades',
  'Score de confiabilidade dos dados',
];

export const pipelineTransformation = [
  'Normalização e consolidação entre fontes',
  'Janelas temporais e agregações',
  'Correlação entre sinais de diferentes origens',
  'Engenharia de atributos',
  'Contexto por setor, ativo, trecho ou serviço',
];

export const pipelineIntelligence = [
  'Modelos estatísticos',
  'Modelos de Machine Learning',
  'Análise temporal e de recorrência',
  'Detecção de anomalias',
  'Modelos preditivos quando houver dados adequados',
  'Criticidade e produtividade operacional',
  'Priorização explicável',
];

export const pipelineOutputs = ['Scores', 'Alertas', 'Previsões', 'Anomalias', 'Rankings', 'Recomendações explicáveis'];

export const radarConceptualAttributes = [
  'Idade da rede',
  'Idade do ativo',
  'Material da tubulação',
  'Pressão hidráulica',
  'Histórico de ordens de serviço',
  'Recorrência de ocorrências',
  'Vazamentos confirmados',
  'Tipo de solo',
  'Obras externas próximas à rede',
  'Possíveis danos mecânicos',
  'Dispositivos de controle de pressão',
  'Telemetria, quando disponível',
  'Qualidade e confiabilidade dos dados',
];

export const processingModes = [
  { title: 'Batch', description: 'Processamento periódico, adequado para a maioria dos indicadores e cargas históricas.' },
  { title: 'Incremental / micro-batch', description: 'Atualizações mais frequentes, orientadas pelo SLA definido com o operador.' },
  { title: 'Near-real-time', description: 'Possível quando o caso de uso, a fonte e a infraestrutura do operador justificarem, sujeito a validação técnica.' },
  { title: 'Streaming em tempo real', description: 'Possibilidade futura, condicionada a requisitos específicos — não é premissa de funcionamento do produto.' },
];

export const consumptionResults = ['Scores', 'Alertas', 'Previsões', 'Anomalias', 'Rankings', 'Prioridades', 'Indicadores derivados', 'Recomendações explicáveis'];

export const consumptionChannels = [
  'API',
  'JSON / arquivos estruturados',
  'Webhooks e eventos (arquitetura possível)',
  'BI já utilizado pelo operador',
  'GIS e mapas',
  'Sistemas de gestão e de ordens de serviço',
  'Dashboard próprio do SaneIA (opcional)',
];

export const aiPositioningPoints = [
  'O SaneIA pode combinar estatística, regras de domínio e modelos de Machine Learning.',
  'A técnica é selecionada conforme o caso de uso, volume, qualidade e disponibilidade de dados.',
  'Os modelos podem utilizar bibliotecas e tecnologias consolidadas de mercado e open source.',
  'O valor próprio do SaneIA está na arquitetura, no pipeline de saneamento de dados, na engenharia de atributos, na integração dos sinais operacionais, na calibração, na explicabilidade e no ciclo de feedback.',
  'Se utilizados, modelos de linguagem (LLMs) têm papel auxiliar — por exemplo, em dados não estruturados ou em interfaces explicativas — e não são o núcleo da inteligência operacional.',
];

export const securityPrinciples = [
  'Mínimo privilégio de acesso',
  'Preferencialmente acesso somente leitura às fontes',
  'Credenciais técnicas dedicadas, quando aplicável',
  'Contratos e esquemas de dados definidos previamente',
  'Sincronização controlada',
  'Segregação por cliente',
  'Rastreabilidade das integrações',
];

export const securityRequirements = [
  'TLS em trânsito',
  'Criptografia em repouso, de acordo com a infraestrutura utilizada',
  'Gerenciamento seguro de segredos e credenciais',
  'Controle de acesso',
  'Segregação lógica entre clientes',
  'Logs e auditoria',
  'Minimização dos dados coletados',
  'Anonimização/pseudonimização quando aplicável',
  'Política de retenção de dados',
  'Observância à LGPD',
];

export const deploymentOptions = [
  { title: 'SaaS gerenciado pelo SaneIA', description: 'Ambiente operado pela equipe do SaneIA, com integração controlada às fontes do operador.' },
  { title: 'Ambiente isolado ou dedicado', description: 'Infraestrutura segregada para o operador, conforme requisitos de segurança e volume.' },
  { title: 'Ambiente controlado do cliente', description: 'Execução dentro da infraestrutura do operador, quando técnica e comercialmente viável.' },
];

export const deploymentNote =
  'Arquitetura de implantação a ser definida conforme as políticas de segurança e a infraestrutura de cada operador. Nenhuma das opções acima está implementada ou contratada até o momento.';
