import React from 'react'
import reactlogo from './images/reactlogo.png'
import javalogo from './images/js.png'
import csslogo from './images/csslogo.png'
import htmllogo from './images/html5-512.png'
import nodelogo from './images/node-512.png'



class Mid extends React.Component{

    render(){
    return(
        <div id = 'stack-container'>
            <img id ='javalogo' src = {javalogo}/>
            <img id = 'csslogo' src = {csslogo}/>
            <img id = 'reactlogo' src = {reactlogo} />
            <img id = 'htmllogo'src = {htmllogo}/>
            <img id = 'nodelogo' src = {nodelogo}/>

        </div>
    )

    }
}
export default Mid