import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom";



type formType = { 
                  phoneNo: string; 
                  email: string; 
                  password: string 
                }

const Signup = () => {
  let navigate = useNavigate();

const [userData, setUserData] = useState <formType>({
  phoneNo: "",
  email: "",
  password: "",
})

const getInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUserData({ ...userData,[e.target.name]: e.target.value });
};

console.log(userData)


const handleSubmit = (e: React.FormEvent)=>{
e.preventDefault();
if(userData.phoneNo === "" || userData.email === "" || userData.password === "" ){
  alert("please fill all field")
}else{
  const getData = JSON.parse(localStorage.getItem("user") || "[]");
  const updatedData = [...getData, userData];
  
  localStorage.setItem("user", JSON.stringify(updatedData))
  alert("Signup successFull !")
  navigate("/home")

  setUserData({
    phoneNo: "",
    email: "",
    password: "",
  });

}

}

  return (
    <section className=" mx-auto  text-center w-full h-auto box-border">
      <form className='m-auto w-[50%] h-[40vh] bg-slate-100 my-[10rem] 
    shadow-sm shadow-slate-200 rounded-[6px] py-10 px-5' 
    onSubmit={handleSubmit}
    >

        <div className='py-3'>
          <label className=' text-sx font-medium text-gray-600 pr-3 w-[20%]'>
            Phone No:
          </label>
          <input
            type='number'
            name='phoneNo'
            value={userData.phoneNo}
            onChange={getInputData}
            placeholder='Enter the phone No'
            className='border rounded-sm border-gray-300 px-2 py-1 text-[12px] focus:outline-none 
    focus:ring-2 focus:ring-blue-400 w-[42%]'
          />
        </div>


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
         text-white font-normal mt-[2rem]'>Sign up</button>

        <p>  you have an account?<Link to= "/">Login</Link> </p>
      </form>
    </section>
  )
}

export default Signup;
