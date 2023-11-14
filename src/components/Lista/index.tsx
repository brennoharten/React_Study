import style from './Lista.module.scss'
import Item from "./Item";
import { ITarefa } from '../../Types/ITarefa';

export default function Lista({tarefas} : {tarefas: ITarefa[] }) {

    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
