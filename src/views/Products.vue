<template>

    <div class="card card--one" v-for="product in products">
              <h1 class="card__title">{{product.name}}</h1>
              <div class="card__photo">
                <img src="" alt="" />
              </div>
              <div class="card__footer">
                  <span class="card__price">$ {{product.price}}</span>
              </div>
    </div>

</template>

<script>
export default {
computed: {
    products(){
        return this.$store.state.products
    }
}
}
</script>

<style>
img {
    min-width: 100%;
    width: 100%;
  }
  h1, h2, h3, h4 {
    margin: 0;
    text-rendering: optimizeLegibility;
  }
  p {
    margin: 0;
  }
  @keyframes incoming {
    from {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-4em);
    }
    to {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
  /* Cards  */
   .cards {
    margin: 8em auto;
    overflow: hidden;
    max-width: 80em;
  }
  .card {
    /* Animate the cards */
    animation-name: incoming;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.680, -0.550, 0.265, 1.550);
    position: relative;
    overflow: hidden;
    padding: 2em;
    width: 30%;
    height: 36em;
    background: #1d3557;
    float: left;
    margin-right: 5%;
    z-index: 0;
  }
  .card:hover .card__photo {
    cursor: pointer;
    transform: scale(1.2);
    filter: none;
  }
  .card--one {
    animation-delay: 0;
  }
  .card--one .card__title,
  .card--one .card__subtitle {
    color: #e63946;
  }
  .card:last-child {
    margin-right: 0;
  }
  .card__title,
  .card__subtitle {
    position: absolute;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 5em;
    line-height: .85;
  }
  .card__title {
    z-index: 10;
    top: .5em;
  }
  .card__subtitle {
    top: 1.40em;
  }
  .card__photo {
    position: absolute;
    top: -9em;
    right: -20em;
    width: 60em;
    transition: all .5s cubic-bezier(0.680, -0.550, 0.265, 1.550);
    filter: grayscale();
  }
  .card__footer {
    position: absolute;
    bottom: 2em;
  }
  .card__price {
    font-weight: 900;
    color: #555;
    border-bottom: .125em solid #555;
  }
  .credits {
    font-size: .8em;
    text-align: center;
    color: white;
  }
  .credits a {
    color: white;
    text-decoration: none;
    font-weight: 900;
  }
</style>