import {Container, ListGroup} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import Navigation from '../nav/Navigation'

import './home.css'

export default function Home() {

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const search = document.getElementById("search-bar");
        const warn = document.querySelector(".text-muted")
        if(search.value)
            navigate(`/users/${search.value}`)
        warn.removeAttribute('hidden');
        search.style.border = "2px solid red";
        
    }

    return (
        <Container className='container-custom'>
            <h1>Home</h1><br />
            <form className="d-flex" role="search">
                <input className="form-control me-2" id="search-bar" type="search" placeholder="Search Users" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>Search</button> 
            </form>
                <span className="text-muted" hidden>Field is required</span>
            <Navigation />
            <ListGroup id='list-parent'>
                <ListGroup.Item className="li-head">Users</ListGroup.Item>
                <ListGroup.Item><Link to="/users/jatindermahal" className="link">Jatinder Mahal </Link><span className='text-muted'>(Me)</span></ListGroup.Item>
                <ListGroup.Item><Link to="/users/npm" className="link">NPM</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/users/facebook" className="link">Facebook</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/users/react-bootstrap" className="link">React Bootstrap</Link></ListGroup.Item>
            </ListGroup>

            <ListGroup id='list-parent'>
                <ListGroup.Item className="li-head">Repositories</ListGroup.Item>
                <ListGroup.Item><Link to="/users/jatindermahal/repos" className="link">Jatinder Mahal</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/users/npm/repos" className="link">NPM</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/users/facebook/repos" className="link">Facebook</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/users/react-bootstrap/repos" className="link">React Bootstrap</Link></ListGroup.Item>
            </ListGroup>
        </Container>
    )

}