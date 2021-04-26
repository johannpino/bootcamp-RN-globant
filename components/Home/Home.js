import Link from 'next/link'

const Home = () => {
    return (
        <div>
            <h1 class="title">Bienvenido a tu pokedex.</h1>
            <p class="paragraph">
            Aqui encontraras informacion sobre todos los pokemon
             </p>
            <div class="buttons-div">

                <Link href="/explore">
                  <button class="button button1">Explorar</button>
                </Link>

                <Link href="/info">
                  <button class="button button2">Saber mas</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Home
