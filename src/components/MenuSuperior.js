import { Link } from "react-router-dom";

const MenuSuperior = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand">Controle de livros</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Livros</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/inclusao" className="nav-link">Inclusão</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resumo" className="nav-link">Resumo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MenuSuperior;