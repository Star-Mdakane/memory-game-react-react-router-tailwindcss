import { THEMES } from "../public/themes.jsx";

export const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

export const createGameCards = (theme, gridSize) => {
    const pairsNeeded = (gridSize * gridSize) / 2;
    const themeData = THEMES[theme].slice(0, pairsNeeded);

    const cards = themeData.flatMap((item) => [
        { id: `${item.pairId}-a`, ...item },
        { id: `${item.pairId}-b`, ...item }
    ])

    return shuffle(cards);
}

export const gameTimer = (() => {
    let running = false;
    let startTime = 0;
    let elapsed = 0;

    return {
        start() {
            if (running) return;
            running = true;
            startTime = performance.now() - elapsed
        },

        pause() {
            if (!running) return;
            elapsed = performance.now() - startTime;
            running = false;
        },

        resume() {
            if (running) return;
            running = true;
            startTime = performance.now() - elapsed;
        },

        stop() {
            if (!running) return;
            elapsed = performance.now() - startTime;
            running = false;
        },

        reset() {
            running = false;
            startTime = 0;
            elapsed = 0;
        },

        getTime() {
            return running ? performance.now() - startTime : elapsed
        },

        getFormatted() {
            const ms = running ? performance.now() - startTime : elapsed;
            const mins = Math.floor(ms / 60000);
            const secs = Math.floor((ms % 60000) / 1000);
            const cs = Math.floor((ms % 1000) / 10);
            return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
        },

        get isRunning() {
            return running
        }
    }

})();
