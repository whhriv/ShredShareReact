const base: string = 'https://kekambas-132-api.onrender.com/api';

const apiClientNoAuth = () => {
  return {
    get: async (url: string) => {
      const response = await fetch(base + url);
      return handleResponse(response);
    },
    post: async (url: string, data: any) => {
      const response = await fetch(base + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    put: async (url: string, data: any) => {
      const response = await fetch(base + url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    delete: async (url: string) => {
      const response = await fetch(base + url, {
        method: 'DELETE',
      });
      return handleResponse(response);
    },
  };
};

const apiClientBasicAuth = (username: string, password: string) => {
  return {
    get: async (url: string) => {
      const response = await fetch(base + url, {
        headers: {
          Authorization: 'Basic ' + btoa(`${username}:${password}`),
        },
      });
      return handleResponse(response);
    },
    post: async (url: string, data: any) => {
      const response = await fetch(base + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa(`${username}:${password}`),
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    put: async (url: string, data: any) => {
      const response = await fetch(base + url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa(`${username}:${password}`),
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    delete: async (url: string) => {
      const response = await fetch(base + url, {
        method: 'DELETE',
        headers: {
          Authorization: 'Basic ' + btoa(`${username}:${password}`),
        },
      });
      return handleResponse(response);
    },
  };
};

const apiClientTokenAuth = (token: string) => {
  return {
    get: async (url: string) => {
      const response = await fetch(base + url, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      return handleResponse(response);
    },
    post: async (url: string, data: any) => {
      const response = await fetch(base + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    put: async (url: string, data: any) => {
      const response = await fetch(base + url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
    delete: async (url: string) => {
      const response = await fetch(base + url, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      return handleResponse(response);
    },
  };
};

async function handleResponse(response: Response): Promise<any> {
  if (response.ok) {
    return response.json();
  } else {
    throw await response.json();
  }
}

export { apiClientNoAuth, apiClientBasicAuth, apiClientTokenAuth };