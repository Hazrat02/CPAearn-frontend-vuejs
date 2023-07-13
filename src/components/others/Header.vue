<template>

    <header id="header" class="header sticky-top d-flex align-items-center">
      <div
        class="container-fluid d-flex align-items-center justify-content-between"
      >
        <RouterLink
        to="/"
          class="logo d-flex align-items-center me-auto me-xl-0"
        >
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="./src/assets/frontend/img/logo.png" alt=""> -->
          <h1>CPAearn</h1>
          <span>.</span>
        </RouterLink>

        <!-- Nav Menu -->
        <nav id="navmenu" class="navmenu">
          <ul class="ul">
            
            <li  ><RouterLink class="hovdiv" to="/"> <div><i class="bi bi-house-fill"></i> <span class="spanhide">Home</span></div></RouterLink></li>

            <!-- <RouterLink to="/register">Register</RouterLink> -->
            <li ><RouterLink class="hovdiv"  to="/helpcenter"><div ><i class="bi bi-headset"></i> <span class="spanhide">Services</span></div></RouterLink></li>
            <li><RouterLink class="hovdiv" to="/wallate"><div><i  class="bi bi-wallet2"></i > <span class="spanhide">Wallate</span></div></RouterLink></li>
            <li><RouterLink class="hovdiv" to="/vip"> <div> <i class="bi bi-rocket-fill"></i> <span class="spanhide">Vip</span></div></RouterLink></li>
            
            <li><RouterLink class="hovdiv" to="/contact"><div> <i class="bi bi-wechat"></i> <span class="spanhide">Contact</span></div></RouterLink></li>
            <li><RouterLink class="hovdiv" to="/earning"><div><i class="bi bi-cash-coin"></i>  <span class="spanhide">Earn</span></div></RouterLink></li>
            <!-- <li class="dropdown has-dropdown">
              <a href="#"
                ><span>More</span> <i class="bi bi-chevron-down"></i
              ></a>
              <ul class="dd-box-shadow">
                <li><a href="#">Dropdown 1</a></li>
                <li class="dropdown has-dropdown">
                  <a href="#"
                    ><span>Deep Dropdown</span>
                    <i class="bi bi-chevron-down"></i
                  ></a>
                  <ul class="dd-box-shadow">
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li> -->
          
          
          </ul>

          <i class="mobile-nav-toggle d-none bi bi-list"></i>
        </nav>
        <!-- End Nav Menu -->

         
    
      </div>
    </header>

</template>
