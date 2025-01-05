import Banner from '../../components/Banner';
import Section from '../../components/Section';


function Home() {
    const categorias = ['Romance', 'Comédia', 'Terror', 'Ação', 'Música', 'Drama', 'Animação', 'Suspense', 'Infantil'];
    return (
        <>
             <Banner />
            {categorias.map((categoria, index) => (
            <Section key={index} titulo={categoria} />
      ))}        
        </>
    )
}

export default Home;