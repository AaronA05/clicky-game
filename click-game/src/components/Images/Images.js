import React from "react";
import "./Images.css";

const Images = props => (
	<img alt={props.id} src={props.image} />
);

export default Images;