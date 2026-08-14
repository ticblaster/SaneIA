export const scopeItems = [
  'Importação de arquivos CSV e Excel',
  'Validação e padronização dos dados importados',
  'Indicadores operacionais consolidados',
  'Regras estatísticas para identificação de anomalias',
  'Modelo inicial de Machine Learning (Isolation Forest)',
  'Ranking de prioridades por ligação e por setor',
  'Explicação dos fatores de cada alerta',
  'Dashboard demonstrativo de indicadores',
  'Ordens de serviço simplificadas, vinculadas aos alertas',
  'Uso de dados públicos e sintéticos nas demonstrações',
];

export const nonScopeItems = [
  'Esgotamento sanitário',
  'Sensores IoT e telemetria em tempo real',
  'Aplicativo móvel nativo',
  'Cobrança e faturamento de usuários',
  'Previsão definitiva de rompimentos de rede',
  'Integração automática com todos os sistemas legados',
  'Geração de relatórios regulatórios completos',
  'Uso de dados pessoais não anonimizados',
  'Substituição da decisão técnica das equipes de operação',
];

export const audienceCards = [
  { title: 'Pequenos municípios', description: 'Prefeituras e departamentos responsáveis pela gestão do abastecimento de água.' },
  { title: 'Serviços Autônomos de Água e Esgoto (SAAE)', description: 'Autarquias municipais dedicadas à operação do sistema de água, com escopo inicial em abastecimento.' },
  { title: 'Autarquias municipais', description: 'Estruturas públicas com responsabilidade técnica sobre a operação de água.' },
  { title: 'Companhias e prestadores locais', description: 'Empresas públicas ou privadas que operam sistemas de abastecimento em municípios de menor porte.' },
  { title: 'Equipes de operação e manutenção', description: 'Profissionais responsáveis pela execução de inspeções e reparos em campo.' },
  { title: 'Gestores de perdas e eficiência', description: 'Responsáveis por indicadores, metas e priorização de investimentos operacionais.' },
];

export const problemEvidenceCards = [
  'Vazamentos e extravasamentos',
  'Falhas operacionais',
  'Erros de medição',
  'Consumos não autorizados',
  'Inconsistências cadastrais',
  'Informações ausentes ou incompletas',
];

export const problemHypothesisCards = [
  'Dados dispersos em planilhas e sistemas legados',
  'Dificuldade para identificar regiões críticas',
  'Priorização manual de inspeções',
  'Consumos anormais não detectados a tempo',
  'Ordens de serviço desconectadas das análises',
  'Baixa capacidade analítica de pequenos operadores',
];

export const solutionCapabilities = [
  { title: 'Importação de planilhas', description: 'Upload de arquivos CSV e Excel com leituras, cadastro e ocorrências.' },
  { title: 'Tratamento e padronização', description: 'Validação de campos, tratamento de dados ausentes e normalização de unidades.' },
  { title: 'Detecção de anomalias', description: 'Regras estatísticas e modelo de Machine Learning para identificar padrões fora do esperado.' },
  { title: 'Geração de score de prioridade', description: 'Classificação explicável das ligações e setores que mais merecem atenção.' },
  { title: 'Acompanhamento de ordens de serviço', description: 'Vínculo entre alertas gerados e ações operacionais de campo.' },
];

export const actors = [
  { role: 'Gestor', description: 'Acompanha indicadores, prioridades e regiões críticas para apoiar decisões estratégicas.' },
  { role: 'Analista', description: 'Importa dados, revisa inconsistências e avalia os alertas gerados pelo sistema.' },
  { role: 'Equipe de campo', description: 'Recebe ordens de serviço, realiza inspeções e registra os resultados obtidos.' },
  { role: 'Administrador', description: 'Gerencia usuários, parâmetros e configurações da plataforma.' },
];

export const hypothesesToValidate = [
  'Quais dados os operadores realmente possuem',
  'Em quais formatos esses dados estão disponíveis',
  'Qual granularidade de leitura está disponível',
  'Como as perdas são classificadas hoje',
  'Como as inspeções são priorizadas atualmente',
  'Quais integrações seriam necessárias no futuro',
  'Quais indicadores geram valor percebido para o operador',
  'Se há interesse em realizar um piloto controlado',
  'Quais restrições de segurança e privacidade existem',
];

export const validationSteps = [
  { label: 'Entrevistas exploratórias com potenciais clientes', done: true },
  { label: 'Levantamento dos dados disponíveis', done: false },
  { label: 'Ajuste do escopo preliminar', done: true },
  { label: 'Construção do MVP demonstrativo', done: true },
  { label: 'Teste com dados sintéticos', done: true },
  { label: 'Avaliação com profissionais do setor', done: false },
  { label: 'Possível piloto controlado', done: false },
  { label: 'Evolução do modelo de negócio', done: false },
];

export const nextValidationHypothesis =
  'Uma hipótese inicial é priorizar trechos ou regiões com maior probabilidade de recorrência de vazamentos utilizando histórico de serviços, idade/material da rede e pressão hidráulica.';

export const businessModelItems = [
  'Modelo SaaS por assinatura',
  'Cobrança proporcional ao porte da operação',
  'Implantação e configuração inicial',
  'Suporte e capacitação das equipes',
  'Projetos piloto controlados',
  'Integrações específicas sob demanda',
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
  { phase: 'Fase 1', title: 'Validação do problema', description: 'Entrevistas exploratórias e levantamento de hipóteses junto a potenciais clientes.' },
  { phase: 'Fase 2', title: 'MVP com dados sintéticos e públicos', description: 'Evolução do protótipo visual para um MVP funcional com dados públicos e sintéticos.' },
  { phase: 'Fase 3', title: 'Avaliação com profissionais do setor', description: 'Testes de usabilidade e aderência com gestores e equipes técnicas.' },
  { phase: 'Fase 4', title: 'Piloto com dados reais anonimizados', description: 'Validação controlada em ambiente real, sujeita a acordos específicos.' },
  { phase: 'Fase 5', title: 'Integrações e expansão comercial', description: 'Ampliação de funcionalidades e modelo comercial conforme aprendizados.' },
  { phase: 'Fase futura', title: 'SaneIA Esgoto', description: 'Extensão da proposta para sistemas de esgotamento sanitário.' },
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

export const pipelineExtraction = ['Upload CSV', 'Upload Excel', 'Importação manual', 'Futuras integrações'];

export const pipelineValidation = [
  'Checagem de campos',
  'Dados ausentes',
  'Duplicidades',
  'Inconsistências',
  'Normalização de unidades',
  'Score de confiabilidade dos dados',
];

export const pipelineTransformation = ['Cálculo de consumo', 'Médias históricas', 'Variações', 'Sazonalidade', 'Agregação por setor'];

export const pipelineIntelligence = [
  'Regras estatísticas',
  'Isolation Forest',
  'Detecção de outliers',
  'Análise de recorrência',
  'Comparação com histórico',
  'Criticidade operacional',
  'Prioridade de investigação',
  'Impacto econômico potencial',
];

export const pipelineOutputs = ['Dashboard', 'Alertas', 'Ranking', 'Regiões críticas', 'Recomendações', 'Ordens de serviço'];

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
