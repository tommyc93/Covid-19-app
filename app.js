$(()=>{
    $.ajax({
        url:'https://covid-api.mmediagroup.fr/v1/cases',
        type: "GET",
        data:
        {
            confirmed: 10,
            recovered: 10,
            deaths: 10,
            population: 10,
        }
    }).then(
        (data)=>{
            console.log(data);
            for(let i = 0; i < data.length; i++) {

            }
        },
        ()=>{
            console.log('bad request');
        }
    );
})
