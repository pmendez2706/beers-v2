var beersJson = 'https://raw.githubusercontent.com/pablz/logourl/master/beers.json',
assetsJson = 'https://raw.githubusercontent.com/pablz/logourl/master/assets.json'
assetsArr = [],
beersArr = [];

(()=>{
    getBeers()
})();

function getBeers(){
    //consumir un json de modo asíncrono con fetch api
    fetch(beersJson)
    .then(response =>{
            return response.json();//el método json() extrae el cuerpo del recurso solicitado
    })
    .then(data => {//data son los datos del response
        beersArr.push(data);
    })
    .catch(error => {//captura si hubo un error en la petición
        console.log(error);
    })
    .finally(()=>{//fynally nos permite hacer algo si todo salió bien
        console.log('Llegó la birra!'); 
    })
}





