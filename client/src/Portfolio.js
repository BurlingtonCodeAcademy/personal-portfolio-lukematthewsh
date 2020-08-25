import React from 'react'

class Portfolio extends React.Component {
    handleClick = () => {
        // do something meaningful, Promises, if/else, whatever, and then
        window.location.assign('http://luke-yelp.herokuapp.com/');
    }
    render() {



        return (
            <div id='portfolio-page'>

                <h1 id='project-title'>What I've done so far</h1>
                <div id='under-line'></div>


                <div id="flyin-project">
                    <div className='flip-card'>
                        <div className="flip-card-inner">
                            <div id='flip-card-front-flyin'>
                                <div className='projTitle'>Flyin Ryan</div>
                            </div>
                            <div className='flip-card-back'>
                                <h2>Flyin Ryan</h2>
                                <p className='blurb'>Basically Yelp for the city of Burlington!</p>
                                <p className="author">Created by: Luke Matthews</p>
                                <br></br>
                                <button className="project-button" onClick={this.handleClick.bind(this)}>Click Me!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id = "cap">

                <p></p>
                </div>
                

                    <div id='yelp-project'>
                        <div className='flip-card'>
                            <div className="flip-card-inner">
                                <div id='flip-card-front-yelp'>
                                    <div className='projTitle'>Yelpington</div>
                                </div>
                                <div className='flip-card-back'>
                                    <h2>Yelpington</h2>
                                    <p className='blurb'>Basically Yelp for the city of Burlington!</p>
                                    <p className="author">Created by: Luke Matthews</p>
                                    <br></br>
                                    <button className="project-button" onClick={this.handleClick.bind(this)}>Click Me!</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='tic-project'>
                        <div className='flip-card'>
                            <div className="flip-card-inner">
                                <div id='flip-card-front-tic'>
                                    <div className='projTitle'>Tic Tac Toe</div>
                                </div>
                                <div className='flip-card-back'>
                                    <h2>Tic Tac Toe</h2>
                                    <p className='blurb'>Tic Tac Toe (aka "Noughts and Crosses") is a simple game played between two players on a 3x3 grid.</p>
                                    <p className="author">Created by: Luke Matthews</p>
                                    <button className="project-button">Click Me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='remock-project'>
                        <div className='flip-card'>
                            <div className="flip-card-inner">
                                <div id='flip-card-front-remock'>
                                    <div className='projTitle'>Remock</div>
                                </div>

                                <div className='flip-card-back'>
                                    <h2>Remock</h2>
                                    <p className='blurb'> Remock was extaclty what it sounds like. Given screen shots of a webpage we then constructed our own version.</p>
                                    <p className="author">Created by: Luke Matthews and Josh Jakab</p>
                                    <button className="project-button">Click Me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='geo-project'>
                        <div className='flip-card'>
                            <div className="flip-card-inner">
                                <div id='flip-card-front-geo'>
                                    <div className='projTitle'>Geo Vermonter</div>
                                </div>
                                <div className='flip-card-back'>
                                    <h2>Geo Vermonter</h2>
                                    <p className='blurb'>Geo Vermonter! You know the game GeoGuesser, well this is essentially that, just confined to the lovely state of Vermont.  </p>
                                    <p className="author">Created by: Paul Phelps and Luke Matthews</p>
                                    <button className="project-button">Click Me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Portfolio