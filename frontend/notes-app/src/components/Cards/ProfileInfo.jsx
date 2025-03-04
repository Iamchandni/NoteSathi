/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({onLogout}) => {
  return (
    <div className="flex items-center gap-3">
        <div className="">{getInitials("John Williams")} </div>
        <div className="w-12 h-12 flex items-center justify-centre rounded-full text-slate-950 font-medium bg-slate-100">
            <p className="text-sm font-medium">John William</p>
            <button className="text-sm text-slate-700 underline" onClick={onLogout}>Logout</button>
        </div>
    </div>
  )
}

export default ProfileInfo