import MultiPlayerFooter from "./MultiPlayerFooter";
import SinglePlayerFooter from "./SinglePlayerFooter";

const Footer = ({ players, moves }) => {

    return (
        <footer className="w-82 md:w-172">
            {players.length > 1 ? <MultiPlayerFooter players={players} /> : <SinglePlayerFooter players={players} moves={moves} />}
        </footer>
    )
}

export default Footer;