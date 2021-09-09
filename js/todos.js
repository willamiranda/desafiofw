var todoPage = 0

async function carregartodos() {
    var url = `https://jsonplaceholder.typicode.com/todos?_start=${todoPage}&_limit=5`
    var response = await fetch(url)
    var todos = await response.json()
    todos.forEach((todo) => {
        $(".todos").append(`<li class="todo"><div class="title"><div class="titleName"><strong>${todo.title}</strong></div></div><img height="24" src="${todo.completed ? 'img/checked.svg' : 'img/unchecked.svg'}"></img></li>`)
    })
}

carregartodos()

function carregarMais() {
    todoPage += 5
    carregartodos()
}