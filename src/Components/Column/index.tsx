import React, { useState } from "react"
import Card from "../Card"
import { CardProps } from "../Card/card.types"
import { ColumnProps, Order, Filter } from "./column.types"
import "./style.scss"

const sortCardsBy = (
  cards: CardProps[],
  property: keyof CardProps,
  order: Order = Order.ASC,
): CardProps[] => {
  const getCardValue = (card: CardProps, property: keyof CardProps): string | number => {
    let value: string | number = 0
    if (typeof card[property] === "string") value = (card[property] as string).charAt(0)
    if (typeof card[property] === "number") value = card[property] as number
    return value
  }
  return cards.sort((a, b) =>
    getCardValue(a, property) > getCardValue(b, property) ? order : -order,
  )
}

const orderButtons = (
  cards: CardProps[],
  setCards: (card: CardProps[]) => void,
  currentFilter: Filter | null, setCurrentFilter: (filter: Filter) => void,
): JSX.Element => {
  const excludedProperties = ["id"]
  if (cards.length === 0) return (<></>)
  const properties = (Object.keys(cards[0]) as Array<keyof CardProps>)
    .filter(property => !excludedProperties.includes(property))
  const newOrder = (property: keyof CardProps, currentOrder: Order): number => {
    return currentFilter && currentFilter.name === property ? -currentOrder : currentOrder
  }
  const status = (property: keyof CardProps, currentOrder: Order): number => {
    let status = 0
    if (currentFilter && currentFilter.name === property) status = newOrder(property, currentOrder)
    return status
  }

  // TODO: This is just a template, buttons should have icons instead of names or numbers
  return (<>
    {properties.map((property, idx) => (
      <button
        onClick={() => {
          const order = newOrder(property, currentFilter?.order || 1)
          setCards(sortCardsBy(cards, property, order))
          setCurrentFilter({name: property, order: order})
        }}
        key={idx}>
          Order by {property} {status(property, currentFilter?.order || 1)}
      </button>
    ))}
  </>)
}

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
  const [, setCards] = useState<CardProps[]>(props.data)
  const [currentFilter, setCurrentFilter] = useState<Filter | null>(null)

  return (
    <div className="column-wrapper">
      <div className="column-title">{props.columnType}</div>

      {orderButtons(props.data, setCards, currentFilter, setCurrentFilter)}
      <div className="column-data-container">
        {props.data.map((data, idx) => (
          <Card
            id={data.id}
            productList={data.productList}
            client={data.client}
            phone={data.phone}
            note ={data.note}
            address = {data.address}
            neighborhood = {data.neighborhood}
            cost={data.cost}
            deliveryType={data.deliveryType}
            currentState={data.currentState}
            key={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default Column
