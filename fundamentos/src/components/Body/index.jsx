import Card from "./Card"

import styles from "./Body.module.css"

function Body(){
    const usuarios = [
        {nome:"Júlia", idade:17, cidade:"Florianópolis"},
        {nome:"Vianna", idade:18, cidade:"São Paulo"},
        {nome:"Dancona", idade:19, cidade:"Rio de Janeiro"},
    ]

    return(
        <main className={styles.body}>
        <h2>Usuários Cadastrados : </h2>
        <div className={styles.cardContainer}>
        <Card />
        </div>
        </main>
    )
}

export default Body