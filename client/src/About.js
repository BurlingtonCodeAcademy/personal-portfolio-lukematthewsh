import React from 'react'
import myPhoto from './images/aboutme.png'
import hobbyPhoto from './images/hobim.png'

function About(props) {
    return (
        <div id='about-page'>
            <h1 id='about-title'>A little about me</h1>
            <div id='under-line'></div>
            <div id='about-img-wrapper'>
                <img id='about-img' src={myPhoto} alt='Luke Matthews about img' />
            </div>
            <div id='about-bio'>
                <p>Im a Junior Web Developer, I design modern web applications.</p>
                <p>I was born and raised in Vermont, more specifically the Burlington area! Currently living in the same area.  </p>
                <p>In 2018 I started attending the University of Vermont with intetions of being a Bio-Medical engineer. I quickly found out the college flow was not for me. Shortly after my first year at UVM I enrolled in Burlington Code Academy, where I found a true passion for coding!
                </p>
            </div>
        
            <h1 id='hobby-title'>Fun Stuff</h1>
            <div id='under-line'></div>
            <div id='hobby-bio'>
                <p>One thing to know about me is, although I do have my face burried in my computer most of the time, I do love the outdoors!</p>
                <p>Another thing, I really like snow... If my schedule is clear its a safe bet that I will be on a mountain somewhere!</p>
                <p>That being said, I am an avid snowboarder, mountain biker, skateboarder and runner. </p>
            </div>
            <div id='hobby-img-wrapper'>
                <img id='hobby-img' src={hobbyPhoto} alt='Luke Matthews hobby img'/>
            </div>

        </div>

    )
}

export default About