import { format, formatDistanceToNow } from 'date-fns'

import style from './Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { ptBR } from 'date-fns/esm/locale'

export function Post({ author, content, publishedAt}) {
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publhedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

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
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu Github. O nome dele é Ignite Feed 🚀</p>
            
                <p>👉 <a href="https://github.com/ViniciusGomes2006/ReactJs-IgniteFeed">github.com/ViniciusGomes2006</a></p>
                <p><a href="#">#NewProject</a> <a href="#">#Rocketseat</a> <a href="#">#GitHub</a></p>
            </div>



            <form className={style.commentForm}>
                <strong>Comentários</strong>

                <textarea placeholder='Escreva seu comentário aqui !'></textarea>

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}