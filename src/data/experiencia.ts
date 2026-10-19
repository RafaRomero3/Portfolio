export interface Experiencia {
  empresa: string;
  cargo: string;
  local?: string;
  inicio: string; // 'AAAA-MM'
  fim?: string; // sem fim = emprego atual
  conquistas: string[];
  tecnologias: string[];
}

export const experiencias: Experiencia[] = [
  {
    empresa: 'MobileMed',
    cargo: 'Desenvolvedor Back-end',
    local: 'Híbrido · São Bernardo do Campo, SP',
    inicio: '2025-06',
    conquistas: [
      'Desenvolvi uma API assíncrona de relatórios customizados em NestJS, com processamento via fila, geração dinâmica de queries, armazenamento em nuvem e notificação por webhook, do desenvolvimento à entrega em produção.',
      'Construção e manutenção de APIs REST com autenticação via JWT e OAuth.',
      'Criação e manutenção de pipelines de CI/CD, automatizando build, testes e deploy.',
    ],
    tecnologias: ['TypeScript', 'NestJS', 'Sequelize', 'MySQL', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    empresa: 'Grana Tech - Crédito Popular',
    cargo: 'Estágio de Desenvolvedor',
    local: 'Híbrido · São Paulo, SP',
    inicio: '2024-10',
    fim: '2025-06',
    conquistas: [
      'Apoio na criação de interfaces responsivas com React e TypeScript.',
      'Colaboração em APIs com Node.js, Express, Prisma e PostgreSQL, com contato inicial com arquitetura BFF e mensageria assíncrona via RabbitMQ.',
      'Testes manuais de QA para validar funcionalidades, identificar bugs e garantir a estabilidade das entregas.',
    ],
    tecnologias: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'RabbitMQ'],
  },
  {
    empresa: 'Mazzaferro Pesca',
    cargo: 'Estagiário de TI',
    local: 'Híbrido · Diadema, SP',
    inicio: '2024-04',
    fim: '2024-10',
    conquistas: [
      'Coleta, inserção e validação de dados em sistema ERP, garantindo integridade e padronização.',
      'Apoio à equipe do projeto na resolução de problemas e atualização de informações.',
    ],
    tecnologias: ['ERP'],
  },
  {
    empresa: 'Formula 1',
    cargo: 'Vendas e Tradução Freelancer',
    inicio: '2022-11',
    fim: '2022-11',
    conquistas: ['Tradução e atendimento ao público internacional.'],
    tecnologias: [],
  },
];
