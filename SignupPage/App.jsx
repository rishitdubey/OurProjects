 function App() {

  const register= (name, phone, email, pass)=>{
    
  }
  const signin= (name, phone, email, pass)=>{
    
  }
   
  const help= (name, phone, email, pass)=>{
    
  }
   
  const terms= (name, phone, email, pass)=>{
    
  }
  const googleIcon= (name, phone, email, pass)=>{
    
  }
  return (
    <div className=" bg-blueA min-h-screen p-1 ">
      <div className="flex-auto w-130 h-fit bg-blueBGB/10  rounded-2xl mx-auto my-10 size-3 outline-blueBGA/60 outline-solid shadow-lg shadow-blueBGB">
      <div className="pl-7">
        <div className="font-amatic pb-3 pt-2 font-bold bg-yellowTextA bg-clip-text text-4xl/tight text-transparent tracking-vTight mx-0 ">OUR SHOP</div>
        <div> 
        <div className="pb-0 text-yellowTextA font-robotoMono font-bold tracking-vTight text-2xl/tight">Sign Up</div>
        <div className="text-yellowTextA font-roboto font-light tracking-vTight text-sm/tight">Get Started!</div>
        </div>
        <div className="flex flex-row space-x-3 pt-2">
          <div>
            <label htmlFor="name" className="text-yellowTextA m-4 ">Name</label><br />
            <input autoComplete="off" className="border border-yellowTextA focus:outline-none shadow-sm shadow-yellowTextA focus:ring-2 focus:ring-yellowText rounded-sm h-10 w-50 mx-4 my-1 font-semibold text-blueBGB"
              id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="phone" className="text-yellowTextA m-0">Phone Number</label><br />
            <input autoComplete="off" className="border border-yellowTextA focus:outline-none shadow-sm shadow-yellowTextA  focus:ring-2 focus:ring-yellowText rounded-sm h-10 w-50 mx-0 my-1 font-semibold text-blueBGB"
              id="phone" type="text" required />
          </div>
        </div>
        <div className="pt-3">
          <label htmlFor="email" className="text-yellowTextA m-4">E-mail</label><br />
          <input autoComplete="off" className="border  border-yellowTextA focus:outline-none focus:ring-2 focus:ring-yellowText rounded-sm h-10 w-108 mx-4 my-1 font-semibold text-blueBGB shadow-sm shadow-yellowTextA "
            id="email" type="email" required />
        </div>
        <div className="pt-3">
          <label htmlFor="password" className="text-yellowTextA m-4">Password</label><br />
          <input autoComplete="off" className="border border-yellowTextA focus:outline-none focus:ring-2 focus:ring-yellowText rounded-sm h-10 w-108 mx-4 my-1 font-semibold text-blueBGB shadow-sm shadow-yellowTextA "
            id="password" type="password" required />
        </div>
        </div>
        <div className="pl-0">
        <div className="pt-5  flex flex-row justify-center">
          <button className="text-blue-200 border-white border shadow-sm shadow-amber-50  bg-[#000000]/17 rounded-sm w-90 h-10 my-0 p-4 flex justify-center items-center font-black font-roboto opacity-700 hover:shadow-md hover:shadow-cyan-500 hover:bg-gray-600 hover:text-blue-300 hover:border-cyan-500/80"
          onClick={()=>{
            registerNewUser(name, phone, email, pass );
          }}>
          Create Account
        </button>
        </div>
        <div>
        <div className="text-amber-100 text-center text-sm/tight h-auto tracking-vTight font-light pt-2 font-Roboto">Already have an account ?

        <button className="text-yellowTextA text-sm font-bold font-roboto hover:text-cyan-500/80 pl-1.5 hover:underline"
        onClick={()=>{
          signinUser(name,phone,email,pass );
        }}>
          sign in
        </button>
        </div>
        <div className="flex flex-row space-x-3 pt-2 pl-20 pb-0 h-10">
          <hr className="w-40 h-5 border-yellowTextA my-2.5 opacity-90 pb-0"/>
          <div className="text-yellowTextA text-sm/tight font-light pl-1 font-roboto opacity-90 h-5 pb-0">or</div>
          <hr className="w-40 h-5 border-yellowTextA my-2.5 opacity-90 pb-0"/>
        </div>
        <div className="w-sm h-sm mx-auto pl-3 pb-2 ">
          <button className="text-blue-200 border-white border shadow-sm shadow-amber-50  bg-[#000000]/17 rounded-sm w-90 h-8 my-0 p-4 flex justify-center items-center font-black font-roboto opacity-700 hover:shadow-md hover:shadow-cyan-500 hover:bg-gray-600 hover:text-blue-300 hover:border-cyan-500/80"
            onClick={()=>{
          googleIconUser(name,phone,email,pass );
        }}>sign in with Google
          </button>
          
        </div> 
      </div>
      </div>
      <div className="bg-amber-50 w-130 mx-0 pt-1 h-14 ml-0 rounded-b-2xl outline-solid outline-blueBG">
      <div className="flex flex-row space-x-3">
        <button className=" my-3 ml-3 font-sm font-roboto font-light font text-[#252525] hover:text-cyan-500/80 hover:underline hover:font-bold"
          onClick={()=>{
            helpPage(name, phone, email, pass );
          }}>
            Help
        </button>    
        <button className="font-sm font-roboto font-light font text-[#252525] hover:text-cyan-500/80 hover:underline hover:font-bold"
          onClick={()=>{
            termsPage(name, phone, email, pass );
          }}>
            Terms
        </button> 
        <div className="font-sm font-roboto font-light text-[#252525] my-auto pl-72">Our Shop 2025</div>
      </div>  
      </div>
      </div>
    </div>
  )
}

export default App
