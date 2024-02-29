import Link from 'next/link'
import { Router, useRouter } from 'next/router'

const NavBarNoAuth = () => {
    const router = useRouter()
    const GoToLogIn =() =>{
        router.push("login")
    }

    return (
        <div>
        
        <div>
            <h2>
                Logo
            </h2>
            <Link href="..">Home</Link>
            <Link href="#">Contact Us</Link>
            <div>
                <ul>
                    <li >Profile</li>
                    <li onClick={GoToLogIn}>LogIn</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default NavBarNoAuth