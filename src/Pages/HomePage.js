import {makeStyles} from '@material-ui/core';
import React from 'react';
import {ReactComponent as Logo1 } from '../Image/van.svg';
import {ReactComponent as Logo2 } from '../Image/calendar.svg';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import '../font.css';
import { Link } from 'react-router-dom';
const mySytle = makeStyles((theme) =>(
    {
        main :  {
                    display : 'flex',
                    flexDirection : 'column',
                },
        drawer :    {
                        display : 'fixed',
                        top : '0%',
                        left : '0%',
                    },
        logo1 :     {
                        position :'absolute',
                        fill : '#FFFFFF',
                        top : '27%',
                        left : '10%',
                        width : '30%',
                        height :'auto',
                    },
        line1 :      {
                        position : 'absolute',
                        height : theme.spacing(1),
                        width : '90%',
                        top : '15%',
                        left : '5%',
                        backgroundColor : '#FFFFFF',
                        borderRadius : theme.spacing(0.5),
                        opacity : '0',
                    },
        line2 :      {
                        position : 'absolute',
                        height : theme.spacing(1),
                        width : '90%',
                        bottom : '15%',
                        left : '5%',
                        backgroundColor : '#FFFFFF',
                        borderRadius : theme.spacing(0.5),
                        opacity : '0',
                    },
        header11 :   {
                        position : 'absolute',
                        fontFamily : `'Comfortaa', cursive`,
                        fontSize : '90px',
                        color : '#FFFFFF',
                        top : '28%',
                        left : '47%',
                        opacity : '0',
                    },
        header12 :   {
                        position : 'absolute',
                        fontFamily : `'Comfortaa', cursive`,
                        fontSize : '90px',
                        color : '#FFFFFF',
                        top : '48%',
                        left : '47%',
                        opacity :'0',
                        
                    },
        button1 :   {
                        position : 'absolute',
                        color : '#FFFFFF',
                        width : '10%',
                        height : '10%',
                        bottom : '20%',
                        left : '45%',
                        opacity : '0',
                        '&:hover' : {
                                        animationIterationCount : 'infinite',
                                        animationDuration : '1s',
                                        animationName : '$spin',
                                    }
                    },
        container1 :     {
                            position : 'fixed',
                            top :'0%',
                            backgroundColor : '#585858',
                            width : '50%',
                            height : '100vh',
                            zIndex : '1',
                            transition : 'width 0.5s linear, z-index 0s linear 0.5s',
                            '&:hover' :     {
                                                '& $logo1'  :   {
                                                                    animationDuration : '3s',
                                                                    animationDelay : '0.5s',
                                                                    animationIterationCount : 'infinite',
                                                                    animationDirection : 'alternate-reverse',
                                                                    animationName : '$logo1hover',
                                                                },
                                                '& $header11'   :   {
                                                                        opacity : '100',
                                                                        transition : 'opacity 0.5s linear 1.0s',
                                                                    },
                                                '& $header12'   :   {
                                                                        opacity : '100',
                                                                        transition : 'opacity 0.5s linear 1.0s',
                                                                    },
                                                '& $line1'  :   {
                                                                    opacity : '100',
                                                                    transition : 'opacity 0.5s linear 1.0s',
                                                                },
                                                '& $line2'  :   {
                                                                    opacity : '100',
                                                                    transition : 'opacity 0.5s linear 1.0s',
                                                                },
                                                '& $button1'  :     {
                                                                        opacity : '100',
                                                                        transition : 'opacity 0.5s linear 1.0s',
                                                                    },          
                                                width : '70%',          
                                                zIndex : '2',
                                                transition : 'width 0.5s linear 0.5s, z-index 0s linear 0.5s'   ,          
                                            },
                        },
        logo2 :     {
                        position :'absolute',
                        fill : '#FFFFFF',
                        top : '25%',
                        right : '10%',
                        width : '30%',
                        height :'auto',
                    },
        line3 :     {
                        position :'absolute',
                        backgroundColor : '#FFFFFF',
                        width : theme.spacing(1),
                        height : '90%',
                        top : '5%',
                        left : '5%',
                        borderRadius : theme.spacing(0.5),
                        opacity : '0',
                    },
        header2 :   {
                        position :'absolute',
                        fontFamily : `'Comfortaa', cursive`,
                        fontSize : '90px',
                        color : '#FFFFFF',
                        left : '10%',
                        top : '35%',
                        opacity : '0',
                    },
        button2 :   {
                        position : 'absolute',
                        color : '#FFFFFF',
                        width : '10%',
                        height : '10%',
                        bottom : '40%',
                        left : '26%',
                        opacity : '0',
                        '&:hover' : {
                                        animationIterationCount : 'infinite',
                                        animationDuration : '1s',
                                        animationName : '$spin',
                                    }
                    },
        
        container2 :    {
                            top: '0%',
                            right: '0%',
                            position : 'fixed',
                            backgroundColor : '#ffca18',
                            width : '50%',
                            height : '100vh',
                            zIndex : '1',
                            transition : 'width 0.5s linear, z-index 0s linear 0.5s',
                            '&:hover' :     {
                                                '& $logo2'  :   {
                                                                    animationDuration : '0.3s',
                                                                    animationDelay : '0.5s',
                                                                    animationIterationCount : 'infinite',
                                                                    animationDirection : 'alternate-reverse',
                                                                    animationName : '$logo2hover',
                                                                },
                                                '& $line3'  :   {
                                                                    opacity : '100',
                                                                    transition : 'opacity 0.5s linear 1.0s',
                                                                },
                                                '& $header2'   :   {
                                                                    opacity : '100',
                                                                    transition : 'opacity 0.5s linear 1.0s',
                                                                },
                                                '& $button2'  :     {
                                                                    opacity : '100',
                                                                    transition : 'opacity 0.5s linear 1.0s',
                                                                },
                                                width : '70%',          
                                                zIndex : '2',
                                                transition : 'width 0.5s linear 0.5s, z-index 0s linear 0.5s'   ,       
                                            }
                        },
        "@keyframes spin" :     {
                                    "0%" :  {
                                                transform: 'rotate(0deg)',
                                            },
                                    "100%":     {
                                                    transform: 'rotate(180deg)',
                                                },
                                },
        "@keyframes logo1hover" :   {
                                        "0%" :  { 
                                                    transform: 'translate(1px, 1px) rotate(0deg)',
                                                },
                                        "10%" : { 
                                                    transform: 'translate(-1px, -2px) rotate(-10deg)', 
                                                },
                                        "20%" : { 
                                                    transform: 'translate(-3px, 0px) rotate(10deg)',
                                                },
                                        "30%" : { 
                                                    transform: 'translate(3px, 2px) rotate(0deg)',
                                                },
                                        "40%" : { 
                                                    transform: 'translate(1px, -1px) rotate(10deg)', 
                                                },
                                        "50%" : { 
                                                    transform: 'translate(-1px, 2px) rotate(-10deg)', 
                                                },
                                        "60%" : { 
                                                    transform: 'translate(-3px, 1px) rotate(0deg)',
                                                },
                                        "70%" : { 
                                                    transform: 'translate(3px, 1px) rotate(-10deg)',
                                                },
                                        "80%" : { 
                                                    transform: 'translate(-1px, -1px) rotate(10deg)', 
                                                },
                                        "90%" : { 
                                                    transform: 'translate(1px, 2px) rotate(0deg)',
                                                },
                                        "100%" :    {
                                                        transform: 'translate(1px, -2px) rotate(-10deg)',
                                                    }
                                    },
        "@keyframes logo2hover" :   {
                                        "0%" :  { 
                                                    transform: 'scale(1.0)',
                                                },
                                        "100%" :    {
                                                        transform: 'scale(1.05)',
                                                    }
                                    },
    }
))
function HomePage(props)
{
    const myclass = mySytle();
    return(
        <div className = {myclass.main}>
            <div 
                className = {myclass.container1}
            >
                <div
                    className = {myclass.line1}
                />
                <header className = {myclass.header11}>
                    Danh Sách
                </header>
                <header className = {myclass.header12}>
                    Xe Dịch Vụ
                </header>
                <Logo1 className = {myclass.logo1}/>
                <Link 
                    to = '/carlist' 
                >
                    <ControlPointIcon
                        className = {myclass.button1}

                    />
                </Link>
                <div
                    className = {myclass.line2}
                />
            </div>
            
            <div 
                className = {myclass.container2}
            >
                <div className = {myclass.line3}/>
                <header className = {myclass.header2}>
                    Lịch Trình
                </header>
                <Logo2 className = {myclass.logo2}/>
                <Link 
                    to = '/schedule' 
                >
                    <ControlPointIcon
                        className = {myclass.button2}

                    />
                </Link>
            </div>
        </div>
    )

}

export default HomePage;
