// interfaces
import { Author } from "../interfaces/sharedInterfaces";


interface AuthorsComponentProps {
  authors: Author[];
}

// styles
import "../styles/components/Authors.scss";

const Authors: React.FC<AuthorsComponentProps> = ({ authors }) => {

  const telaPequena = window.innerWidth < 1200;


  return (
    <>
      <div id="painel-aut">
        {authors.slice(0, telaPequena ? 2 : 3).map((author, index) => (
          <div id="card-aut" key={index}>
            <div className="card-conteudo-aut">
              <div id="card-image-aut" key={author.name}>
                <img src={author.picture} alt={author.name} />
              </div>
              <div id="conteudo-aut">
                <div id="card-title-aut">{author.name}</div>
                <div id="card-books">{author.booksCount} livros</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Authors;
