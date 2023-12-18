import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import axios from 'axios';

function Describe(props)
{

    return (
        <div>
            <Card>
                <Card.Header>{props.myItem.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myItem.label}></img>
                        <footer>
                            {props.myItem.price}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={'/adjust/'+props.myItem._id} className="btn btn-secondary">Edit</Link>
                <Button variant="danger" onClick={(e) => {
                    e.preventDefault();
                    axios.delete('http://localhost:5000/api/items/' + props.myItem._id)
                    .then((res)  => {
                        let reload = props.Reload();
                    })
                    .catch(); 
                }}>Remove Item</Button>
                <br></br>
                <br></br>
            </Card>
        </div>
    );
}
export default Describe;