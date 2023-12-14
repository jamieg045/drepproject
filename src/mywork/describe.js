import Card from 'react-bootstrap/Card';

function Describe(props)
{

    return (
        <div>
            <Card>
                <Card.Header>{props.myItem.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myItem.thumbnailUrl}></img>
                        <footer>
                            {props.myItem.authors}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Describe;