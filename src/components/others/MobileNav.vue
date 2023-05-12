<template>
    <nav class="navigation-bar">
  <ul class="list-items">
    <span class="pointer"></span>
    <li class="item active">
      <a class="link" href="#">
        <i class="fas fa-home fa-2x"></i>
      </a>
    </li>
    <li class="item">
      <a class="link" href="#">
        <i class="fas fa-search fa-2x"></i>
      </a>
    </li>
    <li class="item">
      <a class="link" href="#">
        <i class="fas fa-heart fa-2x"></i>
      </a>
    </li>
    <li class="item">
      <a class="link" href="#">
        <i class="fas fa-bell fa-2x"></i>
      </a>
    </li>
    <li class="item">
      <a class="link" href="#">
        <i class="fas fa-user fa-2x"></i>
      </a>
    </li>
  </ul>
</nav>
</template>
<style scoped> 

:root {
  --main-color: #ff767d;
  --second-color: #acb8c1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-color: #f2f2f2;

  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-bar {
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}
.navigation-bar .list-items {
  list-style: none;
  display: flex;
  position: relative;
}
.navigation-bar .list-items .pointer {
  position: absolute;
  left: 0px;
  height: 100%;
  width: 4.5rem;
  z-index: 0;
  transition: all 0.2s linear;
}
.navigation-bar .list-items .pointer::before,
.navigation-bar .list-items .pointer::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
}
.navigation-bar .list-items .pointer::before {
  top: 0;
  border-bottom: 8px solid var(--main-color);
  border-radius: 0 0 30px 30px;
}
.navigation-bar .list-items .pointer::after {
  bottom: 0;
  border-top: 8px solid var(--main-color);
  border-radius: 30px 30px 0 0;
}

.navigation-bar .list-items .item {
  flex: 1 1 0px;
  position: relative;
  z-index: 2;
}
.navigation-bar .list-items .item .link {
  display: inline-block;
  height: 4rem;
  width: 4.5rem;
  line-height: 4.5;
  text-align: center;
  color: var(--second-color);
}
.navigation-bar .list-items .item.active .link {
  color: var(--main-color);
}
.navigation-bar .list-items .item .link i {
  font-size: 1.6rem;
  transition: font-size 0.2s linear;
}
.navigation-bar .list-items .item.active .link i {
  font-size: 1.4rem;
}


</style>
<script>

const navigation_items_elms = document.querySelectorAll(
  ".navigation-bar .list-items .item"
);
const navigation_pointer = document.querySelector(".navigation-bar .pointer");

navigation_items_elms.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    navigation_items_elms.forEach((itm) => itm.classList.remove("active"));
    item.classList.add("active");

    const parentWidth = item.parentElement.clientWidth;
    const lefPercent = (parentWidth / navigation_items_elms.length) * index;
    navigation_pointer.style.left = lefPercent + "px";
  });
});

</script>
