import style from './Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post(props) {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder={true} src="https://github.com/ViniciusGomes2006.png" />
                    <div className={style.authorInfo}>
                        <strong>Vinicius Gomes</strong>
                        <span>Web Developer</span>
                    </div> 
                </div>

                <time title='20 de Oububro ás 15:07h' dateTime="20-10-2022 15:05:17">Publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p>Fala galeraa 👋<br /><br />Acabei de subir mais um projeto no meu Github. O nome dele é Ignite Feed 🚀</p>
            
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