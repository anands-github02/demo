export default function fetchData(setData){
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log('error', error));
}