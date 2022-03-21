import React from 'react'
import './learn.css'

const Learn = () => {
    return (
        <>
            <div className='row mt-5 learnSection'>
                <div className='col-md-6 mb-5'>
                    <img src={require("./img/home-reputation.png")} className="w-100" />
                </div>
                <div className='col-md-6 mb-5'>
                    <h4 className='mb-3'>LEARN THEVPSYCHOLOGY OF LEADER SHIP, INFLUENCER AND MOVING PEOPLE TO ACTION  </h4>
                    <p>Leadership is the art of moving people into productive action. As you
                        become
                        a better leader you will get more opportunity, have more
                        influence, earn more income and make more impact</p>

                    <p> But whether you're tryin to lead yourself or a team, the problem you're up
                        aganist is procrastination</p>
                    <p> In most cases people don't want to move. They don't want to change
                        Thev don't want to act. And so instead thev fall victim to distractior
                        , complacency, and stalled productivily.</p>
                </div>
                <div className='col-md-6 mt-5 mb-5 learn'>
                    <img src={require("./img/Polygon34.png")} className="w-75 learn__img1 mb-5" />
                    <img src={require("./img/Path11563.png")} className="w-75 learn__img2 mb-5" />
                    <img src={require("./img/book.png")} className="w-75 ms-5 learn__img3 mb-5" />
                </div>
                <div className='col-md-6 mb-5 mt-5'>
                    <h4 className='mb-3'>NEW YORK TIMES BESTSELLING AUTHOR AND HALL OF FAME SPEAKER, RORY VADEN IS THE WORLD'S LEADING EXPERT IN THE PSYCHOLOGY LEADERSHIP AND INFLUENCE  </h4>
                    <p>Leadership is the art of moving people into productive action. As you
                        become
                        a better leader you will get more opportunity, have more
                        influence, earn more income and make more impact</p>
                    <p> In most cases people don't want to move. They don't want to change
                        Thev don't want to act. And so instead thev fall victim to distractior
                        Thev don't want to act. And so instead thev fall victim to distractior
                        , complacency, and stalled productivily.</p>
                </div>
            </div>
        </>
    )
}

export default Learn



