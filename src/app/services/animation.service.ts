import { Injectable } from "@angular/core";

@Injectable()
export class AnimationsService {

  isElementInViewport(element:any){
    const el = element.getBoundingClientRect();
    const cssClass = element.getAttribute('data-animation') ;
    const cssDuration = element.getAttribute('data-animation-duration');
    const cssDelay = element.getAttribute('data-animation-delay');
    const disabledAnimation = element.getAttribute('data-animation-disabled');
    const windowH = window.innerHeight;

    element.style['transition-duration'] = cssDuration;
    element.style['transition-delay'] = cssDelay;

    if(el.top === 0){
      element.classList.add(cssClass);
    }

    if(el.top < windowH && el.top > 0){
      element.classList.add(cssClass);
    }

    if(el.top < 0 || el.top > windowH){
      if(!disabledAnimation){
        element.classList.remove(cssClass);
      }
    }
  }

  handleScrollAction(elements: any) {
    window.addEventListener('scroll', () => {
      elements.forEach((element:any) => this.isElementInViewport(element));
    })

    window.addEventListener('load', () => {
      elements.forEach((element:any) => this.isElementInViewport(element));
    })
  }

  handleGetElements() {
    const elements = document.querySelectorAll('[data-animation]');
    this.handleScrollAction(elements);
  }
}