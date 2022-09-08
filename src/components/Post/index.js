import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { MdVerified } from 'react-icons/md'

export function Post() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/14/06/2560x2560/square_tech-mark-zuckerberg.jpg" />

                    <p>zuck <span><MdVerified /></span></p> 
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://cdn.vox-cdn.com/thumbor/HEeDWCewhBlypxLbbYbkBfmDc6w=/0x0:1080x718/1200x800/filters:focal(477x288:649x460)/cdn.vox-cdn.com/uploads/chorus_image/image/71263353/300017093_10114630004939621_5854109382330704814_n.0.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>Liked by neymarjr and others</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>zuck <MdVerified /></span> Major updates to Horizon and avatar graphics coming soon. I'll share more at Connect. Also, I know the photo I posted earlier this week was pretty basic -- it was taken very quickly to celebrate a launch. The graphics in Horizon are capable of much more -- even on headsets -- and Horizon is improving very quickly.
                    </p>
                </div>

                <div className="time-post" >
                    <time>SEPTEMBER 8</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Add a comment..." />
                    </div>

                    <button>Post</button>

                </div>
            </div>
        </>

    )
}