import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/ViniciusGomes2006.png" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>José Augusto</strong>

                            <time title='11 de Maio às 08:13h' dateTime='11-05-2022 14:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    
                    <p>Muito bom Vinicius, parabéns 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp /> <span>Aplaudir・20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}