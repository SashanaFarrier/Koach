// const view = window.scrollY;
const missionSection = document.querySelector(".mission__section");

const missionSectionColumnLeft = missionSection.querySelector(".col__left");

const missionSectionColumnRight = missionSection.querySelector(".col__right");
// console.log(view);
// const body = document.body.getBoundingClientRect();
// const view = missionSection.getBoundingClientRect();
// console.log(view.y, window);

// const observer = new IntersectionObserver((el) => {
//   if (el.isIntersecting) {
//     console.log(el);
//   }
// });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(missionSectionColumnLeft.classList);
    // console.log(entry);
    if (
      entry.target.classList.contains("mission__section") &&
      entry.isIntersecting
    ) {
      missionSectionColumnLeft.classList.remove("opacity-0");
      missionSectionColumnLeft.classList.remove("-translate-x-full");
      console.log(missionSectionColumnLeft.classList);

      missionSectionColumnRight.classList.remove("opacity-0");
      missionSectionColumnRight.classList.remove("translate-x-full");
      missionSectionColumnRight.classList;
    }
  });
});
observer.observe(missionSection);
// if (view >= 2071) {
//   missionSectionColumnLeft.style.transform = "translateX(-100%)";
// }
