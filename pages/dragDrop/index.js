import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import styles from "../../styles/Home.module.css";

const PictureList = [
  {
    id: 1,
    url: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQFKEx_cbCNhGgiTZcu7dZfP0QgZeP2tUGdUrSwtc_tm67TKpvrsTO_SUkLklFtLPmLEBXxxNMsmUqcUEczrBU",
  },
  {
    id: 2,
    url: "https://pixlr.com/images/index/remove-bg.webp",
  },
  {
    id: 3,
    url: "https://photokit.com/images/removebg_after.webp",
  },
];

const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ canDrop, isOver }, addPicture] = useDrop(() => ({
    accept: "image",
    drop: (item) => {
      addImageToBoard(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: !monitor.canDrop(),
    }),
  }));

  const [{ isOver: isRemove }, removePicture] = useDrop(() => ({
    accept: "image",
    drop: (item) => {
      removeImageFromBoard(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const removeImageFromBoard = (id) => {
    setBoard((board) => board.filter((picture) => picture.id !== id));
  };

  const addImageToBoard = (id) => {
    console.log("image");
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className={styles.Pictures} ref={removePicture}>
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className={styles.Board} ref={addPicture}>
        {board.map((picture) => {
          return <Picture key={picture.id} url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
