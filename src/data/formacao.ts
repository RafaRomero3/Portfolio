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
  sigla: string;
  nivel: string;
  proficiencia: number; // de 1 a 5, como no currículo
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
  { nome: 'Português', sigla: 'PT', nivel: 'Nativo', proficiencia: 5 },
  { nome: 'Inglês', sigla: 'EN', nivel: 'Avançado', proficiencia: 4 },
];
