import { format, formatDistanceToNow } from 'date-fns'

import style from './Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { ptBR } from 'date-fns/esm/locale'
import { useState } from 'react'

export function Post({ author, content, publishedAt}) {
    const [comments, commentsSet] = useState([
    ])

    const [newComment, setNewComment] = useState()

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publhedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault() 

        commentsSet([...comments, newComment ])
        setNewComment('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewComment(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        commentsSet(commentWithoutDeletedOne)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('É obrigatório preencher o campo!')
    }

    const isNewCommentEmpty = newComment?.length === 0

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.rule}</span>
                    </div> 
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publhedDateRelativeToNow}</time>
            </header>

            <div className={style.content}>
                { content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.key}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.key}>👉 <a href={"https://" + line.content} target="_blank">{line.content}</a></p>
                    }
                })}
            </div>



            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Comentários</strong>

                <textarea 
                name="comment" 
                value={newComment} 
                onChange={handleNewCommentChange} 
                placeholder='Escreva seu comentário aqui !'
                onInvalid={handleNewCommentInvalid}
                required
                />

                <footer>
                    <button 
                    type='submit'
                    disabled={isNewCommentEmpty}
                    >Comentar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                { comments.map(comments => {
                    return (
                    <Comment 
                    key={comments}
                    content={comments} 
                    deleteComment={deleteComment}
                    />
                    )
                })

                }
            </div>
        </article>
    )
}