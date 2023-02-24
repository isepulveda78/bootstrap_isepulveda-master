import Head from "next/head"
export default function Layout({ title, children, keywords, description }) {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description"  content={description} />
        </Head>
        <main>
            <div className="container">
                {children}
            </div>
        </main>
        </>
    )
}

Layout.defaultProps = {
    title: 'isepulveda',
    keywords: "Israel Sepulveda's Web Portfolio",
    description: 'Web Applications built by Israel Sepulveda'
}