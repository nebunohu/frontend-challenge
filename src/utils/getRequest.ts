const getRequest = async (url: string, headers?: any) => {
  const res = await fetch(url, {headers: headers, mode: 'cors'});
  const body = await res.json();

  return body;
};

export default getRequest;
