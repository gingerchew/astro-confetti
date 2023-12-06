import JSConfetti from 'js-confetti';
let confetti;
export default {
    name: 'Confetti',
    id:'toolbar-confetti',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16"><text x="0" y="14">🎉</text></svg>`,
    init(_canvas, eventTarget) {
        eventTarget.addEventListener('app-toggled', () => {
            if (!confetti) {
                confetti = new JSConfetti()
            }
            confetti.addConfetti();
        })
    }
}