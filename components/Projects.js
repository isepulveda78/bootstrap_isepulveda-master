import Link from "next/link"
import Image from "next/image"

export default function Projects(){
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="card" style="width: 18rem;">
                    <Image src="..." className="card-img-top" alt="..."></Image>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link href="/" className="text-secondary">Check it out</Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}