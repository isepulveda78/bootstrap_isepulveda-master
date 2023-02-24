import Image from "next/image"
import Layout from "components/Layout"
import NavBar from "components/NavBar"
import Footer from "components/Footer"
export default function Projects(){
    return (
        <>
            <Layout>
                <NavBar />
                <div className="mt-5 p-3">
                    <div className="row g-0">
                            <div className="d-flex justify-content-start">
                                    <Image src="/img/isepulveda.png" className="img-fluid" alt="Israel Sepulveda" width={70} height={70}></Image>
                                    <p className="ms-2 mt-2 text-dark">Work by: Israel Sepulveda <br/>January 31, 2022</p>
                            </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h1 className="fw-bold">How to create a website with React.js?</h1>
                </div>
                <div className="mt-5 portfolio-text">
                    <div className="my-5">

                    </div>
                    <p className="lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Pretium aenean pharetra magna ac. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Dictum sit amet 
                    justo donec enim diam vulputate. Imperdiet proin fermentum leo vel orci porta non. Neque aliquam vestibulum morbi blandit 
                    cursus risus at ultrices mi. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Pulvinar sapien et ligula 
                    ullamcorper malesuada proin. Tristique risus nec feugiat in. A cras semper auctor neque vitae tempus quam pellentesque. Tempor 
                    id eu nisl nunc. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Rhoncus est pellentesque elit ullamcorper dignissim.</p>

                    <p className="lh-lg">Nulla at volutpat diam ut venenatis tellus. Fames ac turpis egestas sed tempus. Feugiat scelerisque varius morbi enim nunc faucibus a 
                    pellentesque. Augue neque gravida in fermentum. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Urna cursus eget nunc 
                    scelerisque viverra mauris. Quis vel eros donec ac. Sapien faucibus et molestie ac. In aliquam sem fringilla ut morbi tincidunt augue 
                    interdum velit. Sed tempus urna et pharetra pharetra massa massa ultricies. Tellus rutrum tellus pellentesque eu. Euismod in pellentesque 
                    massa placerat duis ultricies lacus sed turpis.</p>

                    <p className="lh-lg">Ultricies integer quis auctor elit sed. Convallis convallis tellus id interdum velit laoreet. Odio tempor orci dapibus ultrices in iaculis 
                    nunc sed augue. Magnis dis parturient montes nascetur ridiculus. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. 
                    Tortor dignissim convallis aenean et tortor at risus. Sed blandit libero volutpat sed. Velit euismod in pellentesque massa placerat duis 
                    ultricies lacus sed. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. 
                    Sed libero enim sed faucibus turpis. Tellus orci ac auctor augue mauris augue neque gravida. Vel elit scelerisque mauris pellentesque pulvinar 
                    pellentesque.</p>
            
                </div>
                <Footer />
            </Layout>
        </>
    )
}