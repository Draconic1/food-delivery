import {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";

import authHeader from "../services/auth-header";

const Component = () => {
    const apiBase = useSelector((state) => state.toolkit.apiBase);

    const [name, setName] = useState("");
    const [food_type, setFood_type] = useState([]);

    const find = () => {
        axios.get(`${apiBase}/food/?name=${encodeURIComponent(name)}`, {headers: authHeader()}).then((resp) => {
            setFood_type(resp.data);
        });
    };

    return (
        <>
            <Row style={{margin:20}}>
                <Form.Group className="mb-3">
                    <Form.Label>Ищете что-то конкретное? Введите название блюда!
                        <Form.Control
                            type="text"
                            placeholder="Название категории"
                            value={name}
                            onChange={(e) => setName(e.target.value)}></Form.Control>
                    </Form.Label>
                    <Button variant="warning" type="submit" onClick={find}>
                        Найти
                    </Button>
                </Form.Group>
            </Row>


            <h5>Результаты поиска</h5>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Выбрать</th>
                </tr>
                </thead>
                <tbody>
                {food_type.length > 0 &&
                    food_type.map((x) => {
                        return (
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td>
                                    <Button
                                        variant="outline-warning"
                                        as={Link}
                                        to={`food/${x.food_type_id}`}
                                    >
                                        Перейти
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                {!food_type.length && (
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </>
    );
};

export default Component;
