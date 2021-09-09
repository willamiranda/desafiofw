var postPage = 0

async function carregarPosts() {
    var url = `https://jsonplaceholder.typicode.com/posts?_start=${postPage}&_limit=5`
    var response = await fetch(url)
    var posts = await response.json()
    posts.forEach((post) => {
        $(".posts").append(`<li class="post"><div class="title"><div class="titleName"><strong>${post.title}</strong></div></div><p>${post.body}</p></li>`)
    })
}

carregarPosts()

function carregarMais() {
    postPage += 5
    carregarPosts()
}