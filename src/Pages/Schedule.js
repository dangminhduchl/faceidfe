import { Button, makeStyles } from "@material-ui/core";
import { MDBCard, MDBCardBody, MDBDataTableV5 } from "mdbreact";
import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import AddSchedule from "../component/AddSchedule";
import axios from "axios";
import { TablePagination } from '@material-ui/core';
const myStyle = makeStyles((theme) =>(
  {
      root :  {
                  display : "flex",
                  flexDirection : 'column',
              },
      contariner :    {
                          position : "fixed",
                          top : "0%",
                          width : "100%",
                          height : "100vh",
                          backgroundColor : "#ffca18",
                      },
      contariner1 :   {
                          position : "relative",
                          width : "90%",
                          height : "200%",
                          top : '5%',
                          left : '5%',
                      },
      header :    {
                      position : 'absolute',
                      fontSize : '50px',
                      top : '3px',
                      left : '450px',
                    
      },
  }
))
function Schedule(params) {
  const myclass = myStyle();
  const tableIcons = {
    Add: (props) => <AddSchedule />,
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  const [startErasing, SetStartErasing] = useState(true);
  function ToggleErase() {
    if (startErasing === true) SetStartErasing(false);
    else SetStartErasing(true);
  }
  const columns = [
    { field: "id", title: "ID chuyến" },
    { field: "carid", title: "ID xe" },
    { field: "departure", title: "Điểm đi" },
    { field: "destination", title: "Điểm đến" },
    { field: "startingtime", title: "Thời điểm đi" },
    { field: "arrivingtime", title: "Thòi điểm đến" },
    { field: "capacity", title: "Số chỗ/ Trọng tải" },
  ];

  const [data,setData] = useState([]);
  function handleGet()
  {
    axios.get("http://localhost:8080/schedule/get")
      .then(response => setData(response.data))
  }
  useEffect(() => {
    handleGet();
  }, [])
  function handleDeletion(Data)
  {
    var DeleteIds = [];
    Data.forEach(element => {
      DeleteIds.push(element.id)
    });
    console.log(DeleteIds);
    axios
    .delete(`http://localhost:8080/schedule/delete/${DeleteIds}`)
    .then((response) => {alert('deletion successful.');
    window.location.reload();
        
    })
  }
  const components={
    Actions: props => {
      return (props.data == null) ? (
        <AddSchedule key = {0}/> ) : ( 
        <Button key = {1}
            onClick = {() => handleDeletion(props.data)}
        >
            <DeleteIcon/>
        </Button>);
    }
  };
  return (
    <div className = {myclass.root}>
            <div className= {myclass.contariner}>
                <div
                    className = {myclass.contariner1}
                >
      
      <MaterialTable
        icons={tableIcons} 
        options={{ search: true }}
        title={"Danh sách lịch trình"}
        columns={columns}
        data={data}
        options={{
          selection: true,
          paging:true,
          pageSize:10,       // make initial page size
          emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
          pageSizeOptions:[10],   
        }}
        components={components}
      >
    </MaterialTable>
    </div>
    </div>
    </div>
  );
}

export default Schedule;
