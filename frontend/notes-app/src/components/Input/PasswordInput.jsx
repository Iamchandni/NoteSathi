/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'

const PasswordInput = ({value,onChange,placeholder}) => {
    const [isShowPassword, setIsShowPassword]=useState(false);

    const toggleShowPassword=()=>{
        setIsShowPassword(!isShowPassword);
    }
  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3 ">
        <input 
        value={value}
        onChange={onChange}
        type={isShowPassword?"ext":"password"}
        placeholder={placeholder || "password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
        />
    </div>
  )
}

export default PasswordInput