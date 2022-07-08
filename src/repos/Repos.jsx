import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Navigation from "../nav/Navigation";


export default function Repos() {

    const {name} = useParams();
    const [repos,setRepos] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        fetch(`https://api.github.com/users/${name}/repos?per_page=100`)
        .then(res=>{
            if(res.ok)
                return res.json();
            throw new Error('Cannot get user from github')
        })
        .then(data=>{
            setRepos(data)
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

    if(!repos || !repos.length){
        return (
            <>
                <Navigation />
                <h1>User: <span className="text-muted" style={{fontSize:"1em"}}>{name}</span></h1>
                <h2>This user has 0 repositories on github</h2>
            </>
        );
    }

    return (
        <Container>
            <h1>User: <Link to={`/users/${name}`} className="link" style={{fontSize:"1em"}}>@{name}</Link></h1>
            <Navigation />

            <Table striped="columns" bordered hover responsive>
            <thead>
                <tr>
                    <th>Name <i className="fas fa-arrow-up-right-from-square fa-fw fa-lg"></i></th>
                    <th>Description</th>
                    <th>Language</th>
                    <th>Modified</th>
                </tr>
            </thead>
            <tbody>
                {
                    repos.map(repo=>{
                        return  (
                            <tr key={repo.id}>
                                <td><a className="link" href={repo.html_url}>{repo.name}</a></td>
                                <td>{repo.description}</td>
                                <td>{repo.language}</td>
                                <td>{repo.pushed_at.replace(/T|:\d\dZ/g,' ')}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
        
        </Container>
    );
}