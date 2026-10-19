const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

function formatarData(data: string) {
  const [ano, mes] = data.split('-');
  return `${meses[Number(mes) - 1]} ${ano}`;
}

export function formatarPeriodo(inicio: string, fim?: string) {
  if (!fim) return `${formatarData(inicio)} — atual`;
  if (fim === inicio) return formatarData(inicio);
  return `${formatarData(inicio)} — ${formatarData(fim)}`;
}
