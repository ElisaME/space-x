type LaunchLinks = {
  flickr?: {
    original?: string[];
  };
  patch?: {
    large?: string | null;
    small?: string | null;
  };
};

export function getLaunchImage(links: LaunchLinks): string | null {
  // Flickr original (prioridad, imagen de lanzamiento)
  const flickrImages = links?.flickr?.original;
  if (Array.isArray(flickrImages) && flickrImages.length > 0) {
    return flickrImages[0];
  }

  // 22da opción Patch grande
  if (links?.patch?.large) {
    return links.patch.large;
  }

  // 3er opción Patch chico
  if (links?.patch?.small) {
    return links.patch.small;
  }

  return '/placeholder.svg';
}
