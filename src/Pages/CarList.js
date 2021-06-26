import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
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
import AddCarlist from "../component/AddCarlist";
import axios from "axios";
import { CenterFocusStrong } from "@material-ui/icons";
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
                            backgroundColor : "#585858",
                        },
        contariner1 :   {
                            position : "fixed",
                            width : "90%",
                            height : "100vh",
                            top : '5%',
                            left : '5%',
                            
                        },
        header :    {
                        position : 'absolute',
                        fontSize : '50px',
                        top : '3px',
                        left : '530px',
                        textAlign : 'left',
                    },
        addbutton : {
                        position : 'absolute',
                        top : '6%',
                        right : '30%',
                        borderWidth: theme.spacing(3),
                        width:  theme.spacing(3),
                        height: theme.spacing(3),
                        
                        borderRadius: theme.spacing(3),
                        
                        transform : 'scale(1.5)',
                    }
    }
))
function Schedule(params) {
  const myclass = myStyle();
  const tableIcons = {
    Add: (props) => <AddCarlist />,
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
    { field: "id", title: "ID xe" },
    { field: "license", title: "Biển số"},
    { field: "driver", title: "Lái xe" },
    { field: "brand", title: "Hãng xe" },
    { field: "manufacturedate", title: "Đời xe" },
    { field: "registerdate", title: "Ngày đăng kiểm" },
    { field: "cartype", title: "Loại xe" },
    { field: "state", title: "Trạng thái" },
  ];

  const [data,setData] = useState([]);
  function handleGet() 
  {
    axios
      .get("http://localhost:8080/carlist/get")
      .then(res => setData(res.data));
  }
  useEffect(() => {
    handleGet();
  }, []);
  function handleDeletion(Data)
  {
    var DeleteIds = [];
    Data.forEach(element => { DeleteIds.push(element.id) 
    });
    console.log(DeleteIds);
    axios
    .delete(`http://localhost:8080/carlist/delete/${DeleteIds}`)
    .then((response) => {
        alert("Delete successful.")
        window.location.reload();
    })
  }
  const components={
    Actions: props => {
      return (props.data == null) ?
            (<AddCarlist key = {0}/>)
            :
            (<Button key = {1}
                onClick = {() => handleDeletion(props.data)}
            >
                <DeleteIcon/>
            </Button>)
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
        title={"Danh sách xe"}
        columns={columns}
        textAlign = {CenterFocusStrong}
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
