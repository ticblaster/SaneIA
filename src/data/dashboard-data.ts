// Todos os valores deste arquivo são fictícios e sintéticos, usados apenas para fins
// de demonstração visual do painel. Não representam operações, clientes ou municípios reais.

export const kpiData = [
  { label: 'Ligações analisadas', value: '12.480', hint: 'base cadastral sintética' },
  { label: 'Anomalias identificadas', value: '437', hint: 'no período simulado' },
  { label: 'Casos de alta prioridade', value: '86', hint: 'requerem atenção imediata' },
  { label: 'Setores críticos', value: '5', hint: 'concentram maior variação' },
  { label: 'Volume potencialmente anormal', value: '18.760 m³', hint: 'estimativa demonstrativa' },
  { label: 'Ordens de serviço abertas', value: '73', hint: 'geradas a partir dos alertas' },
] as const;

export const lossEvolutionData = [
  { month: 'Jan', perdas: 41.2, meta: 38 },
  { month: 'Fev', perdas: 40.8, meta: 38 },
  { month: 'Mar', perdas: 40.5, meta: 37.5 },
  { month: 'Abr', perdas: 39.9, meta: 37.5 },
  { month: 'Mai', perdas: 39.6, meta: 37 },
  { month: 'Jun', perdas: 39.1, meta: 37 },
  { month: 'Jul', perdas: 38.7, meta: 36.5 },
  { month: 'Ago', perdas: 38.3, meta: 36.5 },
  { month: 'Set', perdas: 37.8, meta: 36 },
  { month: 'Out', perdas: 37.4, meta: 36 },
  { month: 'Nov', perdas: 36.9, meta: 35.5 },
  { month: 'Dez', perdas: 36.3, meta: 35.5 },
] as const;

export const anomaliesByRegionData = [
  { region: 'Setor Norte', anomalias: 128 },
  { region: 'Setor Sul', anomalias: 94 },
  { region: 'Jardim Central', anomalias: 81 },
  { region: 'Região Leste', anomalias: 76 },
  { region: 'Região Oeste', anomalias: 58 },
] as const;

export const alertTypeData = [
  { type: 'Consumo muito acima da média', value: 168, color: '#2A78D6' },
  { type: 'Consumo zerado', value: 96, color: '#008300' },
  { type: 'Leitura repetida', value: 79, color: '#E87BA4' },
  { type: 'Queda abrupta', value: 58, color: '#EDA100' },
  { type: 'Possível falha de medição', value: 36, color: '#1BAF7A' },
] as const;

export const weeks = ['Sem. 1', 'Sem. 2', 'Sem. 3', 'Sem. 4'] as const;

export const heatmapData: { sector: string; values: number[] }[] = [
  { sector: 'Setor Norte', values: [62, 74, 81, 90] },
  { sector: 'Setor Sul', values: [40, 45, 58, 63] },
  { sector: 'Jardim Central', values: [51, 49, 66, 70] },
  { sector: 'Região Leste', values: [35, 41, 44, 52] },
  { sector: 'Região Oeste', values: [22, 28, 31, 38] },
];

export type Priority = 'Alta' | 'Média' | 'Baixa';

export interface OccurrenceRow {
  ligacao: string;
  setor: string;
  consumoAtual: string;
  mediaHistorica: string;
  variacao: string;
  score: number;
  prioridade: Priority;
  motivo: string;
  acao: string;
}

export const occurrenceRanking: OccurrenceRow[] = [
  {
    ligacao: '004821',
    setor: 'Setor Norte',
    consumoAtual: '46 m³',
    mediaHistorica: '14 m³',
    variacao: '+230%',
    score: 96,
    prioridade: 'Alta',
    motivo: 'Consumo 230% acima da média histórica',
    acao: 'Vistoria da ligação',
  },
  {
    ligacao: '008172',
    setor: 'Jardim Central',
    consumoAtual: '9 m³',
    mediaHistorica: '9 m³',
    variacao: '0% (4 ciclos)',
    score: 74,
    prioridade: 'Média',
    motivo: 'Leitura repetida por quatro ciclos',
    acao: 'Verificar hidrômetro',
  },
  {
    ligacao: '011935',
    setor: 'Setor Sul',
    consumoAtual: '0 m³',
    mediaHistorica: '11 m³',
    variacao: '-100%',
    score: 88,
    prioridade: 'Alta',
    motivo: 'Consumo zerado por dois ciclos consecutivos',
    acao: 'Inspeção de campo',
  },
  {
    ligacao: '002247',
    setor: 'Região Leste',
    consumoAtual: '18 m³',
    mediaHistorica: '27 m³',
    variacao: '-33%',
    score: 52,
    prioridade: 'Média',
    motivo: 'Queda abrupta em relação ao histórico recente',
    acao: 'Confirmar leitura na próxima visita',
  },
  {
    ligacao: '013560',
    setor: 'Região Oeste',
    consumoAtual: '31 m³',
    mediaHistorica: '19 m³',
    variacao: '+63%',
    score: 41,
    prioridade: 'Baixa',
    motivo: 'Variação moderada, dentro de sazonalidade possível',
    acao: 'Monitorar próximo ciclo',
  },
];

export type ServiceOrderStatus = 'Pendente' | 'Em análise' | 'Em campo' | 'Resolvida' | 'Descartada';

export interface ServiceOrder {
  id: string;
  ligacao: string;
  setor: string;
  status: ServiceOrderStatus;
  prioridade: Priority;
  aberturaSimulada: string;
}

export const serviceOrders: ServiceOrder[] = [
  { id: 'OS-3301', ligacao: '004821', setor: 'Setor Norte', status: 'Em campo', prioridade: 'Alta', aberturaSimulada: '2 dias atrás' },
  { id: 'OS-3298', ligacao: '011935', setor: 'Setor Sul', status: 'Pendente', prioridade: 'Alta', aberturaSimulada: '1 dia atrás' },
  { id: 'OS-3287', ligacao: '008172', setor: 'Jardim Central', status: 'Em análise', prioridade: 'Média', aberturaSimulada: '4 dias atrás' },
  { id: 'OS-3272', ligacao: '002247', setor: 'Região Leste', status: 'Resolvida', prioridade: 'Média', aberturaSimulada: '9 dias atrás' },
  { id: 'OS-3260', ligacao: '013560', setor: 'Região Oeste', status: 'Descartada', prioridade: 'Baixa', aberturaSimulada: '12 dias atrás' },
];

export const dataReliability = {
  score: 92,
  label: 'Boa',
} as const;

export const dataQualityIssues = [
  'Registros duplicados',
  'Campos obrigatórios ausentes',
  'Coordenadas ausentes',
  'Leituras zeradas',
  'Leituras muito discrepantes',
  'Dados antigos',
  'Cobertura territorial incompleta',
] as const;

export const explainabilityFactors = [
  { factor: 'Consumo 180% acima da média', weight: 90 },
  { factor: 'Crescimento por três ciclos consecutivos', weight: 74 },
  { factor: 'Comportamento diferente de ligações semelhantes', weight: 61 },
  { factor: 'Ocorrência anterior no mesmo setor', weight: 48 },
  { factor: 'Score de anomalia elevado no modelo estatístico', weight: 40 },
] as const;
