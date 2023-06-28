import Image from "next/image";


const main = {
  title: "Discover and Earn",
  desc: "Explore the latest trends, popular NFTs, upcoming releases and airdrops. Stay ahead of the curve and join our community as we revolutionize the way we experience and interact with digital assets."

}





const Entry = () => {
  return (
<>
    <div className="main_div flex flex-col md:flex-row py-16 gap-20">
      <div className="flex flex-col my-auto flex-1 ">
        <div className="title text-7xl font-black ">{main.title}</div>
        <p className="desc py-6 ">{main.desc}</p>
        <div className="w-32">
          <button className="button-28" role="button">Explore</button>


        </div>
      </div>
      <div className="image w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] m-auto">
        <Image src="/images/main.jpg" alt="" width="450" height="450" />
      </div>

      </div>
      <div className={` text-3xl lg:text-7xl flex justify-center text-purple `}>
       Explore the potential mint
      </div>
</>
  )
}

export default Entry