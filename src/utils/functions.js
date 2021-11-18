export const typeRecognizer = (object) => {
  if ("album_type" in object) {
    return "Album";
  } else if (object.type === "show") {
    return "Podcast";
  }
};

export const getOwner = (object) => {
  if ("artists" in object) {
    return object.artists[0].name;
  } else if ("publisher" in object) {
    return object.publisher;
  }
};

export const getRelatedItemsCount = (object) => {
  if ("tracks" in object) {
    return `${object.tracks.items.length} Songs`;
  } else if ("total_episodes") {
    return `${object.total_episodes} Episodes`;
  }
};

export const pathFinder = (pathname) => {
  return pathname.slice(1).split("/")[0];
};

export const msToMinutesAndSeconds = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + " min " + (seconds < 10 ? "0" : "") + seconds + " sec";
};

export const getShortenedText = (text) => {
  return text.slice(0, 150) + "...";
};
