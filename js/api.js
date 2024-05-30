function getCharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results.then(response => response.json())
    .then(data => { done(data)})
}

getCharacters(data => {
    data.results.forEach(element => {
        let newElement = document.createElement('div')

        const img = document.createElement('img')
        img.src=`${element.image}`
        img.alt=`${element.name}`

        const h2 = document.createElement('h2')
        h2.textContent=`${element.name}`

        const p = document.createElement('p')
        p.textContent=`${element.status}`

        document.body.appendChild(newElement);
        newElement.appendChild(img);
        newElement.appendChild(h2);
        newElement.appendChild(p);
    })
})