import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

const menuBtn = document.getElementById("menuBtn") as HTMLButtonElement | null;
const mobileMenu = document.getElementById("mobileMenu") as HTMLDivElement | null;

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
