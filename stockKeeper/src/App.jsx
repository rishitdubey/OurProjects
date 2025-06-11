
function App() {

  const register= (name, phone, email, pass)=>{
    
  }
  return (
    <div className="bg-neutral-800 min-h-screen p-4">
      <div className="w-md h-auto bg-blueBG p-7 rounded-2xl">
        <div className="text-yellowText text-40 font-amatic pb-5">Our Shop</div>
        <div className="pb-2 text-yellowText">Sign Up</div>
        <div className="flex flex-row space-x-3">
          <div>
            <label htmlFor="name" className="text-yellowText">Name</label><br />
            <input className="border border-yellowText focus:outline-none focus:ring-2 focus:ring-yellowText rounded-xl h-10 w-50"
              id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="phone" className="text-yellowText">Phone Number</label><br />
            <input className="border border-yellowText focus:outline-none focus:ring-2 focus:ring-yellowText rounded-xl h-10 w-50"
              id="phone" type="text" required />
          </div>
        </div>
        <div className="pt-3">
          <label htmlFor="email" className="text-yellowText">E-mail</label><br />
          <input className="border border-yellowText focus:outline-none focus:ring-2 focus:ring-yellowText rounded-xl h-10 w-100"
            id="email" type="email" required />
        </div>
        <div className="pt-3">
          <label htmlFor="password" className="text-yellowText">Password</label><br />
          <input className="border border-yellowText focus:outline-none focus:ring-2 focus:ring-yellowText rounded-xl h-10 w-70"
            id="password" type="password" required />
        </div>

        <div className="pt-7 flex flex-row justify-center">
          <button className="text-blue-200 border border-white rounded-xl w-80 p-4"
          onClick={()=>{
            registerNewUser(name, phone, email, pass );
          }}>
          Create Account
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
