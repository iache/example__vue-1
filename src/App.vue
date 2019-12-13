<template>
  <div id="app">
    <header id="header">
      <div class="header__title">Site Name</div>
      <nav class="header__nav">
        <ul class="nav-list">
          <li class="list-item"><a href="#">Home</a></li>
          <li class="list-item has-child"><a href="#">CBD Products</a></li>
          <li class="list-item has-child"><a href="#">About us</a></li>
          <li class="list-item has-child"><a href="#">Programs</a></li>
          <li class="list-item"><a href="#">CBD Faq</a></li>
          <li class="list-item"><a href="#">CBD Blog</a></li>
        </ul>
      </nav>

      <div class="header__buttons">
        <a class="button button--secondary" href="#">
          <img class="icon" src="../src/assets/img/icons/account-icon.svg" alt="">
          Account
        </a>
        <a class="button button--primary" href="#">
          <img class="icon" src="../src/assets/img/icons/about_us-icon.svg" alt="">
          About Us
        </a>
      </div>

    </header>

    <main>

      <section class="banner">
        <div class="banner__info">
          <h1 class="header">Highest Quality from Switzerland</h1>
          <p class="text">
            We produce premium CBD products with less than 0.2% THC and a naturally high content of organic
            cannabidiol and full range of cannabinoids, terpenes, flavonoids, nutrients and antioxidants.
          </p>
          <div class="buttons-wrap">
            <a class="button button--secondary" href="#">
              <img class="icon" src="../src/assets/img/icons/account-icon.svg" alt="">
              Account
            </a>
            <a class="button button--primary circle" href="#">
              <img src="../src/assets/img/icons/person-icon.svg" alt="">
            </a>
          </div>
        </div>

        <slider-box></slider-box>
      </section>

      <section class="section-1">
        <div class="info-block">
          <h1 class="info-block__header">What makes our CBD products so very different?</h1>
          <p class="info-block__text">
            Our cannabidiol is of the highest quality and it is obtained from industrial hemp (Cannabis sativa L.)
            by a supercritical CO2 extraction process and carefully diluted with organic olive oil to
            achieve exact concentrations. The delicate production method not only improves the quality of
            cannabidiol but also preserves a full spectrum of other cannabinoids, terpenes, flavonoids,
            nutrients and antioxidants. <br><br>

            Our products have been thoroughly tested, analyzed and documented in Switzerland for its
            cannabinoid ratio and its microbiological suitability.
          </p>
          <a class="info-block__button button button--default" href="#">
            <img class="icon" src="./assets/img/icons/info-icon.svg" alt="">
            Read More
          </a>
        </div>

        <div class="photo-gallery">
          <img src="./assets/img/image-1.jpg" alt="">
          <img src="./assets/img/image-2.jpg" alt="">
          <img src="./assets/img/image-3.jpg" alt="">
        </div>
        <div class="photo-image">
          <img src="./assets/img/image-4.jpg" alt="">
        </div>
      </section>

      <section class="section-2">
        <div class="container inner-wrap">
          <div class="info-block">
            <h1 class="info-block__header">STAY HEALTHY <br> WITH SERA LABS</h1>
            <p class="info-block__text">
              For centuries, nature has provided us with the fundamental components to living a healthy life.
              Through science, we have harnessed the power of a miracle compound originating from a plant that has
              been cultivated for thousands of years. <br><br>

              CBD, or Cannabidiol, is a naturally occurring cannabinoid found in the hemp plant that does not cause
              a euphoric or intoxicated effect and can offer relief from minor aches and pains, stress and issues
              with sleep.
            </p>
            <a class="info-block__button button button--primary" href="#">
              Try it Now
            </a>
          </div>

          <div class="photo-image">
            <img src="./assets/img/image-5.jpg" alt="">
          </div>
        </div>
      </section>

      <section class="section-3">
        <div class="block-icons-list">
          <div class="list-item">
            <img class="icon" src="./assets/img/icons/green_planet-icon.svg" alt="">
            <h2 class="list-item__header h2">100% ORGANICALLY GROWN CBD</h2>
            <p>Our hemp is sourced from a farm that produces some of the most rich CBD Hemp in the USA.</p>
          </div>

          <div class="list-item">
            <img class="icon" src="./assets/img/icons/leaf-icon.svg" alt="">
            <h2 class="list-item__header h2">SCIENCE-BACKED FORMULATIONS</h2>
            <p>
              Our CBD is completely isolated through CO2 extraction and crystal precipitation and is of
              the highest grade, pesticide free, Non-GMO hemp in the world.
            </p>
          </div>

          <div class="list-item">
            <img class="icon" src="./assets/img/icons/leaf_hands-icon.svg" alt="">
            <h2 class="list-item__header h2">NATURAL INGREDIENTS</h2>
            <p>Cannabidiol, CBD, is one of over 80 active cannabinoids in the hemp plant.</p>
          </div>
        </div>
      </section>

      <section class="section-4">
        <div class="info-block info-block--primary">
          <h1 class="info-block__header">STAY HEALTHY <br> WITH SERA LABS</h1>
          <p class="info-block__text">
            For centuries, nature has provided us with the fundamental components to living a healthy life.
            Through science, we have harnessed the power of a miracle compound originating from a plant that has
            been cultivated for thousands of years. <br><br>
            CBD, or Cannabidiol, is a naturally occurring cannabinoid found in the hemp plant that does not
            cause a euphoric or intoxicated effect and can offer relief from minor aches and pains, stress
            and issues with sleep.
          </p>
          <a class="info-block__button button button--primary" href="#">
            <img class="icon" src="../src/assets/img/icons/basket-icon.svg" alt="">
            Read More
          </a>
        </div>
      </section>
    </main>

    <footer id="footer">
      <div class="list-wrap">

        <div class="simple-list">
          <h3 class="header h2">Contact Address</h3>
          <ul class="list">
            <li class="list-item">TimeGame Ltd</li>
            <li class="list-item">Hamilton House</li>
            <li class="list-item">Mabledon Place</li>
            <li class="list-item">London</li>
            <li class="list-item">WC1H 9BB</li>
            <li class="list-item">United Kindom</li>
          </ul>
        </div>

        <div class="simple-list">
          <h3 class="header h2">Site Map</h3>
          <ul class="list">
            <li class="list-item">About us</li>
            <li class="list-item">Terms & Conditions</li>
            <li class="list-item">Privacy Policy</li>
            <li class="list-item">Support</li>
            <li class="list-item">Member's Area</li>
            <li class="list-item">Cookie Policy</li>
          </ul>
        </div>

        <div class="simple-list">
          <h3 class="header h2">Questions? Comments?</h3>
          <ul class="list">
            <li class="list-item">Call us <b>44-20-7953-0208</b></li>
            <li class="list-item">or <b>+13023274074</b></li>
            <li class="list-item">24 hours a day</li>
            <li class="list-item">7 days a week</li>
            <li class="list-item">support@playempires.com</li>
          </ul>
        </div>
      </div>

      <div class="copyright-block">
        © 2019 Playempires. All rights reserved.
      </div>

    </footer>
  </div>
