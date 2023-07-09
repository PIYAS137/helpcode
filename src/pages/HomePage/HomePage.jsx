import { Container } from 'react-bootstrap'
import './HomePage.css'
import SingleCode from '../../components/SingleCode'
import { DataArr } from '../../../database/DataArray'
import { useState } from 'react'



const HomePage = () => {
  const [val,setVal]=useState('')
  const handleChange=(e)=>{
    setVal(e.target.value)
  }

  return (
    <Container>
      <div className='searchboxWrapper'><input placeholder='Enter main title here ' type="search"  className='searchbox' onChange={handleChange}/></div>
      {DataArr.filter((one)=>{
        return val.toLowerCase() == '' ? one:one.mainTitle.toLowerCase().includes(val)
      }).map((one)=><SingleCode key={one.id} data={one}/>)}
    </Container>
  )

}

export default HomePage