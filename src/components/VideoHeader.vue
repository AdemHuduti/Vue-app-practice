<template>
  <div class="parent">
    <video id="background-video" playsInline autoPlay muted loop>
      <source src="../video/Snow-motion.mp4" type='video/mp4' />
      <source src="../video/Snow-motion.webm" type="video/webm ; codecs=vp9" />
    </video>
    <div class="purple">
      <div class="col-lg 12">
        <span>Lorem ipsum dolor sit </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.parent {
  position: relative;
}
#background-video {
  width: 100%;
  height: 100%;
}

.purple {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  background-color: #8b80f9;
  color: #fff;
  text-transform: uppercase;
}


</style>
