'use client'
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Player from './player';

type call ={
    call:string[];
    setcall:Dispatch<SetStateAction<string[]>>;
    valued:string;
    setvalued:Dispatch<SetStateAction<string>>;
}


const Xoplay:React.FC<call> = ({ call, setcall, valued , setvalued  }:call)=>{




    const [teams_tied ,setTeamsTied] = useState<boolean>()
    const [name1 ,setName1] = useState<string>('')
    const [name2 ,setName2] = useState<string>('')
    const [stateO,setstateO] = useState<boolean>(false)
    const [stateX,setstateX] = useState<boolean>(false)
    const [playerName,handelplayername] = useState<boolean|undefined>(false)

    // console.log(teams_tied)
    // console.log(name2+2)
 
    // create player score
    const [scoreplayerOne , setscoreplayerOne] =useState<number>(0)
    const [scoreplayerTwo,setscoreplayerTwo] =useState<number>(0)
    // console.log(stateX)


    useEffect(()=>{

        if(stateO){   
            let scoreplayerOneLocal = scoreplayerOne;
            for(; scoreplayerOneLocal < 100 ; scoreplayerOneLocal++){
                setscoreplayerOne(scoreplayerOneLocal+1)            
                // console.log(scoreplayerOneLocal+1)

                break;

            }    
        }else if(stateX){
            let scoreplayerTwoLocal = scoreplayerTwo;
            for(; scoreplayerTwoLocal < 100 ; scoreplayerTwoLocal++ ){
                setscoreplayerTwo(scoreplayerTwoLocal+1);
                break;
            }
        }
    },[stateO,stateX])

    // console.log(scoreplayerOne)
    // console.log(scoreplayerTwo)

    //create  odds the win------------
    const the_odds =[
        [call[0],call[1],call[2]],
        [call[3],call[4],call[5]],
        [call[6],call[7],call[8]],
        [call[0],call[3],call[6]],
        [call[1],call[4],call[7]],
        [call[2],call[5],call[8]],
        [call[2],call[4],call[6]],
        [call[0],call[4],call[8]]
    ];


      //who is win O or X 
      const wins = () => {
          the_odds.reduce((prev, cur)=> {
          const resultO = prev || cur.every((e) => e === "o");
          setstateO(resultO)
          return resultO
        }, false);

        the_odds.reduce((prev, cur)=> {
            const resultX = prev || cur.every((e) => e === "x");
            setstateX(resultX)
            return resultX 
          }, false);   
      };

      // the two teams tied 
    const teams_draw = call.find((e)=>{ 
        return e === "" 
        })
        

     // callback wins
    useEffect(()=>{
        wins();
    },[wins])

     // set teams tied 
    useEffect(()=>{
        setTeamsTied(teams_draw===undefined)
    },[teams_draw])

    const handlenames = (name1:string ,name2:string) =>{
        setName1(name1)
        setName2(name2)
       
    }


return(
   <div className='h-[100vh] border-black border-2 justify-center items-center flex flex-col bg-[#555457]'>
    

        <Player playerName={playerName} scoreplayerOne ={scoreplayerOne} scoreplayerTwo={scoreplayerTwo} handlename={handlenames} />
       
       <div className='border-2 border-black border-solid w-[304px] h-[304px] flex flex-wrap bg-[#323435]'>

        {/* handele click show x and o */}
        {call.map((eo,index)=>{
            const handelclick =()=>{
               if( !stateO && !stateX){
                if(!call[index]){
                    if(valued==="o" ){
                        call[index] = "o"
                        setvalued("x");
                    }else if(valued==="x"){
                        call[index] = "x"
                        setvalued("o");
                    }
                   }
               }  
            }
       
            return(
                <div key={index} className='border-black border-2 w-[100px] h-[100px] flex justify-center items-center' onClick={handelclick}><span className={`font-[900] text-[70px] ${eo==='x' ?"text-red-500":'text-[#3c3aca]'} `}>{eo}</span></div>
            )
        })}
       </div>
       {stateO && <p className='text-[40px] text-[#185525] '>  مبروك <span className='text-[40px] font-[900] text-[#6651df]'>{name1}</span> الفائز هو</p>}

       {stateX && <p className='text-[40px] text-[#185525] '>مبروك<span className='text-[40px] font-[900] text-[#ee3e3e]'>{name2}</span> الفائز هو</p>}

       {teams_tied && !stateO && !stateX &&
       <p className='text-[40px] text-[#185525] '> تعادل</p>
}

       {!stateO && !stateX && !teams_tied &&<p className='w-full pt-0 font-[900] text-[50px] text-center'> 
       <span className={`${valued==="x"?'text-red-500':'text-[rgb(11,59,26)]' } `}>
        {valued}
        </span>
       الدور  علي </p>
       
       }

       {!stateO && !stateX && !teams_tied? null: <button className='bg-[#93af51] p-4 rounded-full hover:bg-[#aaec0d] font-[600]' onClick={()=>{
        setstateO(false);
        setstateX(false);
        setcall(['','','','','','','','',''])
        handelplayername(false)
       }}>اللعب مرة اخري</button>}
    </div>


)
}
export default Xoplay;