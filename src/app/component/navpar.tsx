'use client'
import Link from "next/link";
const Navpar = ({param}) => {
    console.log(param)
    return (
        <>
        <header className="flex w-full justify-between px-2 py-3 bg-[#26a4c7] font-[800] text-[26px] fixed">
            <Link href ='/'>
            <p className="p-3 hover:bg-[#a38b20] rounded-[30px]">Weather <span className="taxt-[#222231]">App</span></p>
            </Link>
            <div className='flex justify-between w-[60%] px-3'>
                <Link href ="Playing_X_O" className="rounded-[30px] p-3 hover:bg-[#a38b20]">playing <span className="text-[#551111]">X</span> / <span className="text-[#115525]">O</span> </Link>
            </div>
        </header>
        </>
    )
}
export default Navpar;