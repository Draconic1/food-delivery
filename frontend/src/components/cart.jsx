import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import moment from "moment";

import authHeader from "../services/auth-header";

import {
  setOrders,
  setOrderStatuses,
  setFood,
  setFood_Type,
  deleteOrder,
  updateOrder,
} from "./reducerSlice";
import {Modal} from "react-bootstrap";

const Component = () => {
  const apiBase = useSelector((state) => state.toolkit.apiBase);
  const food = useSelector((state) => state.toolkit.food);
  const food_type = useSelector((state) => state.toolkit.food_type);
  const orders = useSelector((state) => state.toolkit.orders);
  const orderStatuses = useSelector((state) => state.toolkit.orderStatuses);
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const [userCard, setUserCard] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    axios.get(`${apiBase}/orders`, { headers: authHeader() }).then((resp) => {
      dispatch(setOrders(resp.data));
    });

    axios
      .get(`${apiBase}/orders/info/statuses`, { headers: authHeader() })
      .then((resp) => {
        dispatch(setOrderStatuses(resp.data));
      });

    axios.get(`${apiBase}/food`, { headers: authHeader() }).then((resp) => {
      dispatch(setFood(resp.data));
    });

    axios.get(`${apiBase}/food_type`, { headers: authHeader() }).then((resp) => {
      dispatch(setFood_Type(resp.data));
    });
  }, [apiBase, dispatch]);

  const deleteCart = (id) => {
    axios
      .delete(`${apiBase}/orders/${id}`, { headers: authHeader() })
      .then((resp) => {
        dispatch(deleteOrder(id));
      });
  };


  const payCart = () => {
    const ordersInCart = orders.filter((x) => x.status === 1);

    for (const oic of ordersInCart) {
      const id = oic.id;
      const tmp = { ...oic };
      tmp.status = 2;
      tmp.paid_date = Date.now();
      tmp.address = address;
      tmp.card = userCard;
      axios
        .put(`${apiBase}/orders/${id}`, tmp, { headers: authHeader() })
        .then((resp) => {
          dispatch(updateOrder(tmp));
          handleClose();
        });
    }
  };

  return (
    <div className="mb-5">
      <h3>Корзина</h3>

      {orders.length > 0 &&
        food.length > 0 &&
        orderStatuses.length > 0 &&
        food_type.length > 0 && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Статус</th>
                <th>Блюдо</th>
                <th>Стоимость</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 &&
                orders
                  .filter((x) => x.status === 1)
                  .map((x) => {

                    return (
                      <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>
                          {orderStatuses &&
                            orderStatuses.find((e) => +e.val === +x.status)
                              ?.name}
                        </td>
                        <td>
                          {food.find((el) => +el.id === x.food_id).name}
                        </td>
                        <td>
                          {food.find((el) => +el.id === x.food_id).price}
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            style={{
                              color: "transparent",
                              textShadow: "0 0 0 white",
                            }}
                            onClick={() => deleteCart(x.id)}
                          >
                            &#10006;
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              {!orders.length && (
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )}
            </tbody>
          </Table>
        )}

      <Form.Group className="mb-3">
        <Button variant="primary" onClick={() => handleShow()}>
          Оформить заказ
        </Button>
      </Form.Group>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Оформить заказ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Адрес доставки</Form.Label>
          <Form.Control
              type="text"
              name="address"
              placeholder="Введите адрес"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
          />
          <Form.Label>Номер карты</Form.Label>
          <Form.Control
              type="number"
              name="card"
              placeholder="Введите номер карты"
              value={userCard}
              onChange={(e) => setUserCard(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={payCart}>
            Оплатить
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Component;
