import { LRUCache } from 'typescript-lru-cache';

const cache = new LRUCache<string, any>({
  maxSize: 100, // Fallback cache in memory for short-lived entries
  entryExpirationTimeInMS: 1000 * 60 * 5, // TTL of 5 minutes for in-memory cache
});

// Helper function to manage cache in LocalStorage
const getCacheFromLocalStorage = (key: string) => {
  const cacheItem = localStorage.getItem(key);
  if (cacheItem) {
    const parsedItem = JSON.parse(cacheItem);
    const now = new Date().getTime();

    // Check if the cached item is expired
    if (now > parsedItem.timestamp) {
      // Expired cache
      localStorage.removeItem(key);
      return null;
    }

    return parsedItem.data;
  }
  return null;
};

const setCacheToLocalStorage = (key: string, data: any, ttl: number) => {
  const timestamp = new Date().getTime() + ttl;
  const cacheItem = {
    data,
    timestamp, // Set expiration time in timestamp
  };
  localStorage.setItem(key, JSON.stringify(cacheItem));
};

export const CacheService = {
  // Get cache (first try LocalStorage, then fallback to memory cache)
  get: <T>(key: string): T | null => {
    // Try LocalStorage first
    const cachedDataFromLocalStorage = getCacheFromLocalStorage(key);
    if (cachedDataFromLocalStorage) {
      console.log('Returning data from LocalStorage cache.');
      return cachedDataFromLocalStorage;
    }

    // Fallback to memory cache
    const cachedDataFromMemory = cache.get(key);
    if (cachedDataFromMemory) {
      console.log('Returning data from in-memory cache.');
      return cachedDataFromMemory;
    }

    return null;
  },

  // Set cache (store in both LocalStorage and memory cache)
  set: (key: string, data: any, ttl: number): void => {
    // Store in LocalStorage
    setCacheToLocalStorage(key, data, ttl);
    // Store in memory cache for short-term use
    cache.set(key, data);
    console.log(`Data for key "${key}" cached in LocalStorage and memory.`);
  },

  // Delete cache (from both LocalStorage and memory cache)
  del: (key: string): void => {
    localStorage.removeItem(key);
    cache.delete(key);
    console.log(`Deleted cache for key "${key}" from LocalStorage and memory.`);
  },

  // Clear all cache
  clear: (): void => {
    localStorage.clear();
    cache.clear();
    console.log('Cleared all caches (LocalStorage and memory).');
  },

  // Get cache size (memory only)
  getCacheSize: (): number => {
    return cache.size;
  },
};
