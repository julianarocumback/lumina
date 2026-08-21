import { Link } from "react-router-dom";

export default function Logo() {
    const handleScrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
      });
    }
  };
    return (
        <Link to='/' onClick={handleScrollToTop}>
            <div className="hidden lg:flex">
                <h1 className="hidden text-lg bg-linear-to-r from-[#2563EB] via-[#A855F7] to-[#EF4444] font-bold bg-clip-text text-transparent lg:block lg:text-xl">Lumina</h1>
            </div>
            <div className="lg:hidden">
                <i className="fa-solid fa-house"></i>
            </div>
        </Link>
    )
}