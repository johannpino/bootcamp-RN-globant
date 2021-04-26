const Hamburger = (props) => {
    return (
        <div className="hamburger">
            <div className={props.isActive ? "line line-1" : "line"}></div>
            <div className={props.isActive ? "line line-2" : "line"}></div>
            <div className={props.isActive ? "line line-3" : "line"}></div>
        </div>
    )
}

export default Hamburger
