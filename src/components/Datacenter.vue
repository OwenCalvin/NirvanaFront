<template>
    <div>
        <!-- Landing Page -->
        <section class="landingIntro" id="intro">
            <section class="landingInner">
                <div class="landingContent">
                    <section class="os-animation" data-os-animation="fadeInUp" data-os-animation-delay="0s">
                        <h3>Datacenter Watt</h3>
                        <h1>{{nbWatt}}</h1>
                    </section>
                    
                </div>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    data() {
    return{
        //OWEN - données venant du serveur
        nbWatt: "567.23"
    }
  }
}
</script>

<style>
.landingIntro {
    height: 250px;
    width: 100%;
    margin: auto;
    background: #315ef7;
    background-size: cover;
    display: table;
}

.landingIntro .landingInner {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    max-width: none;
}

.landingContent {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.landingContent h1 {
    color: white;
    font-size: 500%;
    text-transform: uppercase;
    text-shadow: 1px 1px 15px #000;
}

.landingContent h3 {
    color: white;
    font-size: 250%;
    font-weight: 500;
    text-shadow: 1px 1px 10px #000;
}

</style>


