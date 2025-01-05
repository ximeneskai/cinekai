import { useState, useEffect } from 'react';
import styles from './Form.module.css';
import { useCards } from '../../context/CardContext';
import { useNavigate, useParams } from 'react-router-dom';

function Form() {
    const { id } = useParams(); // Pegue o ID do card pela URL, se aplicável
    const navigate = useNavigate();
    const { cards, addCard, salvarAlteracoes } = useCards();
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        imagem: '',
        video: '',
        descricao: ''
    });

    // Preenche o formulário ao carregar o card selecionado
    useEffect(() => {
        if (id) {
            const cardToEdit = cards.find((card) => card.id === parseInt(id, 10));
            if (cardToEdit) {
                setFormData(cardToEdit);
            }
        }
    }, [id, cards]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            // Atualizar um card existente
            await salvarAlteracoes(id, formData);
        } else {
            // Criar um novo card
            await addCard(formData);
        }
        navigate('/'); // Redireciona para a home após salvar
    };

    const handleReset = () => {
        setFormData({
            titulo: '',
            categoria: '',
            imagem: '',
            video: '',
            descricao: ''
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{id ? 'EDITAR VÍDEO' : 'NOVO VÍDEO'}</h1>
            <p className={styles.subtitle}>
                {id
                    ? 'Atualize as informações do card de vídeo.'
                    : 'Complete o formulário para criar um novo card de vídeo.'}
            </p>
            
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="titulo">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        placeholder="Insira o título"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        required
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
                        <option value="Documentário">Documentário</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label htmlFor="imagem">Imagem</label>
                    <input
                        type="text"
                        id="imagem"
                        name="imagem"
                        value={formData.imagem}
                        onChange={handleChange}
                        placeholder="Cole o link da imagem"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="video">Vídeo</label>
                    <input
                        type="text"
                        id="video"
                        name="video"
                        value={formData.video}
                        onChange={handleChange}
                        placeholder="Cole o link do vídeo"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        placeholder="Sobre o que é esse vídeo?"
                        required
                    />
                </div>

                <div className={styles.actions}>
                    <button type="submit" className={styles.saveButton}>Guardar</button>
                    <button type="button" className={styles.resetButton} onClick={handleReset}>Limpar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
