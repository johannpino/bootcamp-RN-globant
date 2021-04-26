import Link from 'next/link'

const Home = () => {
    return (
        <div>
            <h1 className="title">Bienvenido a tu pokedex.</h1>
            <p className="paragraph">
            Aqui encontraras informacion sobre todos los pokemon
             </p>
            <div className="buttons-div">

                <Link href="/explore">
                  <button className="button button1">Explorar</button>
                </Link>

                <Link href="/info">
                  <button className="button button2">Saber mas</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Home
