const loadProducts = (produtos, idDivParents) => {
    const parentDiv = document.querySelector(idDivParents)
    produtos.forEach( produto => {

        const html = `
        <article class="lanche">
            <img src="${produto.image}" alt="${produto.title}">
            <h4>${produto.title}</h4>
            <h4>${produto.value}</h4>
            <p>${produto.description}</p>
            <button type="button" onclick="modalTrigger()">Quero este lanche</button>
        </article>
        `

        parentDiv.insertAdjacentHTML('beforeend', html)
    })
}

const modalTrigger = () => {
    const modal = document.querySelector('.modal')
    if(modal.classList.contains('hide')) {
        modal.classList.remove('hide')
    
    } else {
        modal.classList.add('hide')
    }
}

loadProducts(produtos, '#product-div')