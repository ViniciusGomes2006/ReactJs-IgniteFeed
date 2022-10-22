import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import style from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={style.Sidebar}>
            <img className={style.banner} src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="Banner de perfil" />

            <div className={style.profile}>
                <Avatar hasBorder={true} src="https://github.com/ViniciusGomes2006.png"/>

                <strong>Vinicius Gomes</strong>
                <span>Developer Front-end</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}