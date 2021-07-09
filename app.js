$(() => {
    //Carousel of images_facts
    let currentImgIndex = 0
    let numOfImages = $('.images_facts').children().length - 1
    const $images = $('.images_facts').children()
    // Next Button
    $('.next').on('click', () => {
        $images.eq(currentImgIndex).css('display', 'none')
        if(currentImgIndex < numOfImages){
          currentImgIndex++
        } else {
          currentImgIndex = 0
        }
        $images.eq(currentImgIndex).css('display', 'block')
    })
    // Previous Button
    $('.previous').on('click', () => {
        $images.eq(currentImgIndex).css('display', 'none')

        if(currentImgIndex > 0){
          currentImgIndex--
        } else {
          currentImgIndex = numOfImages
        }
        $images.eq(currentImgIndex).css('display', 'block')
    })

    // Modal Content


    $(".north_america, .south_america, .europe, .africa, .asia, .australia, .antarctica").on('click', (event) => {
      event.preventDefault()
      $('ul').remove()

      const $click = $(event.currentTarget).val()
      console.log($click)

    $.ajax({
      url: "https://covid-api.mmediagroup.fr/v1/cases?continent=" + $click,
      type: "GET",

    }).then(
        (data) => {
            console.log(data)
            // Creating a loop for Dataset
            for(const dataset in data) {
              const $country = $('<ul>')
              .text(dataset)
              .addClass('countries')
              .appendTo('.country')

              const $population = $('<li>')
              .text(`Population size: ${data[dataset].All.population}`)
              .appendTo($country)

              const $confirmed = $('<li>')
              .text(`Confirmed cases: ${data[dataset].All.confirmed}`)
              .appendTo($country)

              const $recovered = $('<li>')
              .text(`Recovered: ${data[dataset].All.recovered}`)
              .appendTo($country)

              const $deaths = $('<li>')
              .text(`Deaths: ${data[dataset].All.deaths}`)
              .appendTo($country)

              const $life_expectancy = $('<li>')
              .text(`Average Life Expectancy: ${data[dataset].All.life_expectancy}`)
              .appendTo($country)

            }

        },
        () => {
            console.log('bad request')
        }
    )

    })
})
