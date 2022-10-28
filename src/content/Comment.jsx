import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, deleteComment }) {
    const [like, setLikeCouter] = useState(0)
    
    function handleDeleteComment() {

        deleteComment(content)
    }

    function handleAddNewLike() {
        setLikeCouter((state) => {
            return state + 1
        })
    }

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

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleAddNewLike}>
                        <ThumbsUp />    <p>Aplaudir・<span>{like}</span></p>
                    </button>
                </footer>
            </div>
        </div>
    )
}