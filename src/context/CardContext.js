import { createContext, useContext, useEffect, useState } from "react";

// Criação do contexto
const CardContext = createContext();

// Hook para usar o contexto
export const useCards = () => {
    return useContext(CardContext);
}

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/filmes')
            .then((response) => response.json())
            .then((data) => setCards(data))
            .catch((error) => console.error('Erro ao buscar os filmes:', error));
    }, []);

    const addCard = (newCard) => {
        return fetch('http://localhost:3001/filmes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCard),
        })
            .then((response) => response.json())
            .then((data) => {
                setCards((prevCards) => [...prevCards, data]);
                alert('Card adicionado com sucesso!');
                return true; // Indica sucesso
            });
    };
    

    const updateCard = (id, cardAtualizado) => {
        console.log('ID enviado para atualização:', id); // Verifique o ID
        console.log('Dados enviados:', cardAtualizado);
    
        return fetch(`http://localhost:3001/filmes/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cardAtualizado),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro ao atualizar: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                setCards((prevCards) =>
                    prevCards.map((card) => (card.id === id ? data : card))
                );
                console.log('Card atualizado com sucesso:', data);
                alert('Card atualizado com sucesso!');
                return true; // Indica sucesso
            })
            .catch((error) => {
                console.error('Erro na atualização:', error.message);
                alert('Erro ao atualizar o card. Por favor, tente novamente.');
                return false; // Indica falha
            });
    };

    const deleteCard = (id) => {
        return fetch(`http://localhost:3001/filmes/${id}`, { method: 'DELETE' })
            .then(() => {
                setCards((prevCards) => prevCards.filter((card) => card.id !== id));
                alert('Card deletado com sucesso!');
                return true; // Indica sucesso
            });
    };

    return (
        <CardContext.Provider value={{ cards, addCard, updateCard, deleteCard }}>
            {children}
        </CardContext.Provider>
    );
};
