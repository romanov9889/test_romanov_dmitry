<template>
  <div class="card-widget">
    <div class="card-actions">
      <CardFilters 
        v-model:documentType="documentType"
        v-model:status="status"
        v-model:sortBy="sortBy"
      />
      <CreateCardModal />
    </div>

    <div v-if="loading">...Loading</div>
    <ContractsList v-else :items="filteredCards">
      <template #default="{ card }">      
        <ContractCard :card="card" />
      </template>     
    </ContractsList>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useCardsStore } from '@/entities/card'
  import { CardFilters, useCardFilters } from '@/features/cards/card-filters'
  import { storeToRefs } from 'pinia'
  import ContractsList from '@/entities/card/ui/ContractsList.vue'
  import { CreateCardModal } from '@/features/cards/create-card'
  import ContractCard from '@/entities/card/ui/ContractCard.vue'

  const cardsStore = useCardsStore()

  const { cards, loading } = storeToRefs(cardsStore)

  const { documentType, status, sortBy, filteredCards } = useCardFilters(cards)

  onMounted(async () => {
    cardsStore.fetchCards()
  })
</script>

<style lang="scss" scoped>
  .card-widget {
    display: flex;
    flex-direction: column;
    gap: 20px;

  }
  
  .card-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
