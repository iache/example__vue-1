<template>
  <div class="slider-item">

    <img class="image" :src="item.img" alt="">

    <p class="owner">{{ item.owner }}</p>

    <div class="slider-item__header">
      <div class="header-wrap">

        <h3 class="h2">{{ item.title }}</h3>

        <div class="stars">

          <svg v-for="index in 5"
               :key="index"

               class="icon"
               :class="item.stars >= index ? 'has-star' : ''">
            <use xlink:href="#star-icon"></use>
          </svg>

        </div>
      </div>
      <a class="button button--primary circle" href="#">
        <img src="../../assets/img/icons/basket_buy-icon.svg" alt="">
      </a>
    </div>
    <div class="slider-item__footer">
      <div class="item-props-wrap">
        <div class="item-prop">{{ item.volume }}</div>
        <div class="item-prop">${{ item.price }}</div>
        <div class="item-prop">{{ item.from }}</div></div>
    </div>

    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" display="none">
      <path id="star-icon" d="M20.1704 7.62062L13.9717 6.71974L11.2007 1.10206C11.125 0.948251 11.0005 0.823739 10.8467 0.748056C10.4609 0.557626 9.99218 0.716318 9.79931 1.10206L7.02831 6.71974L0.829582 7.62062C0.658684 7.64503 0.502434 7.72559 0.382805 7.84767C0.23818 7.99631 0.158485 8.1963 0.161232 8.40368C0.163979 8.61105 0.248942 8.80886 0.397453 8.95362L4.88232 13.3262L3.82275 19.5005C3.7979 19.6441 3.81379 19.7918 3.86863 19.9269C3.92346 20.062 4.01503 20.1789 4.13297 20.2646C4.25091 20.3503 4.39049 20.4012 4.53588 20.4115C4.68127 20.4219 4.82666 20.3913 4.95556 20.3233L10.5 17.4082L16.0444 20.3233C16.1958 20.4038 16.3716 20.4307 16.54 20.4014C16.9648 20.3281 17.2505 19.9253 17.1772 19.5005L16.1177 13.3262L20.6025 8.95362C20.7246 8.83399 20.8052 8.67774 20.8296 8.50684C20.8955 8.0796 20.5976 7.68409 20.1704 7.62062ZM14.2305 12.7109L15.1118 17.8452L10.5 15.4233L5.88818 17.8477L6.76952 12.7134L3.03905 9.07569L8.1953 8.32618L10.5 3.65577L12.8047 8.32618L17.9609 9.07569L14.2305 12.7109Z"/>
    </svg>
  </div>
</template>

<script>
  import DrugItem from "./DrugItem";

  export default {
    name: 'SliderItem',
    props: {
      item: {
        required: true,
        type: DrugItem
      }
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/var';

  .slider-item {
    display: flex;
    flex-direction: column;
    width: 100%;

    .image {
      max-height: 234px;
      margin-bottom: 48px;
      object-fit: contain;
    }

    &__header {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      .header-wrap {
        flex-grow: 1;
      }
    }

    .stars {
      display: flex;
      margin-top: 20px;

      .icon {
        width: 21px;
        height: 21px;
        margin-right: 7px;

        fill: #444;

        &.has-star {
          fill: #88BA61;
        }
      }
    }

    &__footer {
      display: flex;
      justify-content: space-between;
    }

    .item-props-wrap {
      display: flex;
    }

    .item-prop {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border: 1px solid #D9D9D9;
      border-radius: 50%;

      font: 600 14px/1.28 $--secondary-font-family;
      text-transform: uppercase;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
