'use client'
import { ChangeEventHandler, SetStateAction, useEffect, useState } from "react";
// import Xoplay from './xoplay';
import { createContext } from 'react';


// import Today from '@/app/todays_w/page';

type names = string

type  layerName =  {
    playerName:boolean|undefined;
    scoreplayerOne:number;
    scoreplayerTwo:number;
    handlename:(name1: string, name2: string) => void;
}

export const PlayerName1= createContext<names>('');

export default function Player(playerName:layerName) {

//  propes here
    const {scoreplayerOne,scoreplayerTwo,handlename} = playerName;

//  states here
    const [name_one, setnameOne ] = useState<string>('')
    const [name_two, setnameTwo] = useState<string>('')
    const [nameDefault, setnameDefault] = useState<string>('')
    const [click, setclick] = useState<boolean>(false)
    const [clickd, setclickd] = useState<boolean>(false)
    const [showParagraphs, setShowParagraphs] = useState<boolean>(false)

    
    
    // console.log(handlename)

//   handle change player name 1
    const hamndleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        setnameOne(value);
    }
//   handle change player name 2
    const hamndleChangeTwo: ChangeEventHandler<HTMLInputElement> = (e) => {
        let value = e.target.value
        setnameTwo(value)
    }
// handle save name ,sent name to (Xoplay file ) by handelname function , set default name ("") ,set Show Paragraphs ;
    const handleButtonDone = () => {
        setclick(true);
        setclickd(true);
        setShowParagraphs(true); 
        setnameDefault('');
        handlename(name_one ,name_two )
      
    }

    
    useEffect(() => {
        if(!playerName.playerName){
            // console.log(playerName.playerName )
            setnameDefault('')
        }
    }, [playerName])

 
    return (
        <>
  

            <div className="flex ">
                <button className="bg-[#0e0416] rounded-full mb-1 p-1 text-[#f5f8f2] hover:bg-[#302f31] shadow-3xl" onClick={()=>{
                setclickd(false);
                setclick(false)
                }}>
                   تغيير الاسم
                </button>

               
                <input placeholder="اسم اللاعب الاول" className="w-[100px] h-[30px] mr-0 mt-3 mb-3 ml-3 rounded-full shadow-3xl" onChange={hamndleChange} value={click ?nameDefault:name_one } disabled={clickd}/>

                <p className="mr-3 text-[#278827] font-[900]">O</p>
                
                <p className="ml-3 text-[#ee3838] font-[900] ">X</p>

                <input placeholder="اسم اللاعب الثاني" className="w-[100px] h-[30px] mr-3 mt-3 ml-0 rounded-full shadow-3xl " onChange={hamndleChangeTwo} value={click ?nameDefault:name_two } disabled={clickd} />

                <button className="bg-[#0e0416] h-7 w-8 rounded-full mt-3 text-[#f5f8f2] hover:bg-[#302f31] shadow-3xl" onClick={handleButtonDone}>
                    تم
                </button>

            </div>
            
            {showParagraphs && (
                <div className="flex bg-[#d0d1c8] rounded-full">
                    <p className="bg-[#c3c4b6] mt-3 mb-3 p-3 rounded-[30%]">{name_one}</p>

                    <span className="bg-[#c3c4b6] p-1 h-8 w-auto rounded-3xl ml-0 mr-3 mt-5 mb-3">{scoreplayerOne}</span>

                    <span className="bg-[#c3c4b6] p-1 h-8 w-auto rounded-3xl ml-3 mr-0 mt-5 mb-3">{scoreplayerTwo}</span>

                    <p className="bg-[#bfc0af] mt-3 mb-3 p-3 rounded-[30%]">{name_two}</p>
                    
                </div>
            )}

    

    
                   </>
    )
}

  