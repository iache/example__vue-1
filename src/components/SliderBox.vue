<template>
  <div class="slider-box">

    <slider-item :item="items[cursor]"></slider-item>

    <div class="pagination-wrap">
      <div class="pagination">
        <div class="arrow left"
             @click="handlerArrowClick('left')">
          <img src="../assets/img/icons/left_arrow-icon.svg" alt="">
        </div>
        <div class="current">{{ cursor + 1 }}</div>
        <div class="arrow right"
             @click="handlerArrowClick('right')">
          <img src="../assets/img/icons/left_arrow-icon.svg" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import blessing from '../assets/img/blessing.jpg';
  import bottle from '../assets/img/bottle.png';
  import gasoline from '../assets/img/gasoline.jpg';
  import DrugItem from "./SliderItem/DrugItem";
  import SliderItem from "./SliderItem/SliderItem";

  export default {
    name: 'SliderBox',
    components: {SliderItem},
    data() {
      return {
        items: [
          new DrugItem({
            id: 0,
            title: 'Full Spectrum CBD Oil',
            owner: 'SeraRelief',
            img: bottle,
            stars: 4,
            from: 'USA',
            volume: '30 ml',
            price: 28.95
          }),
          new DrugItem({
            id: 1,
            title: 'Full Spectrum Gasoline',
            owner: 'Someone',
            img: gasoline,
            stars: 3,
            from: 'USA',
            volume: '50 ml',
            price: 99.95
          },),
          new DrugItem({
            id: 2,
            title: 'Full Spectrum Of Blessings',
            owner: 'Someone',
            img: blessing,
            stars: 5,
            from: 'USA',
            volume: '1 ml',
            price: 919.95
          })
        ],
        cursor: 0
      };
    },
    methods: {
      /**
       * @param {String} direction
       */
      handlerArrowClick(direction) {
        if (direction === 'left') {
          this.minusCursorValue();
        }

        if (direction === 'right') {
          this.plusCursorValue();
        }
      },

      /**
       * Select next element
       * */
      plusCursorValue() {
        const _cursor = this.cursor + 1;
        if (_cursor <= this.items.length - 1) {
          this.cursor = _cursor;
        } else {
          this.cursor = 0;
        }
      },

      /**
       * Select previous element
       * */
      minusCursorValue() {
        const _cursor = this.cursor - 1;
        if (_cursor < 0) {
          this.cursor = this.items.length - 1;
        } else {
          this.cursor = _cursor;
        }
      }
    }
  };
</script>

<style lang="scss">
  @import "../assets/scss/var";

  .slider-box {
    grid-column: 8/12;
    padding: 53px 66px 56px 47px;
    border-radius: 60px;

    background-color: $--secondary-color;
  }

  .pagination-wrap {
    position: relative;
  }

  .pagination {
    position: absolute;
    top: -42px;
    right: 0;

    display: flex;
    align-items: center;

    .current {
      margin: 0 12px;

      font: 600 14px/1.28 $--secondary-font-family;
      text-transform: uppercase;
    }

    .arrow {
      cursor: pointer;
      user-select: none;
    }

    .right {
      transform: rotateY(180deg);
    }
  }
</style>
