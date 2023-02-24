import Head from "next/head"
export default function Layout({ title, children, keywords, description }) {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description"  content={description} />
            <meta name="google-site-verification" content="yyYlLEoaO9AolgBQsDRzolh83aoeNvfNVBmYYoQSaNQ" />
            <link rel="icon" href='favicon.ico'></link>
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
    keywords: "",
    description: ''
}