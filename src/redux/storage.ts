export function loadState<T>(key: string): T | undefined {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState) as T;
  } catch (error) {
    return undefined;
  }
}

export async function saveState<T>(key: string, state: T): Promise<void> {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(error);
  }
}
