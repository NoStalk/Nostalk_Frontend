import React, { useMemo } from "react";
import "../App.css";
import { Avatar } from "@mui/material";
import ProfileCards from "../components/ProfileCards";
import { Button } from "@mui/material";
import { Columns, MockData } from "./../data/websitedata";
import { useTable } from "react-table";
import DoughnutChart from "./../components/DoughnutChart";
import { useAppDispatch } from "../hooks/reduxHooks";
import { logOutUser } from "../features/userDataSlice";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  type rowdata = {
    platform: number;
    Name: string;
    url: string;
    Solved: number;
    Contest: number;
    Rating: number;
    Submissions: number;
  };
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MockData, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const [, , , logout] = useAuth();
  const navigate = useNavigate();


  return (
    <div className="profile">
      <div className="top-panel">
        <h1>NOSTALK</h1>
        <div
          className="top-right"
          style={{
            width: "20%",
            margin: "0rem 4rem 0rem 0rem",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Avatar alt="Remy Sharp" src="./logo192.png" />
          <h3 style={{ margin: "0.5rem 3rem 0rem 1rem" }}>HI, ZEUS</h3>
          <Button onClick={() => {

            logout();
            navigate("/");

          }}
            variant="outlined"
            color="error">
            Logout
          </Button>
        </div>
      </div>
      <div className="card-panel">
        <ProfileCards toptext={"ZEUS"} bottomtext={"India"} country={true} />
        <ProfileCards
          toptext={"Acceptance"}
          bottomtext={"69%"}
          country={false}
        />
        <ProfileCards
          toptext={"Streak"}
          bottomtext={"69 days"}
          country={false}
        />
        <ProfileCards
          toptext={"Questions"}
          bottomtext={"69%"}
          country={false}
        />
      </div>
      <div className="data-panel">
        <div className="data-panel-grid">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} className="table-column">
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="data-panel-chart">
          <DoughnutChart />
        </div>
      </div>
      <div className="submission-panel"></div>
      <div className="contest-panel"></div>
      <div className="activity-panel"></div>
    </div>
  );
};

export default Profile;
