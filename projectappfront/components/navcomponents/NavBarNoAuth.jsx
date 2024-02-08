import Link from 'next/link'


const NavBarNoAuth = (props) => {

    const GoToLogIn =() =>{
        props.setLogIn(true)
    }

    return (
        <div>
        
        <div>
            <h2>
                Logo
            </h2>
            <Link href="#">Home</Link>
            <Link href="#">Contact Us</Link>
            <div>
                <ul>
                    <li>Profile</li>
                    <li onClick={GoToLogIn}>LogIn</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default NavBarNoAuth