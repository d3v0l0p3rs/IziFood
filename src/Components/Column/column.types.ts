import {CardProps} from '../Card/card.types';

export interface ColumnProps {
    columnType: "pending" | "cooking" | "ready",
    data: CardProps[]
  }