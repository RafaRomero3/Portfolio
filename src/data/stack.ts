export interface GrupoStack {
  nome: string;
  itens: string[];
}

export const stack: GrupoStack[] = [
  { nome: 'Linguagens', itens: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { nome: 'Frameworks', itens: ['Node.js', 'NestJS', 'Express', 'React'] },
  { nome: 'Bancos de dados & ORMs', itens: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Sequelize'] },
  { nome: 'APIs & autenticação', itens: ['REST', 'JWT', 'OAuth 2.0'] },
  { nome: 'Ferramentas', itens: ['Docker', 'Git', 'GitHub', 'CI/CD', 'RabbitMQ'] },
];
