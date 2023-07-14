import React, { useState } from 'react'
import { FaRegCopy, FaCheck } from "react-icons/fa";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const SingleCode = ({ data }) => {
  const [status, setStatus] = useState(false);
  const [codeset, setCodeset] = useState(false);
  const [isImport, setIsImport] = useState(false)
  const { mainTitle, openCommand, mainCode, parentTitle, importItem } = data;
  const handleClickCode = () => {
    setStatus(!status)
    navigator.clipboard.writeText(importItem)
    setTimeout(() => {
      setStatus(false)
    }, 1500)
  }
  const handlemainCode = () => {
    setCodeset(!status)
    navigator.clipboard.writeText(mainCode)
    setTimeout(() => {
      setCodeset(false)
    }, 1500)
  }
  const handleopenCommand=()=>{
    navigator.clipboard.writeText(openCommand)
  }

  return (
    <React.Fragment>
      <div className='codeSing'>
        <h5><span style={{ color: "white" }}>Parent Title :</span> {parentTitle}</h5>
        <h3><span style={{ color: "white" }}>Main Title :</span> {mainTitle} </h3>
        <div onClick={handleopenCommand} className="copycode">
          <p>$ {openCommand}</p>
        </div>
        <p>import lines :</p>
        <div onClick={handleClickCode} className='importF'>
        {status ? <FaCheck className='temp' style={{ color: "green" }} /> : <FaRegCopy className='temp' style={{ color: "aqua" }} />}
          <SyntaxHighlighter language='jsx' customStyle={{ padding: "1em", borderRadius: ".4em" }} style={okaidia}>
            {importItem}
          </SyntaxHighlighter>
        </div>
        <p>main code :</p>
        <div className='maincodex' onClick={handlemainCode}>
          {codeset ? <FaCheck className='tempmain' style={{ color: "green" }} /> : <FaRegCopy className='tempmain' style={{ color: "aqua" }} />}
          <SyntaxHighlighter language='jsx' customStyle={{ padding: "1em", borderRadius: ".4em" }} style={okaidia}>
            {mainCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SingleCode