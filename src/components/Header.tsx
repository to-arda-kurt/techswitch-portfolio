import Navbar from "./Navbar";
import pp from '../assets/pp.jpeg'

const Header = () => {
    return (
        <>
            <div className="Header">
                <img src={pp} alt="Arda Kurt Profile Photo" />
                <div className="Header-Details">
                    <h1 className="title">Arda Kurt</h1>
                    <h4>used to be designer and photographer, now, passionate software developer.</h4>
                </div>
            </div>
            <Navbar />
        </>
    )
}
export default Header;