<template>
  <div id="app">
    <!-- <header>
    <nav class="navbar navbar-expand-sm navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">The Planets</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto-end mb-2 mb-lg-0">
            <li class="nav-item">
              <form class="nav-item" action="/mercury" method="get">
                <button>mercury</button>
              </form>
            </li>

            <li class="nav-item">
              <form class="nav-item" action="/venus" method="get">
                <button>Venus</button>
              </form>
            </li>

            <li class="nav-item">
              <form class="nav-item" action="/earth" method="get">
                <button>earth</button>
              </form>
            </li>

            <li class="nav-item">
              <form class="nav-item" action="/mars" method="get">
                <button>mars</button>
              </form>
            </li>

            <li class="nav-item">
              <form class="nav-item" action="/jupiter" method="get">
                <button>jupiter</button>
              </form>
            </li>

            <li class="nav-item">
              <form class="nav-item" action="/saturn" method="get">
                <button>saturn</button>
              </form>
            </li>

            <li class="nav-item">
              <form class="nav-item" action="/uranus" method="get">
                <button>uranus</button>
              </form>
            </li>

            <li class="nav-item">
              <form class="nav-item" action="/neptune" method="get">
                <button>neptune</button>
              </form>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header> -->
  <div id="nav">
      <router-link to="/"> Home</router-link> 
      <router-link 
      to="/mercury"> Mercury</router-link>
      <router-link to="/venus"> Venus</router-link>
      <router-link to="/earth"> Earth</router-link>
      <router-link to="/mars"> Mars</router-link>
      <router-link to="/jupiter"> Jupiter</router-link>
      <router-link to="/saturn"> Saturn</router-link>
      <router-link to="/uranus"> Uranus</router-link>
      <router-link to="/neptune"> Neptune</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script></script>

<style>
.navbar {
  z-index: 2;
  background-color: #070724;
}

body {
  padding: 0;
  width: 100%;
  background-repeat: round;
  background: #070724;
  color: white;
  font-size: 12px;
  font-family: sans-serif;
}

h1 {
  z-index: 2;
  font-family: 'Antonio', sans-serif;
  text-transform: uppercase;
  margin-bottom: 0.8em;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

p {
  z-index: 2;
  width: 100%;
}

.hide {
  display: none;
}

.navbar form button {
  z-index: 2;
  text-transform: uppercase;
  background-color: inherit;
  border: none;
  color: #fff;
  opacity: 0.88;
  margin: 0.2em 0;
}
.navbar form {
  margin-bottom: 0.3em;
}

.flex-container {
  z-index: 2;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex-container div {
  width: 83%;
}

#content {
  z-index: 2;
  position: relative;
  right: 0;
  left: 0;
  display: block;
  width: 100%;
  margin: 1em 0 2.5em 0;
  ;
}

#content ul {
  z-index: 2;
  padding: 19px 0;
  border-top: solid 1px rgba(255, 255, 255, 0.2);
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#content ul li {
  display: inline;
}

ul a {
  z-index: 2;
  text-transform: uppercase;
  opacity: 0.88;
  text-decoration: none;
  color: #fff;
}

#facts {
  z-index: 2;
  margin-bottom: 2em;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#facts-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: yellow; */
}

#content-2 {
  display: none;
}

#img-div {
  width: 37%;
  margin-bottom: 5.4em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#img-div img {
  max-width: 100%;
}

#geology {
  max-width: 100%;
  max-height: 100%;
  width: 43%;
}

.text {
  text-align: center;
  margin-bottom: 0.7em;
  line-height: 2;
  opacity: 0.88;
}

.stats {
  z-index: 2;
  margin-top: 3em;
  margin-bottom: 13em;
}

.stats p {
  z-index: 2;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  font-weight: 300;
  padding: 13px;
  border: solid 1px rgba(255, 255, 255, 0.2);
}

p span {
  font-weight: 560;
  color: #fff;
  text-transform: uppercase;
  float: right;
}

a:hover {
  opacity: 0.88;
  color: #fff;
}

@media (min-width: 610px) and (max-width: 1023px) {
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    justify-content: flex-end;
  }

  .container-fluid {
    margin: 1em;
    border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    padding-bottom: 15px;
  }

  .navbar form {
    margin-bottom: 0;
  }

  h1 {
    margin-left: 0.1em;
    float: left;
  }

  p {
    float: left;
    width: 84%;
  }

  p span {
    margin: 0.6em 0;
    font-size: 16px;
  }

  .text {
    text-align: left;
  }

  #facts {
    display: flex;
    flex-direction: column;
    margin-top: 10em;
  }

  #facts-content {
    height: 360px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #content {
    display: none;
  }

  #content-2 {
    display: block;
    height: 282px;
    border-color: cyan;
  }

  #content-2 ul {
    max-width: 100%;
    max-height: 100%;
    padding: 19px 0;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #content-2 ul li {
    list-style-type: none;
    margin: 1em;
    border: solid 3px rgba(255, 255, 255, 0.2);
    width: 100%;
    height: 45px;
    padding: 10px 0;
    text-align: center;
  }

  #img-div {
    width: 55.5%;
  }

  #img-div img {
    max-width: 100%;
    width: 73.5%;
  }

  #img-div #geology {
    width: 33%;
  }

  .stats {
    margin-top: 4em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .stats p {
    display: flex;
    flex-direction: column;
    height: 92px;
    font-size: 10px;
    margin: auto 1em;
  }

  P span {
    margin: auto;
    font-size: 14px;
  }

  a:hover {
    opacity: 0.88;
    color: #fff;
  }

  #content-2 li:hover {
    transform: scale(1.03);
    background-color: rgba(255, 255, 255, 0.2);

  }
}

@media (min-width: 1024px) {
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    justify-content: flex-end;
  }

  .container-fluid {
    margin: 1em;
    border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    padding-bottom: 15px;
  }

  .navbar form {
    margin-bottom: 0;
  }

  h1 {
    font-size: 60px;
    margin-left: 0.1em;
    float: left;
  }

  p {
    float: left;
    width: 84%;
  }

  p span {
    margin: 0.6em 0;
    font-size: 16px;
  }

  .text {
    font-size: 16px;
    text-align: left;
  }

  #facts {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10em;
  }

  #facts-content {
    height: 660px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  #content {
    display: none;
  }

  #content-2 {
    display: block;
    height: 282px;
    border-color: cyan;
  }

  #content-2 ul {
    max-width: 100%;
    max-height: 100%;
    padding: 0;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  #content-2 ul li {
    list-style-type: none;
    margin: 0.8em;
    border: solid 3px rgba(255, 255, 255, 0.2);
    width: 79%;
    height: 45px;
    padding: 10px 0;
    text-align: center;
  }

  #img-div img {
    width: 85%;
  }

  #img-div #geology {
    max-width: 100%;
    width: 53%;
    max-height: 100%;
  }

  #img-div #geology {
    width: 33%;
  }

  .stats {
    margin-top: 4em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .stats p {
    margin: auto 1em;
    display: flex;
    flex-direction: column;
    height: 130px;
    font-size: 13px;
  }

  P span {
    margin: auto;
    font-size: 20px;
  }

  a:hover {
    opacity: 0.88;
    color: #fff;
  }

  #content-2 li:hover {
    transform: scale(1.03);
    background-color: rgba(255, 255, 255, 0.2);
  }
}

</style>
