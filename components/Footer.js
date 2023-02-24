import Link from "next/link"

export default function Footer(){
    return (
        <div className="container mt-5">
            <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link href="/" className="nav-link px-2 text-muted">Portfolio</Link></li>
                        <li className="nav-item"><Link href="/sideprojects" className="nav-link px-2 text-muted">Side Projects</Link></li>
                    </ul>
                <p className="text-center text-muted">&copy; 2022 isepulveda</p>
            </footer>
       </div>
    )
}