// styles
import '../styles/components/BookScreen.scss';

// interface
import { Book } from '../interfaces/sharedInterfaces';

// react router dom
import { useParams } from 'react-router-dom';

// react query
import { useQuery } from 'react-query';

// api
import { fetchData } from '../services/api';

// components
import { useEffect, useState } from 'react';

// framer motion
import { motion } from 'framer-motion';


interface BookScreenParams {
  id?: string;
  [key: string]: string | undefined;
}

const BookScreen: React.FC = () => {

  // pegar o id do livro na url
  const { id } = useParams<BookScreenParams>();

  const bookId = id || '';

  const [books, setBooks] = useState<Book[]>([]);


  const { data: fetchedData, isLoading, isError } = useQuery('book', fetchData);

  useEffect(() => {
    if (fetchedData) {
      const { favoriteBooks } = fetchedData.data;

      setBooks(favoriteBooks as Book[]);
    }
  }, [fetchedData]);

  
  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Ocorreu um erro!</p>;

  if (!id) return <p>ID do livro não fornecido!</p>;

  const book = books.find((book: any) => String(book.id) === bookId);

  if (!book) return <p>Livro não encontrado!</p>;



  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >


      <section id="container-book" >
        <section id="box-esquerda" >
          <img src={book.cover} alt={book.name} />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
            <p>Favoritar</p>
          </div>
          <div >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
            </svg><p>Compartilhar</p>
          </div>
          <div >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
            <p>Salvar em uma lista</p>
          </div>
        </section>

        <section id="box-direita">
          <div className="titulo" >
            <h2>{book.name}</h2> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div>
          <p id="book-author">{book.author.name}</p>
          <p id="book-description">{book.description}</p>
          <h2>Sobre o Autor</h2>
          <p>O autor {book.author.name} ... </p>
          <p id="final">Não achei qual seria a solicitação na query para buscar informações detalhadas sobre o autor =/ </p>
        </section>

      </section>
    </motion.div>
  );
};

export default BookScreen;