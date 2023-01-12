import styles from '../ImageSlider.module.css';

const createEleWithClass = (tag, className) => {
  const ele = document.createElement(tag);
  ele.className = className;
  return ele;
};

class Slides {
  constructor(data) {
    this.data = data;
    this.container = createEleWithClass('div', styles.Slides);
    this.currentIdx = 0;
    this.slides = this.data.map((entry, index) => {
      const slide = createEleWithClass('div', styles.Slide);
      const title = createEleWithClass('h1', styles.SlideTitle);
      const meta = createEleWithClass('p', styles.SlideMeta);
      const more = createEleWithClass('a', styles.SlideMore);
      more.href = '#';
      slide.classList.add(index !== 0 ? styles.Next : styles.ShowMeta);
      meta.innerHTML = entry.meta;
      title.innerHTML = entry.title;
      more.innerHTML = 'Read more';
      slide.appendChild(meta);
      slide.appendChild(title);
      slide.appendChild(more);
      this.container.appendChild(slide);
      return slide;
    });
  }
  mount(container) {
    container.appendChild(this.container);
  }
  onActiveIndexChange(activeIndex) {
    this.currentIdx = activeIndex;
    for (let i = 0; i < this.slides.length; i++) {
      if (activeIndex === i) {
        this.slides[i].classList.remove(styles.Next);
        this.slides[i].classList.remove(styles.Prev);
      } else {
        if (activeIndex > i) {
          this.slides[i].classList.remove(styles.Next);
          this.slides[i].classList.add(styles.Prev);
        } else {
          this.slides[i].classList.add(styles.Next);
          this.slides[i].classList.remove(styles.Prev);
        }
      }
    }
  }
  onMove(indexFloat) {
    this.container.style.transform = `translateY(${
      (indexFloat * 100) / this.slides.length
    }%)`;
  }
  appear() {
    this.container.classList.add(styles.Scrolling);
    this.slides[this.currentIdx].classList.remove(styles.ShowMeta);
  }
  disperse(activeIndex) {
    //this.currentIdx = activeIndex;
    this.slides[this.currentIdx].classList.add(styles.ShowMeta);
    this.container.classList.remove(styles.Scrolling);
    for (let index = 0; index < this.data.length; index++) {
      if (index > activeIndex) {
        this.slides[index].classList.add(styles.Next);
        this.slides[index].classList.remove(styles.Prev);
      } else if (index < activeIndex) {
        this.slides[index].classList.remove(styles.Next);
        this.slides[index].classList.add(styles.Prev);
      } else {
        this.slides[index].classList.remove(styles.Next);
        this.slides[index].classList.remove(styles.Prev);
      }
    }
  }
}

export { Slides };
