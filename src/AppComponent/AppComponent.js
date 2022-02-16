import React from 'react';
import './AppComponent.css';
import HeaderComponent from "../HeaderComponet/HeaderComponent";
import CenterComponent from "../CenterComponent/CenterComponent";
import CardComponent from "../CardComponent/CardComponent";
import StructComponent from "../StructComponent/StructComponent";
import BaseComponent from "../BaseComponent/BaseComponent";
import NewComponent from '../NewComponent/NewComponent';
import ParaComponent from '../ParaComponent/ParaComponent';
import HeadComponent from '../HeadComponent/HeadComponent';
import DetailComponent from "../DetailComponent/DetailComponent";
import GridComponent from "../GridComponent/GridComponent";
import NotificationComponent from "../NotificationComponent/NotificationComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

const AppComponent = () =>{
    return(
	   <div className="item">
		   <HeaderComponent />
		   <CenterComponent />
		   <CardComponent />
		   <StructComponent />
		   <BaseComponent />
		   <NewComponent />
		   <ParaComponent />
		   <HeadComponent />
		   <DetailComponent />
		   <GridComponent />
		   <NotificationComponent />
		   <FooterComponent />
		</div>
    )
}
export default AppComponent;