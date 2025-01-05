import { useState } from 'react';
import { useCards } from '../../context/CardContext'; // Importando o hook do contexto
import Card from '../Card';
import TitleClass from '../TitleClass';
import ModalZoom from '../ModalZoom'; // Certifique-se de importar o modal
import styles from './Section.module.css';

function Section({ titulo }) {
  const { cards, updateCard, deleteCard } = useCards(); // Adicione `updateCard` ao contexto se ainda não existir
  const [modalAberto, setModalAberto] = useState(false);
  const [cardSelecionado, setCardSelecionado] = useState(null);

  // Mapeamento de cores para as categorias
  const categoriaCores = {
    Romance: 'rgba(255, 99, 71, 0.5)',
    Comédia: 'rgba(255, 215, 0, 0.5)',
    Terror: 'rgba(139, 0, 0, 0.5)',
    Ação: 'rgba(34, 139, 34, 0.5)',
    Música: 'rgba(30, 144, 255, 0.5)',
    Drama: 'rgba(128, 0, 128, 0.5)',
    Animação: 'rgba(255, 69, 0, 0.5)',
    Suspense: 'rgba(0, 0, 139, 0.5)',
    Infantil: 'rgba(255, 20, 147, 0.5)',
    Ficção: 'rgba(138, 43, 226, 0.5)',
    Fantasia: 'rgba(0, 250, 154, 0.5)',
    Histórico: 'rgba(214, 105, 30, 0.5)',
    Guerra: 'rgba(178, 34, 34, 0.5)',
    Mistério: 'rgba(165, 42, 42, 0.5)',
    Thriller: 'rgba(220, 20, 60, 0.5)',
    Policial: 'rgba(0, 100, 0, 0.5)',
    Documentário: 'rgba(255, 215, 0, 0.5)',
  };

  // Cor da categoria
  const corCategoria = categoriaCores[titulo] || '#FFFFFF'; // Padrão: branco, se a categoria não for encontrada

  const abrirModal = (card) => {
    console.log('Card selecionado:', card); // Debug para verificar o conteúdo do card
    setCardSelecionado(card);
    setModalAberto(true);
};

  const fecharModal = () => {
    setModalAberto(false);
    setCardSelecionado(null);
  };

  const salvarAlteracoes = async (dadosAtualizados) => {
    if (!cardSelecionado || !cardSelecionado.id) {
        console.error('Card selecionado não tem ID:', cardSelecionado);
        alert('Erro ao salvar: card inválido.');
        return;
    }

    const sucesso = await updateCard(cardSelecionado.id, dadosAtualizados);
    if (sucesso) {
        alert('Card atualizado com sucesso!');
        fecharModal();
    } else {
        alert('Erro ao atualizar o card. Tente novamente.');
    }
  };

  return (
    <section className={styles.container}>
      <TitleClass titulo={titulo} corCategoria={corCategoria} />
      <div className={styles.carrossel}>
        {/* Filtra os cards pela categoria e renderiza */}
        {cards.filter((card) => card.categoria === titulo).map((card, index) => (
          <Card
            key={index}
            {...card}
            corCategoria={corCategoria}
            onEdit={abrirModal} 
            deleteCard={deleteCard}
          />
        ))}
      </div>

      {/* Renderiza o modal */}
      <ModalZoom
        isOpen={modalAberto}
        onClose={fecharModal}
        onSave={salvarAlteracoes}
        cardData={cardSelecionado}
      />
    </section>
  );
}

export default Section;
