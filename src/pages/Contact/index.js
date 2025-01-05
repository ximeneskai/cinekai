import styles from './Contact.module.css'

function Contact() {
    return (
        <>
        <div className={styles.container}>
            <h1>Entre em contato:</h1>
            <form className={styles.container} action="https://formsubmit.co/kaiximenes@outlook.com" method="POST">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder='Insira seu nome' required="" />
        
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" placeholder='Insira seu email' required="" />
        
                    <label for="assunto">Assunto:</label>
                    <input type="text" id="assunto" name="assunto" placeholder='Insira o assunto' required="" />

                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="5" placeholder='Digite a mensagem aqui...' required=""></textarea>

                    <button type="submit">Enviar</button>
            </form>
        </div>
        
        </>
    )
}

export default Contact;