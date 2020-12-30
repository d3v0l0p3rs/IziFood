import React, { useState } from 'react';
import { Props, state, NextOrPrev } from './card.types'

const states = ['on_hold', 'in_progress', 'ready', 'done', 'cancel']

const changeState = (nextOrPrev: NextOrPrev) => {
    // Identificar el estado de la card y pasarlo al siguiente o anterior según sea el caso, también cambiar los labels de los botones
}

const Card: React.FC<Props> = (props: Props): JSX.Element => {
    const [state, setState] = useState<state>('on_hold') // Pone el estado inicial en la card, que no sé cuál es :v
    const [prevButtonLabel, setPrevButtonLabel] = useState<string>('Anterior') // Algun valor por defecto para el botón de anterior
    const [nextButtonLabel, setNextButtonLabel] = useState<string>('Después') // Algun valor por defecto para el botón de después

    return (
        <div>
            componente Card
            cliente <span>{props.client}</span>
            producto <span>{props.product}</span>
            telefono <span>{props.phone}</span>
            costo <span>{props.cost}</span>
            tipo de entrega <span>{props.deliveryType}</span>
            estado <span>{state}</span>
            <button>{prevButtonLabel}</button>
            <button>{nextButtonLabel}</button>
        </div>
    )
}

export { Card }