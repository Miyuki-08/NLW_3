
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', options).setView([lat, lng], 16)

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map)

//create icon
    const icon = L.icon({
        iconUrl: "/images/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2]
    })

    L
    .marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)

    // image gallery

    function selectImage(event){
        const button = event.currentTarget

        //Pegar todos os botoes
        const buttons = document.querySelectorAll(".imagens button")
        //console.log(buttons)

        //forEach == Para cada
        buttons.forEach(removeActiveClass)

        function removeActiveClass(button) {
            button.classList.remove('active')
        }

        const image = button.children[0]
        const imageContainer = document.querySelector('.orphanages-details > img')

        imageContainer.src = image.src

        button.classList.add('active')
    }