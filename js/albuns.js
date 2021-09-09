var albumsPage = 0
async function carregarAlbums() {
    var url = `https://jsonplaceholder.typicode.com/albums?_start=${albumsPage}&_limit=5`
    var response = await fetch(url)
    var albums = await response.json()
    albums.forEach(async (album) => {
        var urlImages = `https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_start=0&_limit=4`
        var response = await fetch(urlImages)
        var images = await response.json()
        imagesHtml = ''

        images.forEach((image) => {
            imagesHtml += `<div class="images"><img src="${image.thumbnailUrl}"></img></div>`
        })
        
        $(".albums").append(`<li class="album"><div class="title"><div class="titleName"><strong>${album.title}</strong></div></div>${imagesHtml}</li>`)
    })
}


carregarAlbums()

function carregarMais() {
    albumsPage += 5
    carregarAlbums()
}