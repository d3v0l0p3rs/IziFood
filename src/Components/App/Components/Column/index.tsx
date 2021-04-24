import React, { useState } from "react"
import Card from "../Card"
import { CardProps } from "../Card/card.types"
import { ColumnProps, Order, Filter } from "./column.types"

import PersonIcon from "@material-ui/icons/Person"
import FastfoodIcon from "@material-ui/icons/Fastfood"
import CallIcon from "@material-ui/icons/Call"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import AllInboxIcon from "@material-ui/icons/AllInbox"
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import LocationCityIcon from "@material-ui/icons/LocationCity"
import LiveHelpIcon from "@material-ui/icons/LiveHelp"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"

import "./style.scss"

const sortCardsBy = (cards: CardProps[], property: keyof CardProps, order: Order = Order.ASC): CardProps[] => {
  const getCardValue = (card: CardProps, property: keyof CardProps): string | number => {
    let value: string | number = 0
    if (typeof card[property] === "string") value = (card[property] as string).charAt(0)
    if (typeof card[property] === "number") value = card[property] as number
    return value
  }
  return cards.sort((a, b) => (getCardValue(a, property) > getCardValue(b, property) ? order : -order))
}

const getIcon = (property: keyof CardProps) => {
  const icons: {[key: string]: JSX.Element} = {
    productList: <FastfoodIcon />,
    client: <PersonIcon />,
    phone: <CallIcon />,
    address: <LocationOnIcon />,
    neighborhood: <LocationCityIcon />,
    cost: <AttachMoneyIcon />,
    deliveryType: <AllInboxIcon />,
    currentState: <HourglassEmptyIcon />,
  }
  console.log(Object.keys(icons))
  console.log(property, property in icons)

  return property in icons ? icons[property] : <LiveHelpIcon />
}

const orderButtons = (
  cards: CardProps[],
  setCards: (card: CardProps[]) => void,
  currentFilter: Filter | null,
  setCurrentFilter: (filter: Filter) => void,
): JSX.Element => {
  const excludedProperties = ["id"]
  if (cards.length === 0) return <></>
  const properties = (Object.keys(cards[0]) as Array<keyof CardProps>).filter(
    (property) => !excludedProperties.includes(property),
  )
  const newOrder = (property: keyof CardProps, currentOrder: Order): number => {
    return currentFilter && currentFilter.name === property ? -currentOrder : currentOrder
  }
  const status = (property: keyof CardProps, currentOrder: Order): JSX.Element => {
    let status = 0
    let icon = (<></>)
    if (currentFilter && currentFilter.name === property) status = newOrder(property, currentOrder)
    if (status === 1) icon = (<ArrowUpwardIcon />)
    if (status === -1) icon = (<ArrowDownwardIcon />)
    return icon
  }

  return (
    <div className="order-buttons">
      {properties.map((property, idx) => (
        <button
          onClick={() => {
            const order = newOrder(property, currentFilter?.order || 1)
            setCards(sortCardsBy(cards, property, order))
            setCurrentFilter({ name: property, order: order })
          }}
          key={idx}
        >
          {getIcon(property)} {status(property, currentFilter?.order || 1)}
        </button>
      ))}
    </div>
  )
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
            note={data.note}
            address={data.address}
            neighborhood={data.neighborhood}
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
