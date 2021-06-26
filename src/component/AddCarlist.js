import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button, Dialog, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
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
                        position : 'relative',
                        fontSize : '50px',
                        top : '35px',
                        left : '-640px',
                        Color : 'lightgrey'
                //textAlign : 'top',
                    },
        form :  {
                    minHeight : '1%',
                    marginLeft: "30%",
                    minWidth: '25%',
                    textAlign : 'center',
                },
    }
))
function AddCarlist(props){

    const myclass = myStyle();
    const [open,setOpen] =useState(false);
    const [license,setLicense] = useState();
    const [driver,setDriver] = useState();
    const [brand,setBrand] = useState();
    const [manufacturedate,setManufacturedate] = useState();
    const [registerdate,setRegisterdate] = useState();
    const [cartype, setCartype] = useState();
    const [state, setState] = useState();

    const handleOpenAdd = () => {
        setOpen(true);
    }
    const handleCloseAdd = () => {
        setOpen(false)
    }
    const handleLicense = (event) => {
        setLicense(event.target.value);
    }
    const handleDriver = (event) => {
        setDriver(event.target.value);
    }
    const handleBrand = (event) => {
        setBrand(event.target.value);
    }
    const handleManufacturedate = (event) => {
        setManufacturedate(event.target.value);
    }
    const handleRegisterdate = (event) => {
        setRegisterdate(event.target.value);
    }
    const handleCartype = (event) => {
        setCartype(event.target.value);
    }
    const handleState = (event) => {
        setState(event.target.value);
    }
    const handleSubmit = () =>
    {
        var data = {
            license :license,
            driver : driver,
            brand : brand,
            manufacturedate : manufacturedate,
            registerdate : registerdate,
            cartype : cartype,
            state : state

        };
        axios   .post("http://localhost:8080/carlist/add",data)
                .then(res =>    {
                                    console.log(res);
                                    if(res.data.status === 0)
                                    {
                                        alert("Add successful.");
                                        window.location.reload();
                                    }
                                    else
                                    {
                                        alert(res.data.message);
                                        window.location.reload();
                                    }
                                })
        setLicense(null);
        setDriver(null);
        setBrand(null);
        setManufacturedate(null);
        setRegisterdate(null);
        setCartype(null);
        setState(null);
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
                                label="Biển số xe"
                                onChange = {handleLicense}
                            >
                            </TextField>
                        </Grid>
                        <Grid item >
                            <TextField
                                display="inline"
                                InputLabelProps={{ shrink: true }} 
                                required
                                variant="outlined"
                                label="Lái Xe"
                                onChange = {handleDriver}
                            >
                            </TextField>
                        </Grid>
                        <Grid item >
                            <TextField
                                InputLabelProps={{ shrink: true }}  
                                variant="outlined"
                                required
                                label="Hãng Xe"
                                onChange = {handleBrand}
                            >
                            </TextField>
                        </Grid>
                        <Grid item >
                            <TextField
                                InputLabelProps={{ shrink: true }}  
                                variant="outlined"
                                required
                                label="Đời xe"
                                onChange = {handleManufacturedate}
                            >
                            </TextField>
                        </Grid>
                        <Grid item >
                            <TextField
                                InputLabelProps={{ shrink: true }}  
                                FormHelperTextProps = {{shrink: false}}
                                variant="outlined"
                                required
                                label="Ngày đăng kiểm"
                                type = "date"
                                onChange = {handleRegisterdate}
                            >
                            </TextField>
                        </Grid>
                        <Grid item >
                            <TextField
                                InputLabelProps={{ shrink: true }}  
                                variant="outlined"
                                required
                                label="Loại xe"
                                onChange = {handleCartype}
                            >
                            </TextField> 
                        </Grid>
                        <FormControl className = {myclass.form}>
                            <InputLabel id = "demo-simple-select-required-label">Trạng thái</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                //InputLabelProps={{ shrink: true }}  
                                variant="outlined"
                                onChange = {handleState}
                            >
                                <MenuItem>

                                </MenuItem>
                                <MenuItem value = "Active">Active</MenuItem>
                                <MenuItem value = "Inactive">Inactive</MenuItem>
                            </Select> 
                        </FormControl>    
                    </Grid>
                </DialogContent>   
                <DialogActions>
                    <Button 
                        onClick={handleCloseAdd} 
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button 
                        onClick={handleSubmit} 
                        color="primary"
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCarlist;