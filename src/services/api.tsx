// chamada na api para pegar os dados do servidor

// pegar livros favoritos e autores favoritos
const fetchData = async () => {
    const response = await fetch("https://us-central1-ss-devops.cloudfunctions.net/GraphQL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
                query {
                    favoriteBooks {
                        id,
                        name,
                        cover,
                        description
                        author {
                            name
                        }
                    },
                    favoriteAuthors {
                        name,
                       booksCount,
                       picture
                        }
                   }
            `
        })
    });

    const data = await response.json();

    return data;
}


// pegar todos os livros para a biblioteca
const fetchBooks = async () => {
    const response = await fetch("https://us-central1-ss-devops.cloudfunctions.net/GraphQL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
                query {
                    allBooks {
                        id,
                        name,
                        cover,
                        description
                        author {
                            name
                        }
                    }
                   }
            `
        })
    });

    const data = await response.json();

    return data;
}

export { fetchData, fetchBooks }