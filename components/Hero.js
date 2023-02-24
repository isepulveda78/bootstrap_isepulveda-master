export default function Hero({header, description}){
    return (
        <>
            <div className="text-start mt-5">
                <h1 className="text-dark latest-projects">{header}</h1>
                <p className="text-light">{description}</p>
                <p></p>
                <hr />
            </div>
        </>
    )
}

Hero.defaultProps = {
    header: '',
    description: ""
}