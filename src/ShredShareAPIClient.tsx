type RequestOptions = {
    query?: Record<string, string | number>;
    method?: string;
    headers?: Record<string, string>;
    body?: Record<string, any>;
  };
  
  type ResponseBody = {
    code: number;
    message: string;
    description: string;
  };
  
  type Response = {
    ok: boolean;
    status: number;
    body: ResponseBody | null;
  };
  
  export default class ShredShareAPI {
    private base_url: string;
  
    constructor() {
      this.base_url = 'http://127.0.0.1:5000/api';
    }
  
    private async request<T>(options: RequestOptions): Promise<T> {
      let query = new URLSearchParams(options.query || {}).toString();
      if (query !== '') {
        query = '?' + query;
      }
  
      let response: Response;
      try {
        response = await fetch(this.base_url + options.url + query, {
          method: options.method,
          headers: {
            'Content-Type': 'application/json',
            ...options.headers,
          },
          body: options.body ? JSON.stringify(options.body) : null,
        });
      } catch (error) {
        response = {
          ok: false,
          status: 500,
          body: {
            code: 500,
            message: 'The server is unresponsive',
            description: error.toString(),
          },
        };
      }
  
      return {
        ok: response.ok,
        status: response.status,
        body: response.status !== 204 ? (await response.json) : null,
      };
    }
  
    async get<T>(url: string, query?: Record<string, string | number>, options?: RequestOptions): Promise<T> {
      return this.request<T>({ method: 'GET', url, query, ...options });
    }
  
    async post(url: string, body?: Record<string, any>, options?: RequestOptions): Promise<Response> {
      return this.request({ method: 'POST', url, body, ...options });
    }
  
    async put(url: string, body?: Record<string, any>, options?: RequestOptions): Promise<Response> {
      return this.request({ method: 'PUT', url, body, ...options });
    }
  
    async delete(url: string, options?: RequestOptions): Promise<Response> {
      return this.request({ method: 'DELETE', url, ...options });
    }
  }
  