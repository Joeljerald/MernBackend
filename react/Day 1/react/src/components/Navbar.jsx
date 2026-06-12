import {Link}   from "react-router-dom"
const Navbar=()=>{
    return (<>
    <div className="flex bg-amber-400 h-23 justify-between">
        <Logo/>
        <Links/>
    </div>
    </>)

}
export default Navbar



const Logo=()=>{
    return(<>
    <div className="w-30 h-30" >
        <img src="../../public/logo.jpg" alt="logo"/>
    </div>
    </>)
}

const Links=()=>{
    return(<>
    <div className="flex gap-10 text-center mx-20 mt-10">
        <Link className="text-white bg-black w-20 h-10 rounded-2xl py-1">Home</Link>
        <Link className="text-white bg-black w-20 h-10 rounded-2xl py-1.5">My Skills</Link>
        <Link className="text-white bg-black w-15 h-10 rounded-2xl py-2">Task</Link>
        <Link className="text-white bg-black w-15 h-10 rounded-2xl py-1.5">Project</Link>
        <Link className="text-white bg-black w-20 h-10 rounded-2xl py-1.5">About Me</Link>
    </div>
    </>)

}