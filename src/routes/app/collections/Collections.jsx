import React, { useEffect, useState } from "react";
import { StyledCollections } from "./styles";
import { returnCollections } from "../../../mockData";
import { Divider } from "antd";
import { Table } from "antd";

const Collections = () => {
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
    const collections = returnCollections();

    setTableData(collections);

    console.log(collections);
  });
  return (
    <StyledCollections>
      <h1>Collections</h1>
      <Divider />
      <Table columns={columns} dataSource={tableData} bordered />
    </StyledCollections>
  );
};

export default Collections;
