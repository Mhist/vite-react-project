import { useRef, useState } from "react";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToIndex = (index: number) => {
    const listNode = listRef.current;
    console.log(index);
    const currentImgNode = listNode?.querySelectorAll("li > img")[index];
    currentImgNode!.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handleVideoClick = ()=>{
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if(nextIsPlaying){
      videoRef.current?.play();      
    }else{
      videoRef.current?.pause();
    }
  };
  return (
    <>
      <div>
        <h1>UseRefExample</h1>
        <input ref={inputRef} type="text" placeholder="请输入内容" />
        <button onClick={() => inputRef.current?.focus()}>聚焦输入框</button>
      </div>
      <div>
        <h1>滚动图片到视图</h1>
        <nav>
          <button onClick={() => scrollToIndex(0)}>Neo</button>
          <button onClick={() => scrollToIndex(1)}>Millie</button>
          <button onClick={() => scrollToIndex(2)}>Bella</button>
        </nav>
        <div>
          <ul ref={listRef}>
            <li>
              <img src="https://picsum.photos/200/1000" alt="Neo" />
            </li>
            <li>
              <img src="https://picsum.photos/200/200" alt="Millie" />
            </li>
            <li>
              <img src="https://picsum.photos/id/237/200/300" alt="Bella" />
            </li>
          </ul>
        </div>
      </div>

      <h1>播放视频</h1>
      <button onClick={handleVideoClick}> {isPlaying ? "暂停" : "播放"} </button>
      <video
        width={250}
        ref={videoRef}
        controls
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
};
export default UseRefExample;
