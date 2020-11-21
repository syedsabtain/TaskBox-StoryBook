import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Footer from '../Components/Footer';
import Taskbox from '../Components/Taskcomp'
import '../App.css'
import '../index.css'

export default {
    title : 'TaskBox Fully Functional',
    component : Taskbox
}

export const Default= ()=>{

    let[dataa,setDataa] = useState([ {
        id:0,
        task:'Task',
        check:false,
        pinned:false,
    },{
        id:1,
        task:" Task",
        pinned:false,
        check:false
    },
    {
        id:2,
        task:" Task",
        pinned:false,
        check:false
    },
    {
        id:3,
        task:" Task",
        pinned:false,
        check:false
    }]);
    const handlecheck=(id:number)=>{
    
         
        let result = dataa?.map((value)=>{
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
    
     setDataa(result)
     }
     const handlePinned=(id:number)=>{
         let result = dataa?.map((value:any)=>{
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
         
        setDataa(result)
      
     }

     return(
         <Taskbox Data={dataa} handlePinned={handlePinned} handlecheck={handlecheck}></Taskbox>
     )
   
}
export const Complete_Website= ()=>{

    let[dataa,setDataa] = useState([ {
        id:0,
        task:'Task',
        check:false,
        pinned:false,
    },{
        id:1,
        task:" Task",
        pinned:false,
        check:false
    },
    {
        id:2,
        task:" Task",
        pinned:false,
        check:false
    },
    ]);
    const handlecheck=(id:number)=>{
    
         
        let result = dataa?.map((value)=>{
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
    
     setDataa(result)
     }
     const handlePinned=(id:number)=>{
         let result = dataa?.map((value:any)=>{
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
         
        setDataa(result)
      
     }
    let[id,setId] = useState(2)

     type Taskcom ={
        task:string
    }
      const {register,errors,handleSubmit,reset}  = useForm<Taskcom>();
      const HandleSubmit = handleSubmit(({task})=>{


        setId(++id)
  
        setDataa([...dataa,{ 
            id:id,
            task:task,
        check:false,
        pinned:false,}])
  
        reset()
        
    }) 
     return(
        <div className='container text-center  mt-5 '>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-6 mt-5 bgmain'>
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
        <Taskbox Data={dataa} handlePinned={handlePinned} handlecheck={handlecheck}></Taskbox>

    <Footer></Footer>                                    
   </div>
     )
   
}