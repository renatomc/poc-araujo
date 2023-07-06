import { AxiosError } from 'axios'
import { api } from './api'
import { TemplateResponseData } from './types/templateResponseType'
import { ErrorData } from './types/responseErrorType'
import { toast } from 'react-toastify'
import { QuestionResponseData } from './types/questionResponseType'

export async function getTemplateOptions(): Promise<TemplateResponseData[]> {
  const url = 'templates?name=araujo&version=1'
  try {
    const response = await api.get<TemplateResponseData[]>(url)
    return response.data
  } catch (errors) {
    const error = errors as AxiosError | ErrorData
    if (error?.message) {
      toast.error(error.message)
    } else {
      toast.error(
        'Ocorreu um erro interno na aplicação, tente novamente dentro de alguns minutos',
      )
    }
  }

  return []
}

export async function getProductDetails(
  prompt: string,
): Promise<QuestionResponseData> {
  const url = 'questions'
  const body = {
    response_type: 'json',
    prompt,
  }
  try {
    const response = await api.post<QuestionResponseData>(url, body)
    return response.data
  } catch (errors) {
    const error = errors as AxiosError | ErrorData
    if (error?.message) {
      toast.error(error.message)
    } else {
      toast.error(
        'Ocorreu um erro interno na aplicação, tente novamente dentro de alguns minutos',
      )
    }
  }
  return {} as QuestionResponseData
}
