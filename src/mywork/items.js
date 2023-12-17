import {useEffect} from "react";
import React from "react";
import Describe from './describe';


function Items(props)
{
    return props.myItems.map((item) => {
            return <Describe myItem={item} key={item.id}></Describe>
        }
    );
}
export default Items;