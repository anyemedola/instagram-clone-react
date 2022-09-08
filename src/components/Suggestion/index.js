import { useEffect, useState } from 'react'
import './style.css'

export function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/anyemedola/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])

    

    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://avatars.githubusercontent.com/u/61008693?v=4`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>anyemedola</span>
                        <p>Any Elis Mendonça Medola</p>
                    </div>

                    <button className="switch" >Switch</button>

                </div>
            </div>

            <div className="header-main-suggestion" >

                <p>Suggestions For You</p>

                <span>See All</span>

            </div>

            <div className="user-suggestion" >

                {slice.map((suggestion, key) => (
                     <div className="infos-suggestion" key={key}>
                        <img src={`https://github.com/${suggestion.login}.png`} />
    
                        <div className="info-suggestion" >
                            <span>{suggestion.login}</span>
                            <p>New to instagram</p>
                        </div>
    
                        <button className='follow' >Follow</button>
                    </div>
                ))}
               

            </div>

            <footer className="footer-suggestion" >
                <p>About &bull; Help &bull; Press &bull; API &bull; Jobs &bull; Privacy &bull; Terms &bull; Location &bull; Language </p>

                <p>&copy; 2021 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )
}