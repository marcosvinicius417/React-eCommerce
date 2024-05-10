import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import {
  ExternalRequest,
  ExternalRequestConfig
} from './ExternalConfigTypes'
import { ErrorLogin } from '../models/AuthSlice';
import toast from 'react-hot-toast';

export class AxiosService {

  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://teste.grupoimagetech.com.br/api'
    });

    this.instance.interceptors.request.use((config) => {
      const token = sessionStorage.getItem('token')

      if(token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    })

    this.instance.interceptors.response.use((response) => {

      if(response.status === 401) {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("token");

        window.location.reload();
      }

      return response
    })
  }

  async get({
    url,
    params,
    headers,
    validateStatus,
  }: ExternalRequest) {

    try {
      const config = this.getConfig({
        headers,
        validateStatus
      })
      return await this.instance.get(url, {
        ...config,
        params
      })
    } catch (error) {
      this.handleError(error)
      return null
    }
  }

  async post({
    url,
    body,
    headers,
    validateStatus,
  }: ExternalRequest) {
    try {
      const config = this.getConfig({
        headers,    
        validateStatus
      })
    
      return await this.instance.post(url, body, config)
    } catch (error) {
      this.handleError(error)
      return null
    }
  }

  async put({
    url,
    body,
    headers,
    validateStatus,
  }: ExternalRequest) {
    try {
      const config = this.getConfig({
        headers,
        validateStatus,
      })
  
      return await this.instance.put(url, body, config)
    } catch (error) {
      this.handleError(error)
      return null
    }
  }

  async delete({
    url,
    headers,
    validateStatus,
  }: ExternalRequest) {

    try {
      const config = this.getConfig({
        headers,
        validateStatus,
      })
  
      return await this.instance.delete(url, config)
    } catch (error) {
      this.handleError(error)
      return null
    }
  }

  private getConfig({
    headers,
    validateStatus,
  }: ExternalRequestConfig) {
    const config = {
      headers,
    } as AxiosRequestConfig

    if (validateStatus) {
      config.validateStatus = validateStatus
    }

    return config
  }

  private handleError(error: unknown) {
    const axiosError = error as AxiosError
    const data = axiosError.response.data as ErrorLogin
    const message = data.message

    if(typeof message === 'string') {
      toast.error(message, {position: 'top-center'})
    } else {
      toast.error(message[0], {position: 'top-center'})
    }
  }
}

