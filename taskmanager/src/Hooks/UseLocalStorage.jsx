const STORAGE_KEY = "kanbanData";

function getFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error retrieving data from local storage:", error);
    return undefined;
  }
}

function saveToLocalStorage(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
}

export { getFromLocalStorage, saveToLocalStorage };
