let iframeElement: HTMLIFrameElement | null = null;
const videoUrl = ref<string>('')
const isVideoOpen: Ref<boolean> = ref(false);

export function useVideoPopup() {
  const playVideo = (videoId: string) => {
    if (typeof window !== 'undefined') {
      const videoOverlay = document.querySelector("#video-overlay");
      videoUrl.value = `https://www.youtube.com/embed/${videoId}`;
      if (!iframeElement) {
        iframeElement = document.createElement("iframe");
        iframeElement.setAttribute("src", videoUrl.value);
        iframeElement.style.width = "60%";
        iframeElement.style.height = "80%";
      }else{
        iframeElement.setAttribute("src", videoUrl.value)
      }
      
      isVideoOpen.value = true;
      videoOverlay?.classList.add("open");
      videoOverlay?.appendChild(iframeElement);
    }
  };

  const closeVideo = () => {
    videoUrl.value = ''
    if (typeof window !== 'undefined') {
      const videoOverlay = document.querySelector("#video-overlay");

      const iframeToRemove = videoOverlay?.querySelector("iframe");
      if (iframeToRemove) {
        iframeToRemove.remove();
      }

      isVideoOpen.value = false;
      videoOverlay?.classList.remove("open");
    }
  };

  return {
    isVideoOpen,
    playVideo,
    closeVideo
  }
}
