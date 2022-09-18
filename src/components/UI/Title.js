import React from 'react';
import classes from './title.module.css'
import { MdDoubleArrow } from "react-icons/md";

const Title = (props) => {
    return(
        <div className={classes.title} >
            <h2 className={classes['title-header']}><MdDoubleArrow color="orange" />{props.children}</h2>
        </div>
    )
}

export default Title;
