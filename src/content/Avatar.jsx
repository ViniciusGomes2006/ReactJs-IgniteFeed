import style from './Avatar.module.css'

export function Avatar(props) {
    
    return(
        <img className={props.hasBorder ? style.avatarWidthBorder : style.avatar} src={props.src} />
    )
}