import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';

import {setFood_Type} from "./reducerSlice";
import authHeader from "../services/auth-header";

const Component = () => {
    const apiBase = useSelector((state) => state.toolkit.apiBase);
    const food_type = useSelector((state) => state.toolkit.food_type);
    const dispatch = useDispatch();


    useEffect(() => {
        axios.get(`${apiBase}/food_type`, {headers: authHeader()}).then((resp) => {
            dispatch(setFood_Type(resp.data));
        });
    }, [apiBase, dispatch]);

    return (
        <>
            <CardGroup style={{justifyContent:'center'}}>
                {food_type &&
                    food_type.map((x) => (
                        <Col key={x.id} md="4" xl="3" style={{padding: 10}}>
                            <Card  border="warning">
                                <Card.Img variant="top" src={`${x.image}`} style={{width: "100%", height: 200}}/>
                                <Card.Body>
                                    <Card.Text style={{textAlign:'center'}}>
                                        <h4>{x.name}</h4>
                                        <Button
                                            variant="warning"
                                            as={Link}
                                            to={`food/${x.id}`}
                                            style={{margin:10}}
                                        >
                                            Перейти
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </CardGroup>
            {!food_type && (
                <>
                    <h3>Упс! Что-то пусто :(</h3>
                    <p>Если вы администратор - добавьте меню!</p>
                </>
            )}
        </>
    );
};

export default Component;
