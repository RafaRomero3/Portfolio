export interface Formacao {
  curso: string;
  slug: string;
  instituicao: string;
  local: string;
  inicio: string; // 'AAAA-MM'
  fim?: string;
}

export interface Idioma {
  nome: string;
  nivel: string;
}

export const formacoes: Formacao[] = [
  {
    curso: 'Bacharelado em Ciência da Computação',
    slug: 'uscs',
    instituicao: 'Universidade Municipal de São Caetano do Sul (USCS)',
    local: 'Presencial · São Caetano do Sul, SP',
    inicio: '2023-01',
    fim: '2025-12',
  },
];

export const idiomas: Idioma[] = [
  { nome: 'Português', nivel: 'Nativo' },
  { nome: 'Inglês', nivel: 'Avançado' },
];
