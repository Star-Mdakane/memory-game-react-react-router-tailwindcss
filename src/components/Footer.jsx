import MultiPlayer from "./MultiPlayer"
import SinglePlayer from "./SinglePlayer"

const Footer = ({ players }) => {
    console.log(players);

    return (
        <footer className="w-82 md:w-172">
            {players.length > 1 ? <MultiPlayer players={players} /> : <SinglePlayer players={players} />}
        </footer>
    )
}

export default Footer;