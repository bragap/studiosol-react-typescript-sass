// styles
import "../styles/components/Library.scss";

// hooks
import { useEffect, useState } from "react";

// graphql
import { useQuery } from "react-query";

// api
import { fetchBooks } from "../services/api";

// react router dom
import { Link } from "react-router-dom";

// interface
import { Book} from "../interfaces/sharedInterfaces";


const Library = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [books, setBooks] = useState<Book[]>([]);

  const { data: fetchedAllBooks, isLoading, isError } = useQuery('graphqlData', fetchBooks);

  useEffect(() => {
    if (fetchedAllBooks) {
      const { favoriteBooks } = fetchedAllBooks.data;

      setBooks(favoriteBooks as Book[]);
    }
  }, [fetchedAllBooks]);

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Ocorreu um erro!</p>;

  return <>
  <div id="container-down">
    <section id="title-biblioteca">
      <p>Biblioteca</p>
    </section>
    <section id="nav-biblioteca">
      <ul>
        <li className={"active"}>Todos</li>
        <li>Romance</li>
        <li>Aventura</li>
        <li>Comédia</li>
      </ul>
    </section>

    <section id="painel-biblioteca">
      {books?.map((book, index) => (
        <div id="book" key={index}>
          <div className="book-image">
            <img src={book.cover} alt={book.name} />
          </div>
          <div className="book-description">
              <Link to={`/book/${book.id}`} onClick={handleScrollToTop}>
                <p id="book-name-bi">{book.name}</p>
              </Link>

            <p>{book.author.name}</p>
          </div>
        </div>
      ))}

    </section>
    </div>

  </>
}

export default Library
