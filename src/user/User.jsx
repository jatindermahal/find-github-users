import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container,Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navigation from "../nav/Navigation";

import './user.css'

export default function User() {

    const {name} = useParams();
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        fetch(`https://api.github.com/users/${name}`)
        .then(res=>{
            if(res.ok)
                return res.json();
            throw new Error('Cannot get user from github')
        })
        .then(data=>{
            setUser(data)
        })
        .catch(err=>console.error(err))
        .finally(()=>setLoading(false))
    },[name])

    if(loading){
        return(
            <Spinner className="spinner" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    if(!user){
        return (
            <>
                <Navigation />
                <h1>User: <span className="text-muted" style={{fontSize:"1em"}}>{name}</span></h1>
                <h2>.<br /><br />.<br /><br /> .<br /><br /><br />Not Found</h2>
            </>
        );
    }

    return (
        <Container className="container-custom">
            <h1>User: <span className="text-muted" style={{fontSize:"1em"}}>{name}</span></h1>
            <Navigation />

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.avatar_url} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                    ({<a className="link" href={user.html_url}>@{user.login} <i className="fas fa-arrow-up-right-from-square fa-fw fa-sm"></i></a>})
                    <br /> <br />
                    {user.bio}
                    </Card.Text>
                    <Card.Footer>
                        <Card.Link className="link" as={Link} to={`/users/${name}/repos`}>Repositories</Card.Link>
                    </Card.Footer>

                </Card.Body>
            </Card>
        </Container>
    );
}