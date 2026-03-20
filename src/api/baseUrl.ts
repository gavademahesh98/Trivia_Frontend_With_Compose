const baseUrl = (import.meta.env.DEV 
  ? 'http://localhost:3000/api' 
  : 'http://18.141.199.6:3000/api'
);

export default baseUrl;






//const baseUrl = (import.meta.env.DEV ? 'http://localhost:3000/api' : '/api')

//export default baseUrl;