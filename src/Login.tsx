import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

type formType = { 
                  email: string; 
                  password: string 
                }

const Login = () => {

let navigate = useNavigate();
const [userData, setUserData] = useState <formType>({
  email: "",
  password: "",
})
const [error, setError] = useState <string>('')
const getInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUserData({ ...userData,[e.target.name]: e.target.value });
};


const handleSubmit = (e: React.FormEvent)=>{
e.preventDefault();
if(userData.email === "" ||  userData.password === "" ){
  alert("please fill all field")
}else{
  const getData = JSON.parse(localStorage.getItem("user") || "[]");
  console.log(getData)
  console.log(userData)
  getData.map((value:any)=>{
     if(userData.email === value.email && userData.password === value.password ){
      alert("Login Successfully !")
      navigate("/home")

     }else{
        return setError("Invalid Email and Password !");
     }
    });

  setUserData({
    email: "",
    password: "",
  });

}

}

  return (
    <>
    <h1 className='text-red-800 py-5 text-center'>{error}</h1>
    <section className=" mx-auto  text-center w-full h-auto box-border">
      <form className='m-auto w-[50%] h-[40vh] bg-slate-100 my-[10rem] 
    shadow-sm shadow-slate-200 rounded-[6px] py-10 px-5' 
    onSubmit={handleSubmit}
    >


        <div className='py-3'>
          <label className=' text-sx font-medium text-gray-600 pr-3 w-'>
            Email:
          </label>
          <input type='email'
           name='email' 
           value={userData.email}
           onChange={getInputData}
            placeholder='name@gmail.com'
            className=' border rounded-sm border-gray-300 px-2 py-1 text-[12px] focus:outline-none 
    focus:ring-2 focus:ring-blue-400 w-[42%]'
          />
        </div>

        <div className='py-3'>
          <label className=' text-sx font-medium text-gray-600 pr-3 w-10'>
            Password:
          </label>
          <input type='password' 
          id="password"
           name='password' 
           value={userData.password}
           onChange={getInputData}
           placeholder='Enter the password'
            className=' border rounded-sm border-gray-300 px-2 py-1 text-[12px] focus:outline-none 
    focus:ring-2 focus:ring-blue-400 w-[42%]'
          />

        </div>

        <button type='submit' 
        // onSubmit={getSignupData}
        className='bg-blue-500 text-sm px-4 py-1 rounded-[0.4rem]
         text-white font-normal mt-[2rem]'>LOGIN</button>

        <p>  Don’t have an account yet? <Link to="/signup">Sign Up</Link> </p>
      </form>
    </section>
    </>
  )
}

export default Login;

