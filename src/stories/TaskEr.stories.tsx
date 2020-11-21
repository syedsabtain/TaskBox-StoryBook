import React from 'react'
import {Story} from '@storybook/react/types-6-0'
import Taskcomp, { Taskcompa } from '../Components/Taskcomp'
import '../styles/bootstrap.min.css'



export default{
    title:"Tasbox Empty",
    component:Taskcomp
}


const Template:Story<Taskcompa>=(args)=><Taskcomp {...args}></Taskcomp>

export const Empty_Task = Template.bind({})
Empty_Task.args={
    Data:[]
}