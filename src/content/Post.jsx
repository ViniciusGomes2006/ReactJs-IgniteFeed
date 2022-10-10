import style from './Post.module.css'

export function Post(props) {
    return (
        <div className={style.container}>
            <h2>{props.name}</h2>
            <p>{props.content}</p>
        </div>
    )
}