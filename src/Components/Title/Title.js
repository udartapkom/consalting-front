import React from "react";

function Title(props) {
   const { text } = props;
    return(
        <h2 className="Title">{text}</h2>
    )
}
export default Title;