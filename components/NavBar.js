import Link from "next/link"
import Image from "next/image"
export default function NavBar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container bg-transparent">
                <div className="navbar-brand"><Link className="pacifico fs-2 ms-2 text-decoration-none text-dark" href="/"><Image src="/img/isepulveda.png" className="img-fluid" width={100} height={100} alt="isepulveda"></Image>{" "}isepulveda</Link></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" href="/">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" href="/sideprojects">Side Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
        </>
    )
}