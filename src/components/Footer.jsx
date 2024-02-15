import React from "react"
import githubLogo from "../images/github-logo.png"
import { VscGithubInverted } from "react-icons/vsc";
function Footer (){
    return(
        <div className="footer">
            
             <a href="https://github.com/SantosMatheusSilva/GrubHub-CookBook"><VscGithubInverted className="github-logo" style={{width: "30px", height: "30px"}} /><p>Check the code.</p></a>
            </div>
    )
}
export default Footer