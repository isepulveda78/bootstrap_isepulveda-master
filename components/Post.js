import Link from "next/link"
import Moment from 'react-moment'
import Image from "next/image"

export default function Post({post}){
    return (
        <div className="row mt-5">
            <div className="col-md-4">
                <Moment format="MMMM d, YYYY" date={ post.date } className="mt-2"/>
            </div>
       
            <div className="col-md-8">
                <h2><Link href={post.acf.website} target="_blank" className="text-decoration-none fs-4 fw-bold text-dark">{ post.title.rendered }</Link></h2>
                    <div>
                        <Link href={post.acf.website} target="_blank" className="text-decoration-none fs-4 fw-bold text-dark">
                            <Image src={post.thumbnail} width={1366} height={625} alt={post.title.rendered} className="card-img-top img-fluid rounded-3 shadow-lg" />
                        </Link>
                    </div>
            </div>
         </div>
    )
}