import { useState } from "react";
import Nav from "react-bootstrap/Nav";

import Food from "./admin/food2";
import Orders from "./admin/orders";
import Food_Type from "./admin/food_type";

const Component = () => {
  const [selectedTab, setSelectedTab] = useState("Food");

  const handleChange = (eventKey) => {
    setSelectedTab(eventKey);
  };

  return (
    <>
      <h2>Интерфейс администратора</h2>
      <Nav variant="tabs" defaultActiveKey="/home" onSelect={handleChange}>
        <Nav.Item>
          <Nav.Link eventKey="Food_Type" active={selectedTab === "Food_Type"}>
            Категория
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Food" active={selectedTab === "Food"}>
            Еда
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Orders" active={selectedTab === "Orders"}>
            Заказы
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {selectedTab === "Food_Type" && <Food_Type />}
      {selectedTab === "Food" && <Food />}
      {selectedTab === "Orders" && <Orders />}
    </>
  );
};

export default Component;
