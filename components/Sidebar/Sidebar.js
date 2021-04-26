import Link from 'next/link'

const Sidebar = (props) => {
    return (
        <div className={props.isActive ? "sidebar-div sidebar-div-active" : "sidebar-div"}>
        <div className={props.isActive ? "sidebar-links sidebar-links-active" : "sidebar-links"}>

            <Link href="/">
                <a href="" className="sidebar-link">Inicio</a>
            </Link>

            <Link href="/explore">
                <a href="" className="sidebar-link">Explorar</a>
            </Link>

            <Link href="/info">
            <a href="" className="sidebar-link">Informacion</a>
            </Link>

        </div>
        <div className="close"></div>
      </div>
    )
}

export default Sidebar
