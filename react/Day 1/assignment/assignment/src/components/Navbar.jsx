import { Link } from "react-router-dom"
const Navbar=()=>{
    return (<>
<div className="flex bg-blue-200 justify-between">
        <Logo/>
        <Companyname/>
        <Menu/>
    </div>
    </>)

}
export default Navbar

const Logo=()=>{
    return(<>
    <div className="w-20 h-20 py-5">
        <img src="../../public/SLALogo.webp"/>
    </div>
    </>)
}

const Companyname=()=>{
    return(<>
    <div className="flex text-center ml-65 py-7 ">
        <h1 ><strong className="text-2xl">SoftLogic Institude</strong></h1>
    </div></>)
}

const Menu=()=>{
    return(<>
    <div className="flex gap-10  mx-8 mt-5">
        <Link className="text-white bg-black w-20 h-10 rounded-2xl py-1.5 px-4">Home</Link>
        <Link className="text-white bg-black w-20 h-10 rounded-2xl py-1.5 px-1.5">My Skills</Link>
        <Link className="text-white bg-black w-15 h-10 rounded-2xl py-2 px-3">Task</Link>
        <Link className="text-white bg-black w-15 h-10 rounded-2xl py-2 px-2">Project</Link>
        <Link className="text-white bg-black w-23 h-10 rounded-2xl py-2 px-2">About Me</Link>
        </div></>)

}


