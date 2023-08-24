import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import barba from "@barba/core";

// Register the ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//Hide Warning
gsap.config({ trialWarn: false });

//Page Transition
function pageTransition() {
  //Animate loader
}

//Content Animation
function contentAnimation() {
  ScrollTrigger.refresh(true);
}

//Delay function
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

//Load Barba
barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1500);
        done();
      },

      async enter(data) {
        contentAnimation();
      },

      async once(data) {
        contentAnimation();
      },
    },
  ],
});

//Reload scroll smoother
barba.hooks.afterEnter(() => {
  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    normalizeScroll: true,
  });

  smoother.scrollTo(0);
});

//Fix playing video
barba.hooks.enter((data) => {
  var vids = document.querySelectorAll("video");
  vids.forEach((vid) => {
    var playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {}).catch((error) => {});
    }
  });
});
