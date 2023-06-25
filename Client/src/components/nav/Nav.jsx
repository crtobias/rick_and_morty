import "./Nav.css"
import SearchBar from '../searchbar/SearchBar';
import { Link } from 'react-router-dom';


export default function Nav({onSearch}){



    return (
        <nav class="navb" >
            
            <Link to="/home"><button id="i" class="but" >
               Home
            </button></Link>

            
            {/* <Link to="/about"><button class="but" >
               About
            </button></Link> */}

            <Link to="/favorite"><button id="d" class="but" >
               Favorite
            </button></Link>
            <ul>
            <SearchBar onSearch={onSearch} />
            </ul>

        </nav>
    );
}