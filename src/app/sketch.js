import p5 from 'p5'

// Sketch scope
export default function sketch (p) {
  
  // Setup function
  // ======================================
  p.setup = () => {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight); 
    canvas.parent('sketch'); // target canvas
  }

  // Draw function
  // ======================================
  p.draw = () => {
    p.background('#111');
    p.ellipse(p.width/2, p.height/2, 120, 120);
  }
}
