import Header from '@/components/Header'
import React from 'react'

const Profile = async({params}:ParamsWithSearch) => {
  const {id} = await params
  return (
    <div className='wrapper page'>
      <Header subHeader='nyyscal541556@gmail.com' title='Nischal Malla' userImg='/assets/images/dummy.jpg'/>
     <h1 className='text-2xl font-karla'>USER ID:{id}</h1> 
     </div>
  )
}

export default Profile