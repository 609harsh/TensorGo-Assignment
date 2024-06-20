import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Table } from "antd";

const Dashboard = () => {
  const columns = [
    {
      title: "Invoice Number",
      dataIndex: "invoiceNumber",
      key: "index",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "name",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "date",
    },
    {
      title: "Amount Due",
      dataIndex: "amountDue",
      key: "amount",
    },
    {
      title: "Email Notification",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() =>
            sendNotification(
              record.amountDue,
              record.customerName,
              record.dueDate
            )
          }
        >
          Send
        </Button>
      ),
    },
  ];

  const dataSource = [
    {
      id: "1",
      invoiceNumber: "INV-2023-001",
      customerName: "ABC Company",
      dueDate: "2024-06-15",
      amountDue: 1200.0,
    },
    {
      id: "2",
      invoiceNumber: "INV-2023-002",
      customerName: "XYZ Corporation",
      dueDate: "2024-06-20",
      amountDue: 3500.0,
    },
    {
      id: "3",
      invoiceNumber: "INV-2023-003",
      customerName: "Smith Enterprises",
      dueDate: "2024-06-25",
      amountDue: 800.0,
    },
    {
      id: "4",
      invoiceNumber: "INV-2023-004",
      customerName: "Johnson Ltd",
      dueDate: "2024-06-30",
      amountDue: 2000.0,
    },
    {
      id: "5",
      invoiceNumber: "INV-2023-005",
      customerName: "Global Solutions",
      dueDate: "2024-06-15",
      amountDue: 1000.0,
    },
    {
      id: "6",
      invoiceNumber: "INV-2023-006",
      customerName: "Skyline Industries",
      dueDate: "2024-06-18",
      amountDue: 1600.0,
    },
    {
      id: "7",
      invoiceNumber: "INV-2023-007",
      customerName: "Starlight Corporation",
      dueDate: "2024-06-22",
      amountDue: 900.0,
    },
    {
      id: "8",
      invoiceNumber: "INV-2023-008",
      customerName: "Redwood Enterprises",
      dueDate: "2024-06-28",
      amountDue: 2300.0,
    },
    {
      id: "9",
      invoiceNumber: "INV-2023-009",
      customerName: "Bluewave Technologies",
      dueDate: "2024-06-15",
      amountDue: 1100.0,
    },
    {
      id: "10",
      invoiceNumber: "INV-2023-010",
      customerName: "Sunrise Solutions",
      dueDate: "2024-06-17",
      amountDue: 1400.0,
    },
    {
      id: "11",
      invoiceNumber: "INV-2023-011",
      customerName: "Peak Performance",
      dueDate: "2024-06-19",
      amountDue: 750.0,
    },
    {
      id: "12",
      invoiceNumber: "INV-2023-012",
      customerName: "Greenfield Partners",
      dueDate: "2024-06-23",
      amountDue: 2100.0,
    },
    {
      id: "13",
      invoiceNumber: "INV-2023-013",
      customerName: "Silverline Solutions",
      dueDate: "2024-06-26",
      amountDue: 1950.0,
    },
    {
      id: "14",
      invoiceNumber: "INV-2023-014",
      customerName: "Golden Gate Ltd",
      dueDate: "2024-06-30",
      amountDue: 3000.0,
    },
    {
      id: "15",
      invoiceNumber: "INV-2023-015",
      customerName: "Oceanic Enterprises",
      dueDate: "2024-06-15",
      amountDue: 1600.0,
    },
    {
      id: "16",
      invoiceNumber: "INV-2023-016",
      customerName: "Techtron Inc",
      dueDate: "2024-06-21",
      amountDue: 1200.0,
    },
    {
      id: "17",
      invoiceNumber: "INV-2023-017",
      customerName: "Quantum Dynamics",
      dueDate: "2024-06-24",
      amountDue: 850.0,
    },
    {
      id: "18",
      invoiceNumber: "INV-2023-018",
      customerName: "Swift Solutions",
      dueDate: "2024-06-27",
      amountDue: 1750.0,
    },
    {
      id: "19",
      invoiceNumber: "INV-2023-019",
      customerName: "Stellar Systems",
      dueDate: "2024-06-29",
      amountDue: 2400.0,
    },
    {
      id: "20",
      invoiceNumber: "INV-2023-020",
      customerName: "Nebula Holdings",
      dueDate: "2024-06-15",
      amountDue: 1300.0,
    },
  ];
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState(false);
  const sendNotification = async (amount, name, dueDate) => {
    console.log(amount, name);
    const response = await axios.post(
      "http://localhost:3001/zapier/send",
      {
        amount,
        name,
        dueDate,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    setAlert(true);
    if (response.data.success) {
      setAlertMsg(true);
    } else {
      setAlertMsg(false);
    }
  };
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3001/login/sucess", {
        withCredentials: true,
      });

      console.log("response", response);
    } catch (error) {
      navigate("*");
    }
  };
  const onClose = () => {
    setAlert(false);
    setAlertMsg(false);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div style={{ textAlign: "center", margin: "10rem" }}>
      <Table dataSource={dataSource} columns={columns} />
      {alert && (
        <Alert
          message={alertMsg ? "Email Sent Succesfully" : "Email Not Sent"}
          type={alertMsg ? "success" : "error"}
          closable
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default Dashboard;
