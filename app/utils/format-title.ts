export const formatTitle = (title: string) => {
    if (!title) return ''; 
  
    return title.length > 20
      ? title.slice(0, 20) + '...'
      : title
          .split(' ')
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
  };