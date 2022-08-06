<template>
  <div class="landing">
    <div class="wrapper">
      <div class="container">
        <h1>Camping Tech</h1>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
* {
  box-sizing: border-box
}

:root {
  --color-1: #1BC23E;
  --color-2: #0E9E2C;
  --color-3: #1BC23E;
  --color-4: #0E9E2C;
  --color-5: #0E9E2C;
}


.wrapper {
  line-height: 1;
  min-height: 100%;
  display: grid;
  place-items: center;
  min-height: calc(100vh - 16px);
}

h1 {
  font-family: "Exo", sans-serif;
  font-size: 15vw;
  font-weight: 900;
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
  margin: auto;
  text-transform: uppercase;
  background: linear-gradient(219deg, 
    var(--color-1) 19%, 
    transparent 19%,transparent 20%, 
    var(--color-2) 20%, var(--color-2)  39%,
    transparent 39%,transparent 40%, 
    var(--color-3) 40%,var(--color-3) 59% ,
    transparent 59%,transparent 60%, 
    var(--color-4) 60%, var(--color-4) 79%,
    transparent 79%, transparent 80%, 
    var(--color-5) 80%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.container {
  padding: 1.5rem;   
  text-align: center;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 6.5rem;
  }
}
</style>