</template>

<script>
import SliderBox from "./components/SliderBox";
export default {
  name: 'app',
  components: {SliderBox}
}
</script>

<style lang="scss">
  @import "assets/scss/var";
  @import "assets/scss/reset.css";
  @import "assets/scss/fonts";
  @import "assets/scss/base";
  @import "assets/scss/buttons";

  @mixin grid($cols) {
    display: grid;
    grid-template-columns: repeat($cols, 97px);
    grid-gap: 20px;
    justify-content: center;
  }

  #header {
    @include grid(12);

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    padding: 35px 0;
    align-items: center;
  }

  .header {
    &__title {
      grid-column: 1/3;

      font: 600 20px/1.25 $--secondary-font-family;
      text-transform: uppercase;

      color: #fefefe;
    }

    &__nav {
      grid-column: span 6;
    }
  }

  .nav-list {
    display: flex;

    font: bold 12px $--secondary-font-family;
    text-transform: uppercase;

    color: #fefefe;

    .list-item {
      display: flex;
      margin-right: 47px;

      &:last-child {
        margin-right: 0;
      }

      &.has-child:after {
        display: block;
        margin-left: 7px;
        content: url(./assets/img/icons/menu_arrow-icon.svg);
      }

      a {
        text-decoration: inherit;

        color: inherit;

        transition: color .3s ease-in-out;

        &:hover {
          color: darken(#fefefe, 10%);
        }
      }
    }
  }

  .header__buttons {
    grid-column: 9/13;
    display: flex;

    .button {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .banner {
    @include grid(12);

    /** 100px + header height */
    padding: calc(100px + 130px) 0 100px;
    background: url(./assets/img/banner.jpg) center/cover no-repeat;

    &__info {
      grid-column: span 5;
      padding: 99px 0;

      color: $--secondary-color;

      .header {
        margin-bottom: 16px;

        font: 34px/1.26 $--secondary-font-family;
        text-transform: uppercase;
      }

      .text {
        margin-bottom: 48px;
      }

      .buttons-wrap {
        display: flex;

        .button {
          margin-right: 20px;

          &:nth-last-of-type(1) {
            margin-right: 0;
          }
        }
      }
    }
  }

  /**
   * Section-1
   */
  .section-1 {
    @extend .container;
    @include grid(12);

    padding: 125px 0 135px;

    .info-block {
      grid-column: 7/11;
      grid-row: 1;
    }

    .photo-gallery {
      display: grid;
      grid-template-areas:
        "first  first  second"
        "first  first  third";
      grid-gap: 10px;
      grid-column: span 5;
      width: 100%;
      justify-content: flex-end;

      img {
        &:nth-child(1) {
          grid-area: first;
          height: 100%;
        }
        &:nth-child(2) {
          grid-area: second;
        }
        &:nth-child(3) {
          grid-area: third;
        }
      }

    }

    .photo-image {
      grid-column: 12/13;
      margin-left: -20px;

      img {
        border-bottom-left-radius: 60px;
        overflow: hidden;
      }
    }
  }

  /**
   * Section-2
   */
  .section-2 {
    position: relative;
    background: url(./assets/img/bg-texture-1.svg) 0 0/ 50px 25px repeat-x,
                linear-gradient(to bottom, transparent 0, transparent 21px, #F4F6F7 22px);

    .inner-wrap {
      @include grid(12);

      padding: 130px 0;
    }

    .info-block {
      grid-column: 2/6;
    }

    .photo-image {
      position: relative;
      grid-column: 7/13;

      img {
        position: absolute;
        top: 0;
        left: 0;

        border-top-left-radius: 60px;
        overflow: hidden;
      }
    }
  }

  /**
   * Section-3
   */
  .section-3 {
    position: relative;
    z-index: 2;

    padding: 155px 0;
    text-align: center;

    color: #A8A8A8;
    background-color: #202A35;
  }

  .block-icons-list {
    @extend .container;

    @include grid(10);

    .list-item {
      max-width: 329px;
      grid-column: span 3;

      &:nth-child(2) {
        grid-column: span 4;
        margin: 0 auto;
      }

      &:last-child {
        margin-right: 0;
      }

      .icon {
        width: 47px;
        height: 47px;
        margin-bottom: 30px;
      }

      &__header {
        margin-bottom: 28px;

        color: $--primary-color;
      }
    }
  }

  /**
   * Section 4
   */
  .section-4 {
    @include grid(12);

    padding: 69px 0 91px;
    background: url('./assets/img/image-6.jpg') 0 0/cover no-repeat;

    .info-block {
      grid-column: 7/12;
    }
  }


  /**
   * Info block
   */
  .info-block {

    &--primary {
      padding: 83px 65px;
      border-radius: 60px;

      background-color: #fefefe;
    }

    &__header {
      margin-bottom: 31px;

      font: 600 34px/1.26 $--secondary-font-family;
      text-transform: uppercase;
    }

    &__button {
      margin-top: 41px;
    }
  }

  /**
   * Footer
   */
  #footer {
    background-color: #F4F6F7;
  }

  .list-wrap {
    display: flex;
    justify-content: center;
    padding: 95px 0;
  }

  .simple-list {
    width: 224px;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }

    .header {
      margin-bottom: 18px;
    }

    .list {
      line-height: 1.45;
    }
  }

  .copyright-block {
    display: flex;
    justify-content: center;
    padding: 44px 0;

    color: #A8A8A8;
    background-color: #fff;
  }
</style>
