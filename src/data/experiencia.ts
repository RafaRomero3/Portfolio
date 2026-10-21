import type { ImageMetadata } from 'astro';
import mobilemed from '../assets/logos/mobilemed.png';
import granaTech from '../assets/logos/grana-tech.png';
import mazzaferroPesca from '../assets/logos/mazzaferro-pesca.png';
import formula1 from '../assets/logos/formula-1.png';

export interface Experiencia {
  empresa: string;
  slug: string;
  cargo: string;
  logo?: ImageMetadata; // sem logo = mostra a inicial da empresa
  local?: string;
  inicio: string; // 'AAAA-MM'
  fim?: string; // sem fim = emprego atual
  conquistas: string[];
  tecnologias: string[];
}

export const experiencias: Experiencia[] = [
  {
    empresa: 'MobileMed',
    slug: 'mobilemed',
    logo: mobilemed,
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
    slug: 'grana-tech',
    logo: granaTech,
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
    slug: 'mazzaferro-pesca',
    logo: mazzaferroPesca,
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
    slug: 'formula-1',
    logo: formula1,
    cargo: 'Vendas e Tradução Freelancer',
    inicio: '2022-11',
    fim: '2022-11',
    conquistas: ['Tradução e atendimento ao público internacional.'],
    tecnologias: [],
  },
];
