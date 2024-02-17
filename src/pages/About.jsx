import GHlogo from '../images/github-logo.png'
import LIlogo from '../images/LinkedIn-logo.png'

function About() {
    return (
        <section className="About">
            <div className='About-container'>
                <h1>About</h1>
                <p>
                    GrubHub Recipe Book is the ultimate digital cooking companion for culinary enthusiasts who love to create, store, and share their favorite recipes.
                    Whether you're a seasoned chef or a home cook, our user-friendly app provides a convenient platform to organize your culinary creations in one place.
                    From comprehensive ingredient lists to step-by-step cooking instructions and handy cooking timers, GrubHub Recipe Book empowers you to unleash your creativity in the kitchen.
                    Share your culinary masterpieces with friends and family, plan your meals, and streamline your grocery shopping with personalized shopping lists.
                    Join our community of food lovers and elevate your cooking experience with GrubHub Recipe Book.
                </p>
            </div>
            <div>
                <h2>How to use</h2>
                <p>
                    Use the Navbar at the top of the page to move between different sections. Whether you're searching for appetizers, mains, or desserts, the Navbar has got you covered.
                    Scroll up and down to explore the wide variety of recipes available. From classic comfort foods to exotic dishes, there's something for every taste bud.
                    Have a favorite recipe you'd like to share? Click on the "Add Recipe" button to contribute your culinary creations to our community cookbook.
                </p>
            </div>
            <h2>Developers</h2>
            <div className="Developers">
                <div className="dev1">
                    <p><strong>
                        Matheus Santos
                    </strong></p>
                    <div className="Links">
                        <a href="https://github.com/SantosMatheusSilva"><img className="about-gh" src={`${GHlogo}`}></img></a>
                        <a href="https://www.linkedin.com/in/math-s-santos/"><img className="about-li" src={`${LIlogo}`}></img></a>
                    </div>
                </div>
                <div className="dev2">
                    <p><strong>
                        Daniel Costa
                    </strong></p>
                    <div className="Links">
                        <a href="https://github.com/dannielcosta"><img className="about-gh" src={`${GHlogo}`}></img></a>
                        <a href="https://www.linkedin.com/in/daniel-costa-144924153/"><img className="about-li" src={`${LIlogo}`}></img></a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;