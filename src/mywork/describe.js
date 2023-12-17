import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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
            </Card>
        </div>
    );
}
export default Describe;