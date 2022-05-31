const getRequest = async (url: string, headers?: any) => {
  const res = await fetch(url, {headers: headers, mode: 'cors'});
  const resBbody = await res.json();

  return resBbody;
};

export default getRequest;
