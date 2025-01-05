import { useCards } from '../../context/CardContext';
import BlueLine from '../BlueLine';
import ItemDestaque from '../ItemDestaque';
import styles from './Banner.module.css'

function Banner() {

    const { cards } = useCards();
    const randomCard = cards.length > 0 ? cards[Math.floor(Math.random() * cards.length)] : null;

    return (
        <>
            <section className={styles.container}>

                {randomCard ? (
                    <div className={styles.banner}
                        style={{backgroundImage: `url(${randomCard.imagem})`,
                                backgroundSize: 'cover',
                                backgroundBlendMode: 'multiply',
                                backgroundColor: 'rgba(0, 0, 0, 0.85)'}}
                    >
                        <ItemDestaque card={randomCard} />
                    </div> 
                    ) : (
                    <div className={styles.banner}>
                        <p>Nenhum vídeo disponível. Adicione um vídeo para começar!</p>
                    </div>
                )}
                
            </section>
            <BlueLine />
        </>
        
    )
}

export default Banner;