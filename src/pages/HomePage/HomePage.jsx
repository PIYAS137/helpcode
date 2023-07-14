import { Container } from 'react-bootstrap'
import SingleCode from '../../components/SingleCode'
import { DataArr } from '../../../database/DataArray'
import { useState } from 'react'
import { FaSpaceShuttle } from "react-icons/fa";



const HomePage = () => {
  const [val,setVal]=useState('')
  const handleChange=(e)=>{
    setVal(e.target.value)
  }

  return (
    <Container>
      <a href="#"><FaSpaceShuttle className='plane'/></a>
      <div className='searchboxWrapper'><input placeholder='! - - - - Search required code with key wordS - - - ! ' type="search"  className='searchbox' onChange={handleChange}/></div>
      {DataArr.filter((one)=>{
        return val.toLowerCase() == '' ? one:one.mainTitle.toLowerCase().includes(val)
      }).map((one)=><SingleCode key={one.id} data={one}/>)}
    </Container>
  )

}

export default HomePage