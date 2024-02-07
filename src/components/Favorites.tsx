// styles
import "../styles/components/Favorites.scss";

// graphql
import { useQuery } from 'react-query';

// interfaces
import { Book, Author} from "../interfaces/sharedInterfaces";

// react router dom
import { Link } from "react-router-dom";

// hooks
import { useState, useEffect } from "react";

// components
import Books from "./Books";
import Authors from "./Authors";

// api
import { fetchData } from "../services/api";



const Favorites = () => {


    const [books, setBooks] = useState<Book[]>([]);
    const [authors, setAuthors] = useState<Author[]>([]);

    const { data: fetchedData } = useQuery('graphqlData', fetchData);

    useEffect(() => {
        if (fetchedData) {
            const { favoriteBooks, favoriteAuthors } = fetchedData.data;

            setBooks(favoriteBooks as Book[]);
            setAuthors(favoriteAuthors as Author[]);
        }
    }, [fetchedData]);


    return (
        <>
            <section id="menu">
                <Link to={`#`} id="books">Meus livros </Link>
                <Link to={`#`} id="emprestados">Emprestados</Link>
            </section>
            <section id="header">
                <div id="favs">
                    <p>Livros favoritos</p>
                </div>
                <div id="ver-todos">
                    <p>ver todos</p>
                </div>
            </section>

            <Books books={books} />

            

            <section id="header">
                <div className={"favs-auts"} id="favs">
                    <p>Autores favoritos</p>
                </div>
                <div id="ver-todos">
                    <p>ver todos</p>
                </div>
            </section >

            <Authors authors={authors} />
            
        </>
    );
}

export default Favorites;
