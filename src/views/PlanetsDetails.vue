<template>
    <!-- <div>
        <section class="flex-container">
            <div class="stars"></div>
            <div class="twinkling"></div>

            <div id="content">
                <ul>
                    <li class="overview-btn"> <a href="#">overview</a> </li>
                    <li class="structure-btn"> <a href="#">structure</a> </li>
                    <li class="surface-btn"> <a href="#">surface</a> </li>
                </ul>
            </div>

            <div id="facts">
                <div id="img-div">
                    <img id="planet" src="planet-<%=foundPlanet.name%>.svg" alt="">
                    <img id="geology" src="" alt="">
                </div>

                <div id="facts-content">
                    <div class="text" id="overview">
                        <h1> {{planets.name}} </h1>
                        <p>{{planets.infos.content}}</p>
                        <p>Source: <a target="_blank" href="">Wikipedia</a> </p>
                    </div>

                    <div class="text hide" id="structure">
                        <h1> {{planets.name}} </h1>
                        <p>{{planets.infos.content}}</p>
                        <p>Source: <a target="_blank" href="">Wikipedia</a> </p>
                    </div>

                    <div class="text hide" id="surface">
                        <h1> {{planets.name}} </h1>
                        <p>{{planets.infos.content}}</p>
                        <p>Source: <a target="_blank" href="">Wikipedia</a> </p>
                    </div>

                    <div id="content-2">
                        <ul>
                            <li class="overview-btn"> <a href="#">overview</a> </li>
                            <li class="structure-btn"> <a href="#">structure</a> </li>
                            <li class="surface-btn"> <a href="#">surface</a> </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="stats">
                <p>rotation time: <span>{{planets.rotation}}</span></p>
                <p>revolution time: <span>{{planets.revolution}}</span></p>
                <p>radius: <span>{{planets.radius}}</span></p>
                <p>average temp: <span>{{planets.temperature}}</span></p>
            </div>
        </section>
    </div> -->
    <div class="destination container">
    <div class="content">
      <img :src="require('@/assets/destination/'+destination.images.png)" alt="" id="dest"> 
      <div class="text">
        <ul class="navigation">
          <li>
            {{destination.name }}
          </li>
        </ul>
        <!-- <div class="h2">{{ destination.name }}</div> -->
        <p class="description">{{ destination.description }}</p>
        <div class="avgs">
          <div class="distance sub1">
            <span class="sub2">avg. distance</span
            >{{ destination.distance }}
          </div>
          <div class="time sub1">
            <span class="sub2">est. travel time</span
            >{{ destination.travel }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import store from "../assets/store"
    export default {
        props: {
            slug: {
                type: String,
                required: true
            },
            planetsSlug: {
                type:String,
                required: true,
            },
            computed: {
                mercury() {
                    return store.mercury.find(
                        mercury => mercury.id ==
                        this.slug
                    )
                }
            }
            
        }
    }
</script>

<style>

</style>