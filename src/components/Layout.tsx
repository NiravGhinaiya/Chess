import Header from './Header'

export default function Layout({ children }: any): JSX.Element {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
