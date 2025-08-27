import { ref, computed, type Ref } from 'vue'
import type { ContractCard, CardDocumentFormat, ContractStatus } from '@/entities/card'

export function useCardFilters(cards: Ref<ContractCard[]>) {
  const documentType = ref<CardDocumentFormat | ''>('')
  const status = ref<ContractStatus | ''>('')
  const sortBy = ref<'name' | 'startDate' | ''>('')

  const filterByDocumentType = (card: ContractCard) => {
    if (!documentType.value) return true
    return card.fileType === documentType.value
  }

  const filterByStatus = (card: ContractCard) => {
    if (!status.value) return true
    return card.status === status.value
  }

  const sortCards = (a: ContractCard, b: ContractCard) => {
    if (sortBy.value === 'name') {
      return a.documentName.localeCompare(b.documentName)
    }
    if (sortBy.value === 'startDate') {  
      const dateA = a.startDate ? new Date(a.startDate).getTime() : 0
      const dateB = b.startDate ? new Date(b.startDate).getTime() : 0
      return dateA - dateB
    }
    return 0
  }

  const filteredCards = computed(() => {
    return cards.value
      .filter(filterByDocumentType)
      .filter(filterByStatus)
      .sort(sortCards)
  })

  return { documentType, status, sortBy, filteredCards }
}
