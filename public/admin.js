async function main(){
    let books = await fetch('http://localhost:3001/listBooks')
    let booksJSON = await books.json()

    booksJSON.forEach(updatedBook)
}



 function updatedBook(book){

    let root = document.querySelector('#root')

    let div = document.createElement('div')
    div.textContent = book.title

    let newQuantity = document.createElement('input')
    newQuantity.value = book.quantity

    let submit = document.createElement('button')
    submit.textContent = 'Save'

    submit.addEventListener('click', function()  {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: newQuantity.value
            })
        })
    })

    div.append(newQuantity, submit)

    root.append(div)

}

main()