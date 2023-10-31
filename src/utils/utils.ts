export const extractIdFromURL = (url: string): number | null => {
  
    const match = url.match(/\/(\d+)\/$/);
    if (match) {
      return parseInt(match[1], 10);
    }
  
    return null;
  }


export const getPageNumberFromURL = (url: string | null) => {
    if (url) {
      const match = /page=(\d+)/.exec(url);
      if (match) {
        return parseInt(match[1], 10);
      }
    }
    return null;
};