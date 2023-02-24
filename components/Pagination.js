import Link from "next/link"
export default function Pagination(){
    return (
        <>
            <div className="row text-center mt-5">
                <div className="col-md-6">
                    <Link href="/" className="text-secondary text-decoration-none">← Previous</Link>
                </div>
                <div className="col-md-6">
                    <Link href="/" className="text-secondary text-decoration-none"> Next →</Link>
                </div>
            </div>
        </>
    )
}