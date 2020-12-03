const map = L.map('mapid').setView([-23.5575515,-46.6384875], 15)

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map)

//create icon
    const icon = L.icon({
        iconUrl: "/images/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68]
    })

    let marker;

    map.on('click', (event) => {
        const lat = event.latlng.lat;
        const lgn = event.latlng.lng;

        document.querySelector('[name=lat]').value = lat;
        document.querySelector('[name=lng]').value = lgn;

        //remove icon 
        marker && map.removeLayer(marker)

        //add icon
        marker = L.marker ([lat, lgn], { icon })
        .addTo(map)
    })

    //SELECT FOTOS 
    function addPhotoField(){
        const container = document.querySelector('#images')

        const fieldsContainer = document.querySelectorAll('.new-upload')

        const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

        const input = newFieldContainer.children[0]

        if (input.value == "") {
            return
        }
        
        input.value = ""

        container.appendChild(newFieldContainer)
    }

    function deleteField(event){
        const span = event.currentTarget

        const fieldsContainer = document.querySelectorAll('.new-upload')

        if (fieldsContainer.length <= 1) {
            span.parentNode.children[0].value = ""
            return
        }

        span.parentNode.remove();
    }

    //TROCA DO SIM E NÃO 
    function toggleSelect(event){
        
        document.querySelectorAll('.button-select button')
        .forEach(function(button){
            button.classList.remove('active')
        })

        const button = event.currentTarget
        button.classList.add('active')

        const input = document.querySelector('[name="open-on-weekends"]')
        input.value = button.dataset.value
    }

    //desafio
    // function validate(event){
    //     //input value vazio
    //     const needLatAndLng = true;

    //     //validar se lat e lng estão preenchidos
    //     if (needLatAndLng) {
    //         event.preventDefault()
    //         alert('Selecione um ponto no mapa')
    //     }
    // }