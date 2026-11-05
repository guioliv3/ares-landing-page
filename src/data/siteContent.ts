export type Category = 'Lazer' | 'Decorado' | 'Região' | 'Acessos'

export const gallery: Record<Category, { label: string; image: string }[]> = {
  Lazer: [
    { label: 'Piscina', image: '/images/pool.webp' },
    { label: 'Fitness', image: '/images/fitness.webp' },
    { label: 'Espaço kids', image: '/images/kids.webp' },
    { label: 'Espaço gourmet', image: '/images/gourmet.webp' },
    { label: 'Salão de festas', image: '/images/party.webp' },
  ],
  Decorado: [
    { label: 'Living', image: '/images/living.webp' },
    { label: 'Suíte', image: '/images/suite.webp' },
    { label: 'Sacada', image: '/images/balcony.webp' },
  ],
  'Região': [
    { label: 'Vista da região', image: '/images/region.webp' },
    { label: 'Panorama', image: '/images/region-2.webp' },
  ],
  Acessos: [
    { label: 'Acesso', image: '/images/access.webp' },
    { label: 'Hall', image: '/images/lobby.webp' },
  ],
}

export const poiLocations = [
  {
    label: 'Colinas Shopping',
    description: 'Lojas, serviços, gastronomia e lazer em um dos principais shoppings da cidade.',
    query: 'Colinas+Shopping%2C+S%C3%A3o+Jos%C3%A9+dos+Campos',
  },
  {
    label: 'Pão de Açúcar',
    description: 'Mercado para incluir as compras do dia a dia na rotina.',
    query: 'P%C3%A3o+de+A%C3%A7%C3%BAcar%2C+Parque+Residencial+Aquarius%2C+S%C3%A3o+Jos%C3%A9+dos+Campos',
  },
  {
    label: 'Oba Hortifruti',
    description: 'Frutas, verduras e itens frescos no Aquarius Open Mall.',
    query: 'Oba+Hortifruti%2C+Avenida+Comendador+Vicente+de+Paulo+Penido+373%2C+S%C3%A3o+Jos%C3%A9+dos+Campos',
  },
  {
    label: 'Praça Ulisses Guimarães',
    description: 'Um espaço ao ar livre para caminhadas, atividades e momentos em família.',
    query: 'Pra%C3%A7a+Ulisses+Guimar%C3%A3es%2C+Jardim+Aquarius%2C+S%C3%A3o+Jos%C3%A9+dos+Campos',
  },
  {
    label: 'Carrefour Aquarius',
    description: 'Mais uma opção de supermercado e serviços na região.',
    query: 'Carrefour+Jardim+Aquarius%2C+S%C3%A3o+Jos%C3%A9+dos+Campos',
  },
  {
    label: 'Parque Ribeirão Vermelho',
    description: 'Uma opção para aproveitar o ar livre na região oeste da cidade.',
    query: 'Parque+Ribeir%C3%A3o+Vermelho%2C+S%C3%A3o+Jos%C3%A9+dos+Campos',
  },
  {
    label: 'Av. Cassiano Ricardo',
    description: 'Uma das principais vias de circulação do Jardim Aquarius.',
    query: 'Avenida+Cassiano+Ricardo%2C+S%C3%A3o+Jos%C3%A9+dos+Campos',
  },
]
