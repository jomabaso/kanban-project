const STORAGE_KEY = 'kanban-board';

export function saveBoard(board){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(board))
}

export function loadBoard() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
}