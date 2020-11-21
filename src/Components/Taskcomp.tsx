import React from 'react'
import '../styles/all.min.css'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {ImCheckboxUnchecked} from 'react-icons/im'
import {VscPinned} from 'react-icons/vsc'
import '../styles/comp.css'

type Data={
    
        id:number,
        task:string,
        check:boolean,
        pinned:boolean,
    
}

export interface Taskcompa{
    Data:Data[],
    handlecheck:(id:number)=>void,
    handlePinned:(id:number)=>void
}
const Taskcomp:React.FC<Taskcompa>= ({
    Data,
    handlePinned,
    handlecheck
    
})=>{

  
    
    return(
        <div className='container mt-5 mb-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6 mt-5 text-center mb-5'>
                    <h1>TaskList</h1>
                    <ul className="list-group">
                     {Data?.length  ? (
                         <>
                          {Data?.map((value,key)=>{
                          if(value.pinned===true){
                            return(
                                <li key={key} className="list-group-item list-group-item-action d-flex justify-content-between ">
                                <span>{value.task}</span><span >{value.check ? (<AiFillStar  className=' star ' onClick={()=>{handlecheck(value.id)}}></AiFillStar>) : (<AiOutlineStar className='unstar'  onClick={()=>{handlecheck(value.id)}}></AiOutlineStar>)}
                              {value.pinned ? (<VscPinned className='pinned' title='Pinned' onClick={()=>{handlePinned(value.id)}}></VscPinned>) : (<ImCheckboxUnchecked className='unpinned' title='Pin It' onClick={()=>{handlePinned(value.id)}}></ImCheckboxUnchecked>)}</span></li>
                              )
                          }
                          
                      })}

                   
                      {Data?.map((value,key)=>{
                          
                          if(value.pinned===false){
                            return(
                                <li key={key} className="list-group-item list-group-item-action d-flex justify-content-between ">
                                <span>{value.task}</span><span >{value.check ? (<AiFillStar  className=' star ' onClick={()=>{handlecheck(value.id)}}></AiFillStar>) : (<AiOutlineStar className='unstar'  onClick={()=>{handlecheck(value.id)}}></AiOutlineStar>)}
                              {value.pinned ? (<VscPinned className='pinned' title='Pinned' onClick={()=>{handlePinned(value.id)}}></VscPinned>) : (<ImCheckboxUnchecked className='unpinned' title='Pin It' onClick={()=>{handlePinned(value.id)}}></ImCheckboxUnchecked>)}</span></li>
                              )
                          }
                          
                      })}</>
                     ) : (
                        <li  className="list-group-item list-group-item-action d-flex justify-content-between ">Waiting For New Task</li>
                     )}

                    </ul>
                   
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Taskcomp