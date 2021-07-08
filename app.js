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

      const $click = $(event.currentTarget).val()

    $.ajax({
      url: "https://covid-api.mmediagroup.fr/v1/cases?continent=" + $click,
      type: "GET",
      data:
      {
         country: 'All'
      }

    }).then(
        (data) => {
            console.log(data)
            // Creating a loop for Dataset
            for(let i = 0; i < data.length; i++) {
                const $country = $('<dt>')
                .addClass('country')
                .text(data[i])
                .css("list-style", "none")
                appendTo('dl')
            }
        },
        () => {
            console.log('bad request')
        }
    )

    })
})
