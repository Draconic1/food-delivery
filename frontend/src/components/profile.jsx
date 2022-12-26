import {useEffect} from "react";
import {Navigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Table from "react-bootstrap/Table";
import axios from "axios";

import authHeader from "../services/auth-header";

import {
    setOrders,
    setOrderStatuses,
    setFood,
} from "./reducerSlice";
import moment from "moment/moment";

const Profile = () => {
    const user = useSelector((state) => state.toolkit.user);

    const apiBase = useSelector((state) => state.toolkit.apiBase);
    const food = useSelector((state) => state.toolkit.food);
    const orders = useSelector((state) => state.toolkit.orders);
    const orderStatuses = useSelector((state) => state.toolkit.orderStatuses);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${apiBase}/orders`, {headers: authHeader()}).then((resp) => {
            dispatch(setOrders(resp.data));
        });

        axios
            .get(`${apiBase}/orders/info/statuses`, {headers: authHeader()})
            .then((resp) => {
                dispatch(setOrderStatuses(resp.data));
            });

        axios.get(`${apiBase}/food`, {headers: authHeader()}).then((resp) => {
            dispatch(setFood(resp.data));
        });
    }, [apiBase, dispatch]);

    if (!user) {
        return <Navigate to="/login"/>;
    }

    return (
        <div className="container">
            <header className="jumbotron">
                <h3><strong>{user.username}</strong></h3>
            </header>
            <p>
                <strong>Электронная почта:</strong> {user.email}
            </p>


            {orders.length > 0 &&
                food.length > 0 &&
                orderStatuses.length > 0 && (
                    <Table striped bordered hover>
                        <h3>Заказы</h3>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Статус</th>
                            <th>Блюдо</th>
                            <th>Стоимость</th>
                            <th>Создан</th>
                            <th>Оплачен</th>
                            <th>Доставлен</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.length > 0 &&
                            orders
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
                                                {food.find((el) => +el.id === x.food_id).price}р.
                                            </td>
                                            <td>{moment(x.createdAt).format("DD-MM-YYYY hh:mm:ss")}</td>
                                            {x.paid_date == null &&
                                                <td>-</td>
                                            }
                                            {x.paid_date != null &&
                                                <td>{moment(x.paid_date).format("DD-MM-YYYY hh:mm:ss")}</td>
                                            }
                                            {x.get_date == null &&
                                                <td>-</td>
                                            }

                                            {x.get_date != null &&
                                                <td>{moment(x.get_date).format("DD-MM-YYYY hh:mm:ss")}</td>
                                            }
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
        </div>
    );
};

export default Profile;
