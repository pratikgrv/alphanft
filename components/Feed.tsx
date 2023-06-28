'use client'
import Link from "next/link";
import { useState } from "react";


// const arr :( number | string)[] = ["solana",33,]
let blockChain: string[] = ["Solana", "Ethereum", "polygon"];

const Feed = () => {


    const [dropDown, setDropDown] = useState(false);
    const [chain, setChain] = useState("Solana");



    return (
        <div className="feed_container py-12">
            <div className="flex justify-between">
                <div className="text-2xl lg:text-4xl flex">
                    <div className="flex ">Trending Projects on  {chain}</div>
                    <div className="p-2 cursor-pointer relative top-[-5px]" onClick={()=>{setDropDown(!dropDown)}}><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier ">
                           
                            <path d="M7 10L12 15L17 10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        { dropDown ?<div className="text-xl p-3 py-4 absolute feeddrop rounded-2xl bg-white text-black">
                            <div className="p-2 chain " onClick={() => { setChain("solana"); setDropDown(!dropDown) }}>solana</div>
                            <div className="p-2 chain" onClick={() => { setChain("ethereum"); setDropDown(!dropDown) }}>ethereum</div>
                            <div className="p-2 chain" onClick={() => { setChain("bitcoin"); setDropDown(!dropDown) }}>bitcoin</div>
                        </div>: ''}
                    
                    </div>
                </div>
                <div className="">
                    <Link href="">view all</Link>
                </div>
            </div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste enim voluptatibus, esse quam exercitationem at porro ad? Facilis aspernatur molestias nostrum nihil cupiditate dolorum autem veritatis, possimus hic quasi expedita!
        </div>
    )
}

export default Feed