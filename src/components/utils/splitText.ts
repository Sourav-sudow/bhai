import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SplitTextOptions {
  type: string;
  linesClass?: string;
}

export class SplitText {
  chars: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  elements: HTMLElement[] = [];

  constructor(elements: string | string[], options: SplitTextOptions) {
    const targetElements = typeof elements === 'string' 
      ? Array.from(document.querySelectorAll(elements))
      : elements.flatMap(selector => Array.from(document.querySelectorAll(selector)));

    this.elements = targetElements as HTMLElement[];
    
    if (options.type.includes('chars')) {
      this.splitToChars();
    }
    
    if (options.type.includes('lines')) {
      this.splitToLines(options.linesClass);
    }
  }

  private splitToChars() {
    this.elements.forEach(element => {
      const text = element.textContent || '';
      element.textContent = '';
      
      const chars = text.split('').map(char => {
        const span = document.createElement('span');
        span.style.display = 'inline-block';
        span.textContent = char;
        element.appendChild(span);
        return span;
      });
      
      this.chars.push(...chars);
    });
  }

  private splitToLines(linesClass?: string) {
    this.elements.forEach(element => {
      const words = (element.textContent || '').split(' ');
      element.textContent = '';
      
      let currentLine: HTMLElement[] = [];
      const container = document.createElement('div');
      container.style.display = 'inline-block';
      if (linesClass) {
        container.className = linesClass;
      }
      
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + (index < words.length - 1 ? ' ' : '');
        container.appendChild(span);
        currentLine.push(span);
      });
      
      element.appendChild(container);
      this.lines.push(container);
    });
  }
}

gsap.registerPlugin(ScrollTrigger);

interface Para {
  element: string;
  split?: SplitText;
}

const paras: Para[] = [
  {
    element: ".about-info p",
  },
  {
    element: ".whatido-info p",
  },
  {
    element: ".career-info p",
  },
];

const titles = [
  {
    element: ".about-info h2",
  },
  {
    element: ".whatido-info h2",
  },
  {
    element: ".career-info h2",
  },
  {
    element: ".techstack h2",
  },
];

export default function setSplitText() {
  paras.forEach((para) => {
    if (para.split) return;

    para.split = new SplitText(para.element, {
      type: "lines",
      linesClass: "split-line",
    });

    gsap.from(para.split.lines, {
      scrollTrigger: {
        trigger: para.element,
        start: "top 80%",
      },
      duration: 1,
      y: 200,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
    });
  });

  titles.forEach((title) => {
    if (title.split) return;

    title.split = new SplitText(title.element, {
      type: "chars,lines",
      linesClass: "split-line",
    });

    gsap.from(title.split.chars, {
      scrollTrigger: {
        trigger: title.element,
        start: "top 80%",
      },
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.02,
      ease: "power3.out",
    });
  });
}

ScrollTrigger.addEventListener("refresh", () => setSplitText());
