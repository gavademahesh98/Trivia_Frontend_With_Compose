const baseUrl = (import.meta.env.DEV 
  ? 'http://localhost:3000/api' 
  : 'http://47.129.36.101:3000/api'
);

export default baseUrl;






//const baseUrl = (import.meta.env.DEV ? 'http://localhost:3000/api' : '/api')

//export default baseUrl;