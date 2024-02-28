import { Link}from "react-router-dom";


const header = () => {
    return (
        <div className="header">
            <h1>Movie-Cards</h1>
            <nav className="navbar">
            <Link to ='/' className ="Link">
                All my Movies
                </Link>
                <h1>All My Movies </h1>
            <Link to ='/' className ="Link">
                Add new Movie
                </Link>
                </nav>
        </div>
    );
};

export default header
