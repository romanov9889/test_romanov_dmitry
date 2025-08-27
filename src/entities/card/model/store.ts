import { defineStore } from 'pinia'
import type { ContractCardType, CreateCardForm } from './types'
import { getCards, createCard } from '../api/cardApi'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: [] as ContractCardType[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    async fetchCards() {
      this.loading = true
      this.error = null
      try {        
        const res = await getCards()
        
        this.cards = res
        
      } catch (e: unknown) {
        this.error = 'Ошибка загрузки'
      } finally {
        this.loading = false
      }
    },

    async addCard(card: CreateCardForm) {
      this.loading = true
      this.error = null
      try {
        console.log(card)
        await createCard(card)
        const id = Math.floor(Math.random() * 1000000)
        this.cards.push({
          id, ...card,
          status: null
        })
      } catch (e: unknown) {
        this.error = 'Ошибка добавления'
      } finally {
        this.loading = false
      }
    }
  }
})
