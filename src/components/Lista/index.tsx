import React from "react";

function Lista() {
    const tarefas = [{
        tarefa  : 'React',
        tempo  : '02:00:00'
    },{
        tarefa  : 'Java Script',
        tempo  : '01:00:00'
    }

    ]
    return(
        <aside>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((iten, index) => (
                    <li key={index}>
                        <h3>{iten.tarefa}</h3>
                        <span>{iten.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
