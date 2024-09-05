import {gql} from '@apollo/client'

export const ADD_ITEM = gql`
mutation addItem($name: String!, $img: String, $cost: Int, $calories: Int) {
  addItem(name: $name, img: $img, cost: $cost, calories: $calories) {
    name
    img
    cost
    calories
    _id
  }
}
`

export const REMOVE_ITEM = gql`
mutation removeItem($itemId: ID!) {
  removeItem(itemId: $itemId) {
    name
    _id
  }
}
`
    