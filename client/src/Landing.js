import React from 'react'
import ScrollIntoView from 'react-scroll-into-view';
class Landing extends React.Component {


    render() {
        return (
            <div id="landing-page">
                <div id='my-name'>

                    <h1 id='name-text'>Hi, I'm Luke,</h1>
                    <h2 id='short-bio'>a full stack web-developer!</h2>
                    <ScrollIntoView selector = '#about-page'>
                    <div id='more-button'>More About Me</div>
                    </ScrollIntoView>
                </div>


            </div>
        )
    }
}

export default Landing 