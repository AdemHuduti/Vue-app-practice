<template>
  <div class="container">
    <h1 class="mt-5 text-center display-3">{{ title }}</h1>
    <div class="row">
      <div class="cards mt-5" v-for="item in obj" :key="item.id">
        <div class="content">
          <div class="front">
            <img :src="item.img" alt="imz" class="img-fluid" />
            <h4 class="mt-4">{{item.title}}</h4>
            <div class="details">
              <ul>
                <li><i :class="item.icon1"></i> {{ item.intro }}</li>
                <li><i :class="item.icon2"></i> {{ item.info }}</li>
                <li><i :class="item.icon3"></i> {{ item.people }} </li>
              </ul>
            </div>
          </div>
          <div class="back">
            <img :src="item.logo" alt="logoz" class="img-fluid" />
            <button class="btn btn-outline-dark cards-button">More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: [
        {
          id: 1,
          title: "Title",
          img:
            "https://wallpaperbrowse.com/media/images/Background-Wallpaper-HD-Wallpapers_vVNlOsG.jpg",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/6/65/Baby.tux-800x800.png",
          icon1: "fab fa-android",
          icon2: "fas fa-anchor",
          icon3: "fab fa-btc",
          intro: "Information intro",
          info: "Info infomation",
          people: "10 - 20 people",
          comments: "EDV / IT, Marketing / Werbung / PR, Internet / Multimedia",
          date: "1.1.1111"
        },
        {
          id: 2,
          title: "Nature",
          img:
            "https://wallpaperbrowse.com/media/images/Background-Wallpaper-HD-Wallpapers_vVNlOsG.jpg",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/6/65/Baby.tux-800x800.png",
          icon1: "fas fa-address-card",
          icon2: "fas fa-air-freshener",
          icon3: "fab fa-black-tie",
          intro: "Intro information",
          info: "Info information",
          people: "10 - 20 people"
        },
        {
          id: 3,
          title: "Audi",
          img:
            "https://newevolutiondesigns.com/images/freebies/galaxy-wallpaper-4.jpg",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/6/65/Baby.tux-800x800.png",
          icon1: "fab fa-bitbucket",
          icon2: "fas fa-blender",
          icon3: "fab fa-bluetooth",
          intro: "Intro information",
          info: "Info information",
          people: "10 - 20 people"
        },
        {
          id: 4,
          title: "BMW",
          img:
            "https://i.pinimg.com/originals/57/a3/78/57a378c88099a6366e5bff1b9d5f125d.jpg",
          logo:
            "http://www.yunlinplay.tw/gimg/f/90/907099_lamborghini-hd-wallpapers-1080p.jpg",
          icon1: "fas fa-bomb",
          icon2: "fas fa-bong",
          icon3: "fas fa-book-dead",
          intro: "Intro information",
          info: "Info information",
          people: "10 - 20 people"
        }
      ],
      arr: [],
      title: 'Popular packages'
    };
  }
};
</script>

<style scoped>

.cards {
  perspective: 150rem;
  width: 16rem;
  height: 24rem;
  float: left;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.1);
  transition: transform 1s;
  transform-style: preserve-3d;
}

.cards:hover .content {
  transform: rotateY( 180deg ) ;
  transition: transform 0.5s;
}

.front,
.back {
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(255, 255, 255);
  box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.1);
  text-align: center;
  border-radius: 5px;
  backface-visibility: hidden;
}

.back {
  color: white;
  transform: rotateY( 180deg );
}

.details {
  padding: .7rem;
  text-align: center;
}

.details ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.details ul li {
  padding: .5rem;
}

li:not(:last-child) {
  border-bottom: 1px solid rgb(238, 238, 238);
}

.cards-button {
  margin-top: 3rem;
}

/* MEDIA QUERIS  */

@media (min-width: 1025px) and (max-width: 1280px) {
  .front {
    background: #ff0000
  }
}

@media (min-width: 1024px) and (max-width: 1200px) {
  .front {
    background: #e100ff;
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .front {
    background: #026f77;
  }
}

@media (min-width: 481px) and (max-width: 767px) {

  .cards {
    width: 100%;
    /* margin-right: .6rem; */
  }

  /* .back {
    height: 38rem;
  } */
}

@media (min-width: 320px) and (max-width: 480px) {
  .cards {
    height: 35rem;
    width: 100%;
  }
}

@media only screen and (max-width: 767px),
            only screen and (hover: none) {

              .cards {
                /* height: auto; */
                margin-right: 0;
                margin-bottom: 25rem;
                /* padding: 3rem 0; */
              }

              .front {
                position: relative;
                box-shadow: none;
                height: auto;
              }

               .back {
                transform: rotateY(0);
                height: auto;
                /* clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%); */
              }
              .cards:hover .content {
                transform: rotateY(0);
              }
            }
</style>
