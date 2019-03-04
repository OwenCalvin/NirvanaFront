<template>
    <div class="container-fluid" id="landing">
        <div class="row text-center">
            <div class="col-xs-12 col-md-4 linkLogo">
                <a href="#creation"><i class="fas fa-tree"></i></a>
                <h1>{{Trees}}</h1>
                <h4>trees</h4>
            </div>
            <div class="col-xs-12 col-md-4 linkLogo">
                <a href="#restauration"><i class="fas fa-cloud"></i></a>
                <h1>{{CO2}}</h1>
                <h4>kg</h4>
            </div>
            <div class="col-sm-12 col-md-4 linkLogo">
                <a href="#services"><i class="fas fa-adjust"></i></a>
                <h1>{{Ice}}</h1>
                <h4>kg</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return{
        //OWEN - données venant du serveur
        Trees: "36",
        CO2: "11",
        Ice: "24"
    }
  }
}
</script>

<style>
h1{
    color: #315ef9;
}

h4{
    color: #8ba5fa;
}

.fa-tree,
.fa-cloud,
.fa-adjust {
    transition: transform .3s;
    font-size: 4em;
    margin: 1rem;
    color: #315ef9;
}

.fa-tree:hover,
.fa-cloud:hover,
.fa-adjust:hover {
    -ms-transform: scale(1.2);
    /* IE 9 */
    -webkit-transform: scale(1.2);
    /* Safari 3-8 */
    transform: scale(1.2);
}

</style>


