import React, { useEffect, useState } from "react";
import { StyledNotebooks } from "./styles";
import { returnNotebooks } from "../../../mockData";
import { Divider } from "antd";
import { Table } from "antd";

const Notebooks = () => {
  const [tableData, setTableData] = useState([]);
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Updated",
      dataIndex: "dateUpdated",
      key: "dateUpdated",
    },
    {
      title: "Date Created",
      dataIndex: "dateCreated",
      key: "dateCreated",
    },
  ];

  useEffect(() => {
    const notebooks = returnNotebooks();

    setTableData(notebooks);

    console.log(notebooks);
  });

  return (
    <StyledNotebooks>
      <h1>Notebooks</h1>
      <Divider />
      <Table columns={columns} dataSource={tableData} bordered />
    </StyledNotebooks>
  );
};

export default Notebooks;
