import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button, Dialog, makeStyles } from '@material-ui/core';
import {Grid} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
const myStyle = makeStyles((theme) =>(
    {
        modal : {
                    backgroundColor : 'transparent',
                },
        addbutton :    {
                        width: '1px',
                        height: '1%vh',
                        //textAlign : 'top',
                        color : '#ffca18',
                        //backgroundColor : 'red'
                    },
        dialog:{
            
        },
        grid:
        {

        }
    }
))
function AddSchedule(props){

    const myclass = myStyle();
    const [open,setOpen] =useState(false);
    const handleOpenAdd = () => {
        setOpen(true);
    }
    const handleCloseAdd = () => {
        setOpen(false)
    }
    const [CarID, setCarID] = useState();
    const [Dpt, setDpt] = useState();
    const [Dst, setDst] = useState();
    const [DptTime, setDptTime] = useState();
    const [ArrTime, setArrTime] = useState();
    const [Cap, setCap] = useState();
      const handleCarIDChange = (event) => {
        setCarID(event.target.value);
      };
      const handleDptChange = (event) => {
        setDpt(event.target.value);
      };
      const handleDstChange = (event) => {
        setDst(event.target.value);
      };
      const handleDptTimeChange = (event) => {
        setDptTime(event.target.value);
      };
      const handleArrTimeChange = (event) => {
        setArrTime(event.target.value);
      };
      const handleCapChange = (event) => {
        setCap(event.target.value);
      };
    function handleSubmit()
    {
        //console.log({TripID, CarID, Dpt, Dst, DptTime, ArrTime, Cap});
        axios
        .post("http://localhost:8080/schedule/add", {carid:CarID, departure:Dpt, destination:Dst, startingtime:DptTime, arrivingtime:ArrTime, capacity:Cap})
        .then((response) => {
            console.log(response);
            if(response.data.status === 0)
            {
              alert("Add successful.");
              window.location.reload();
            }
            else
            {
              alert(response.data.message);
              window.location.reload();
            }
    })

        setArrTime(null);
        setCap(null);
        setCarID(null);
        setDpt(null);
        setDptTime(null);
        setDst(null);
        setOpen(false);
    }

    return (
        <div>
            <Button
                onClick = {handleOpenAdd}
            > 
                <AddIcon/>
            </Button>
            <Dialog  open={open} className = {myclass.grid}>
            <DialogTitle id="form-dialog-title">Thêm lịch trình</DialogTitle>
            <DialogContent className = {myclass.dialog}> 
                <Grid container spacing={5} >
                    <Grid item>
                    <TextField
                    display="inline"
                    InputLabelProps={{ shrink: true }}  
                    variant="outlined"
                    required
                    label="ID xe"
                    onChange = {handleCarIDChange}
                    >
                    </TextField>
                    </Grid>
                    <Grid item >
                    <TextField
                    display="inline"
                    InputLabelProps={{ shrink: true }} 
                    required
                    variant="outlined"
                    label="Số chỗ/ Trọng tải"
                    onChange = {handleCapChange}
                    >
                   </TextField>
                   </Grid>
                    <Grid item >
                    <TextField
                    InputLabelProps={{ shrink: true }}  
                    variant="outlined"
                    required
                    label="Điểm đi "
                    onChange = {handleDptChange}
                    >
                    </TextField>
                    </Grid>
                    <Grid item >
                    <TextField
                    InputLabelProps={{ shrink: true }}  
                    variant="outlined"
                    required
                    label="Thời gian đi"
                    type="datetime-local"
                    onChange = {handleDptTimeChange}
                    >
                    </TextField>
                    </Grid>
                    <Grid item >
                    <TextField
                    InputLabelProps={{ shrink: true }}  
                    FormHelperTextProps = {{shrink: false}}
                    variant="outlined"
                    required
                    label="Điểm đến"
                    onChange = {handleDstChange}
                    >
                    </TextField>
                    </Grid>

                    
                    
                    <Grid item >
                    <TextField
                    InputLabelProps={{ shrink: true }}  
                    variant="outlined"
                    required
                    label="Thời gian đến"
                    type="datetime-local"
                    onChange = {handleArrTimeChange}
                    >
                    </TextField> 
                    </Grid>
                    
                    </Grid>
                   </DialogContent>   
                   <DialogActions>
          <Button onClick={handleCloseAdd} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddSchedule;