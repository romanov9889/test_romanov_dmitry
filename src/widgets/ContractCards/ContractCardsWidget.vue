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
    <TodoList v-else :items="filteredCards">
      <template #default="{ card }">      
        <ContractCard :card="card" />
      </template>     
    </TodoList>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import TodoList from '@/entities/card/ui/ContractsList.vue'
  import { useCardsStore } from '@/entities/card'
  import { CardFilters, useCardFilters } from '@/features/cards'
  import { storeToRefs } from 'pinia'
  import ContractCard from '@/entities/card/ui/ContractCard.vue'
  import CreateCardModal from '@/features/cards/create-card/CreateCardModal.vue'

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
