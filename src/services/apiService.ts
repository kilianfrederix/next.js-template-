// apiService.ts
export async function fetchAPIData(endpoint: string, accessToken: string) {
  const response = await fetch(`http://localhost:6060/api/${endpoint}`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchPublicAPIData(endpoint: string) {
  const response = await fetch(`http://localhost:6060/api/${endpoint}`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json'
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}