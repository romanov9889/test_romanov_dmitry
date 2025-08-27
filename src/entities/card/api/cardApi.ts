import type { ContractCardType, CreateCardForm } from '../model/types'

const POSTMAN_URL = 'https://298302be-e885-45f6-b1f3-94219063f21f.mock.pstmn.io';
const BASE_URL = `${POSTMAN_URL}/documents`;


export async function getCards(): Promise<ContractCardType[]> {
  const res = await fetch(BASE_URL)
  if (!res.ok) {
    throw new Error(`Ошибка получения карточек: ${res.status}`)
  }
  return res.json()
}

export async function createCard(card: CreateCardForm): Promise<ContractCardType> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(card)
  })
  if (!res.ok) {
    throw new Error(`Ошибка добавления карточки: ${res.status}`)
  }
  return res.json()
}
