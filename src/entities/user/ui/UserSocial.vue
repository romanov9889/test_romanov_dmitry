<template> 
  <div class="social">
    <div class="icons">      
      <img class="icon" :src="whatsApp" />
      <img class="icon" :src="viberIcon" />
      <img class="icon" :src="telegramIcon" />
    </div>
    <span class="comment-link">Комментарии</span>
  </div>
</template>


<script setup lang="ts">
  import telegramIcon from '@/shared/assets/icons/telegram.svg';
  import whatsApp from '@/shared/assets/icons/whatsapp.svg';
  import viberIcon from '@/shared/assets/icons/viber.svg';
</script>

<style lang="scss" scoped>    
  .social {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    grid-column: 2;   
    grid-row: 2;
  }

  .icons {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .icon {
    width: 25px;
    height: 25px;
  }

  .comment-link {
    color: var(--color-primary);
    text-decoration: underline;
  }
</style>

