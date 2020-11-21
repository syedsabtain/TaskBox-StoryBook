import React from 'react';
import './App.css';
import './cssjs/bootstrap.min.css'
import '../src/styles/comp.css'

import { useState } from 'react';

import Taskbox from './Components/Taskcomp'
import { useForm } from 'react-hook-form';

function App() {

  
    let[id,setId] = useState(0)
    type Taskc= {
        id:number,
        task:string,
        check:boolean,
        pinned:boolean,
    }
    interface Testt{
      Data:Taskc[]
    }
    let[data,setData] = useState<Testt|any>([])

    type Taskcom ={
      task:string
  }
    const {register,errors,handleSubmit,reset}  = useForm<Taskcom>()
    const HandleSubmit = handleSubmit(({task})=>{


      setId(++id)

      setData([...data,{ 
          id:id,
          task:task,
      check:false,
      pinned:false,}])

      reset()
      
  }) 
  const handlecheck=(id:number)=>{

     
    let result:Testt = data?.map((value:Taskc)=>{
     if(value?.id===id){
         return{
             ...value,
             check:!value?.check
         }
     }
     else{
         return value
     }

 })

 setData(result)
 }
 const handlePinned=(id:number)=>{
     let result = data?.map((value:any)=>{
         if(value.id===id){
             return{
                 ...value,
                 pinned:!value.pinned
             }
         }
         else{
             return value
         }
     })
     
    setData(result)
  
 }
 

  return (
    <div className='container text-center  mt-5 '>
         <div className='row d-flex justify-content-center'>
           <div className='col-md-6 mt-5'>
           <h1>TaskBox</h1>
                    <form onSubmit={HandleSubmit} className='mt-3'>
                        <div className="form-group">
                            
                            <input type="text" className="form-control" name='task' id="exampleInputEmail1"
                                placeholder="Enter Here" ref={register({required:true})} />
                                {errors.task && errors.task.type==='required'&&(
                                    <h6 className='mt-4 mb-4'> *This Field is Required</h6>
                                )}

                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                    <br/>
                    
           </div>
         </div>
         <Taskbox Data={data} handlePinned={handlePinned} handlecheck={handlecheck}></Taskbox>

    </div>
  );
}

export default App;
