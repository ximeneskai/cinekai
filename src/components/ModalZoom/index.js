import { useState, useEffect } from 'react';
import styles from './ModalZoom.module.css';

function ModalZoom({ isOpen, onClose, onSave, cardData }) {
    const [titulo, setTitulo] = useState('');
    const [imagem, setImagem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [video, setVideo] = useState('');

    // Atualiza os campos do formulário quando o cardData muda
    useEffect(() => {
        if (cardData) {
            setTitulo(cardData.titulo || '');
            setImagem(cardData.imagem || '');
            setDescricao(cardData.descricao || ''); 
            setCategoria(cardData.categoria || '');
            setVideo(cardData.video || ''); 
        }
    }, [cardData]);

    const handleSave = async () => {
        const updatedCard = { 
            ...cardData, 
            titulo, 
            imagem, 
            descricao, 
            categoria, 
            video 
        };

        const success = await onSave(updatedCard);
        if (success) {
            onClose(); // Fecha o modal apenas se salvar com sucesso
        } else {
            alert('Erro ao salvar o card. Tente novamente.');
        }
    };

    return (
        isOpen && (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <h1>EDIÇÃO DO VÍDEO</h1>
                    
                    <label>
                        <h2>Título:</h2>
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </label>
                    
                    <label>
                        <h2>Descrição:</h2>
                        <textarea
                            rows="3"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </label>
                    
                    <label>
                        <h2>URL do Vídeo:</h2>
                        <input
                            type="text"
                            value={video}
                            onChange={(e) => setVideo(e.target.value)}
                        />
                    </label>
                    
                    <label>
                        <h2>URL da Imagem:</h2>
                        <input
                            type="text"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        />
                    </label>

                    <label>
                        <h2>Categoria:</h2>
                        <select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="Romance">Romance</option>
                            <option value="Comédia">Comédia</option>
                            <option value="Terror">Terror</option>
                            <option value="Ação">Ação</option>
                            <option value="Música">Música</option>
                            <option value="Drama">Drama</option>
                            <option value="Animação">Animação</option>
                            <option value="Suspense">Suspense</option>
                            <option value="Infantil">Infantil</option>
                            <option value="Ficção">Ficção</option>
                            <option value="Fantasia">Fantasia</option>
                            <option value="Histórico">Histórico</option>
                            <option value="Guerra">Guerra</option>
                            <option value="Mistério">Mistério</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Policial">Policial</option>
                            <option value="Documentário">Documentário</option>
                        </select>
                    </label>
                    
                    <div className={styles.buttons}>
                        <button onClick={handleSave} className={styles.saveButton}>Salvar</button>
                        <button onClick={onClose} className={styles.cancelButton}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    );
}

export default ModalZoom;
