import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { addFood_Type, setFood_Type } from "../reducerSlice";
import authHeader from "../../services/auth-header";

const Component = () => {
  const defNewObj = {
    name: "",
    image: "",
  };

  const [newFood_Type, setNewFood_Type] = useState(defNewObj);
  const apiBase = useSelector((state) => state.toolkit.apiBase);
  const food_type = useSelector((state) => state.toolkit.food_type);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${apiBase}/food_type`, { headers: authHeader() }).then((resp) => {
      dispatch(setFood_Type(resp.data));
    });
  }, [apiBase, dispatch]);

  const addNew = (e) => {
    e.preventDefault();

    axios.post(`${apiBase}/food_type`, newFood_Type, { headers: authHeader() }).then((resp) => {
      dispatch(addFood_Type(resp.data));
      setNewFood_Type(defNewObj);
    });
  };

  const handleChange = (e) => {
    const newFood_TypeTmp = { ...newFood_Type };

    newFood_TypeTmp[e.target.name] = e.target.value;

    setNewFood_Type(newFood_TypeTmp);
  };

  return (
    <div className="mb-5 p-2 border border-top-0 rounded-bottom">
      <h3>Список категорий</h3>

      {food_type && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Название</th>
              <th>Изображение</th>
            </tr>
          </thead>
          <tbody>
            {food_type.length > 0 &&
              food_type.map((x) => {
                return (
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.image}</td>
                  </tr>
                );
              })}
            {!food_type.length && (
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}

      <h3>Добавить новую категорию</h3>

      <Form onSubmit={addNew}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Название</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Название"
                value={newFood_Type.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Изображение</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="Изображение"
                value={newFood_Type.image}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Добавить
        </Button>
      </Form>
    </div>
  );
};

export default Component;
