// interfaces
import { Book} from "../interfaces/sharedInterfaces";

interface BooksComponentProps {
    books: Book[];
}

// react router dom
import { Link } from "react-router-dom";

// styles
import "../styles/components/Books.scss";


const Books: React.FC<BooksComponentProps> = ({ books }) => {
    const handleScrollToTop = () => {
        window.
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    const telaPequena = window.innerWidth < 1200;

    return <>
        <section id="painel">
            {books.slice(0, telaPequena ? 3 : 5).map((book, index) => (
                <div id="card" key={index}>
                    <div id="box-image">
                        <img src={book.cover} alt={book.name} />
                    </div>
                    <Link to={`/book/${book.id}`} onClick={handleScrollToTop}>
                        <p id="card-title">{book.name}</p>
                    </Link>
                    <p id="card-author">{book.author?.name}</p>
                </div>
            ))}
        </section>
    </>
}

export default Books

