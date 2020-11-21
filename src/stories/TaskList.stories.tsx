import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0';
import Taskbox,{Taskcompa} from '../Components/Taskcomp'
import '../styles/comp.css'
import '../styles/bootstrap.min.css'


export default{
    title:"TaskBox List",
    component:Taskbox,
}

const Template:Story<Taskcompa> =(args)=><Taskbox {...args}></Taskbox>;

export const Default = Template.bind({});
Default.args={
    Data:[ {
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
    }]
       
    
}

export const Checked = Template.bind({});
Checked.args={
    Data:[{
        id:0,
        task:"Checked Task",
        pinned:false,
        check:true
    },
    {
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
    }]
}

export const Pinned = Template.bind({});
Pinned.args={
    Data:[
    {
        id:1,
        task:"Task ",
        pinned:false,
        check:false
    },
    {
        id:2,
        task:"Task ",
        pinned:false,
        check:false
    },
    {
        id:3,
        task:"Task ",
        pinned:false,
        check:false
    },{
        id:0,
        task:"This Is Pinned",
        pinned:true,
        check:false
    },
]
}

export const Checked_and_Pinned = Template.bind({});
Checked_and_Pinned.args ={
    Data:[{
        id:0,
        task:"checked and Pinned",
        pinned:true,
        check:true
    },
    {
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
    }]
}

export const Multiple_Checked = Template.bind({});
Multiple_Checked.args ={
    Data:[{
        id:0,
        task:"Multiple Checked Tasks",
        pinned:false,
        check:true
    },
    {
        id:1,
        task:" Task",
        pinned:false,
        check:false
    },
    {
        id:2,
        task:" Task",
        pinned:false,
        check:true
    },
    {
        id:3,
        task:" Task",
        pinned:false,
        check:true
    }]
}

export const Multiple_Pinned = Template.bind({});
Multiple_Pinned.args ={
    Data:[{
        id:0,
        task:"Multiple Pinned Tasks",
        pinned:true,
        check:false
    },
    {
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
        pinned:true,
        check:false
    }]
}
export const Multiple_Checked_And_Pinned = Template.bind({});
Multiple_Checked_And_Pinned.args ={
    Data:[{
        id:0,
        task:"Multiple Checked And Pinned Tasks",
        pinned:true,
        check:true
    },
    {
        id:1,
        task:" Task",
        pinned:false,
        check:false
    },
    {
        id:2,
        task:" Task",
        pinned:true,
        check:true
    },
    {
        id:3,
        task:" Task",
        pinned:true,
        check:true
    }]
}

export const Fullly= ()=>{

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