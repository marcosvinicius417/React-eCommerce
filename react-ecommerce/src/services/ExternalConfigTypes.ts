/* eslint-disable @typescript-eslint/no-explicit-any */

export type ExternalRequest = {
  url: string
  body?: any
  params?: any
  headers?: any
  validateStatus?: (status: number) => boolean
}

export type ExternalRequestConfig = Omit<
  ExternalRequest,
  'url' | 'body' | 'params'
>
