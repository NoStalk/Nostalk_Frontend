import React from "react";
import "../App.css";
import { Avatar } from "@mui/material";
import ProfileCards from "../components/ProfileCards";
import { Button } from "@mui/material";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { dataGrid, data } from './../data/websitedata';
import DoughnutChart from './../components/DoughnutChart';

const Profile = () => {
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
          <Button variant="outlined" color="error">
            Logout
          </Button>
        </div>
      </div>
      <div className="card-panel">
        <ProfileCards
          toptext={"ZEUS"}
          bottomtext={"India"}
          country={true}
      />
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
        <div className="data-panel-grid" >
          <GridComponent id="gridcomp" dataSource={data} rowHeight={60} gridLines="Vertical" >
            <ColumnsDirective>
              {dataGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
          </GridComponent>
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
