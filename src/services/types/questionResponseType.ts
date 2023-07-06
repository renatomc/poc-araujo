type ProductResponse = {
  categoria: string
  composicao_simplificada: string
  contra_indicacao: string
  descricao: string
  descricao_detalhada: string
  ean: string
  fabricantes: string
  indicacao_de_uso: string
  marcas: string
  nome: string
}

export type QuestionResponseData = {
  response: ProductResponse
}
