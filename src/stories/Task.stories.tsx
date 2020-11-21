import React from 'react'
import Taskcomp, { Taskcompa } from '../Components/Taskcomp'
import {Story} from '@storybook/react/types-6-0'
import '../styles/comp.css'
import '../styles/bootstrap.min.css'




export default{
    title:'Taskbox Task',
    component:Taskcomp
}


const Template:Story<Taskcompa> = (args)=><Taskcomp {...args}></Taskcomp>;


export const Default= Template.bind({});
Default.args={
    Data:[{
        id:0,
        task:'Task',
        check:false,
        pinned:false,
    }]
}

export const Checked = Template.bind({})
Checked.args={
    Data:[{
        id:0,
        task:'Task',
        check:true,
        pinned:false,
    }]
}

export const Pinned = Template.bind({})
Pinned.args={
    Data:[{
        id:0,
        task:'Task',
        check:false,
        pinned:true,
    }]
}


export const Checked_And_Pinned = Template.bind({});
Checked_And_Pinned.args={
    Data:[{
        id:0,
        task:'Task',
        check:true,
        pinned:true,
    }]
}
