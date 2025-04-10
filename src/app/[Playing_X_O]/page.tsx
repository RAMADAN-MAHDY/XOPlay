"use client"
import {  ServerContext, useEffect, useState } from 'react';
import Xoplay from '../component/playing_X_O/xoplay';
import {PlayerName1} from '@/app/component/playing_X_O/player';

import { useContext } from 'react';
import Navpar from '../component/navpar';

type names =string;


const Today:React.FC = ({params}:any) => {

// const [param, setparam] = useState<boolean>(false)

const name_one:names =useContext(PlayerName1);

// useEffect(()=>{
//     setparam(params.Playing_X_O === 'Playing_X_O')
// {/* <Navpar param={params.Playing_X_O === 'Playing_X_O'}/> */}
// },[])
// useEffect(()=>{
//  <Navpar />
// },[])
// console.log(param)

const [call ,setcall] = useState<string[]>(['','','','','','','','','']);
const [valued,setvalued] =useState <string>("o")

console.log(params.Playing_X_O === 'Playing_X_O')


// console.log(call.values())
// console.log(valued)
    return(
        <>
        <p>today</p>
       
            <Xoplay valued={valued} setvalued={setvalued} call={call} setcall={setcall}/>

        </>
    )
}
export default Today;
