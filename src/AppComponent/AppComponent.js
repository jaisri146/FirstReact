import React from 'react';
import HeaderComponent from "../HeaderComponet/HeaderComponent";
import CenterComponent from "../CenterComponent/CenterComponent";
import CardComponent from "../CardComponent/CardComponent";
import StructComponent from "../StructComponent/StructComponent";
import BaseComponent from "../BaseComponent/BaseComponent";
import NewComponent from '../NewComponent/NewComponent';
import ParaComponent from '../ParaComponent/ParaComponent';
import HeadComponent from '../HeadComponent/HeadComponent';

const AppComponent = () =>{
    return(
       <>
       <HeaderComponent />
       <CenterComponent />
       <CardComponent />
       <StructComponent />
       <BaseComponent />
       </>
    )
}
export default AppComponent;