import './style.css'

import { MdVerified } from 'react-icons/md'

export function Story() {

    return (

        <div className="container" >

            <div className="userElements" >

                <div>
                    <img className="imageUserStory" src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/94fb4b2df9b6b5fc32e39271e1eef60f.jpeg?x-expires=1662685200&x-signature=B2G3UzUXAFSt1rbzXPQQBSLinJQ%3D"  />
                </div>

                <span>neymarjr <MdVerified/></span>
            </div>

            <div className="userElements" >

                <div style={{marginLeft: 35}}>
                    <img className="imageUserStory" src="https://static1.purebreak.com.br/articles/1/10/88/31/@/487644-bruna-marquezine-aos-27-anos-veja-sua-700x700-3.jpg"  />
                </div>

                <span>brunamarquezine <MdVerified/></span>
            </div>

            <div className="userElements closeFriends" >

                <div style={{marginLeft: 25}}>
                    <img className="imageUserStory" src="https://proimpeachment.com.br/wp-content/uploads/2022/04/Altura-e-peso-da-Bruna-Biancardi.jpeg"  />
                </div>

                <span>brunabiancardi <MdVerified/></span>
            </div>

            <div className="userElements" >

                <div style={{marginLeft: 25}}>
                    <img className="imageUserStory" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/03d5d030c184b11d91b06a85fa72deb8~c5_720x720.jpeg?x-expires=1662818400&x-signature=c%2BSyINpHYARD0Dl%2FaaoxaREJkWI%3D"  />
                </div>

                <span>vanessalopesr_ <MdVerified/></span> 
            </div>
            

        </div>

    )

}