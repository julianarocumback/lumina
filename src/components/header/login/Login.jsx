import { Link } from "react-router-dom"


export default function Login() {
    return (
        <Link to='/user'>
            <div className='hidden md:block lg:text-xl'>
                <i className="fa-regular fa-circle-user"></i>
            </div>
        
        </Link>
    )
}