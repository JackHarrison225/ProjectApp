import Link from 'next/link'


const NavBarNoAuth = () => {
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
                    <li>Logout</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default NavBarNoAuth