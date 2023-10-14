import React, { useEffect, useState } from "react";
import "./TableComponent.css";

const TableComponent = ({ data }) => {
  const headers = [
    {
      name: "Sno",
      key: "id",
    },
    {
      name: "Profile Pic",
      key: "image",
    },
    {
      name: "First Name",
      key: "firstName",
    },
    {
      name: "Last Name",
      key: "lastName",
    },
    {
      name: "Gender",
      key: "gender",
    },
    {
      name: "Email",
      key: "email",
    },
    {
      name: "Username",
      key: "username",
    },
    {
      name: "Ip",
      key: "ip",
    },
    {
      name: "University",
      key: "university",
    },
  ];

  return (
    <table className="styled-table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key}>{header.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={`${header}-${index}`}>
                {header.key === "image" ? (
                  <img src={item[header.key]} width="30px" alt="" />
                ) : (
                  item[header.key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
