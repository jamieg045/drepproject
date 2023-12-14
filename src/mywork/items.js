import {useEffect} from "react";
import Describe from './describe';

function Items(props)
{
    return props.myItems.map(
        (item) => {
            return <Describe myItem={item}></Describe>
        }
    );
}
export default Items;