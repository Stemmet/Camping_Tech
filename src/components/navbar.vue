<template>
      <nav>
   <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="/">Home</a></li>
			<li><a class="menu__item" href="/about">About</a></li>
      <li><a class="menu__item" href="/products">Products</a></li>
			<li><a class="menu__item" href="/contact">Contact</a></li>
    </ul>
  </div>
  </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

#menu__toggle {
  opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
}
.menu__btn {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 99999;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #0E9E2C;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}
.menu__box {
  display: block;
  position: fixed;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #1BC23E;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;

}
.menu__item {
  display: block;
  padding: 12px 24px;
  color: #FFF;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}
.menu__item:hover {
  background-color: #0E9E2C;
  color: #0B0B0B;
}


</style>
