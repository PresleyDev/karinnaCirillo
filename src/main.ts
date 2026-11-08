import './styles/main.css';

const status = document.querySelector<HTMLParagraphElement>(
  '#app-status'
);

if (status) {
  status.textContent = 'Vite e TypeScript funcionando!';
}   