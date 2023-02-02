import React from "react";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaqItem } from "./faqItem";

const index = () => {
  const [languages, setLanguages] = useState([
    {
      title: "LINKS梅田について",
      faq: [
        {
          question: "2+3",
          answer: "5",
        },
        {
          question: "3+3",
          answer: "6",
        },
      ],
    },
    {
      title: "各種サービスについて",
      faq: [
        {
          question: "1+1",
          answer: "2",
        },
      ],
    },
    {
      title: "設備について",
    },
    {
      title: "その他",
    },
  ]);

  const [selected, setSelected] = useState();
  const [answer, setAnswer] = useState();

  console.log(answer);
  const handleAnswer = (answer) => {
    setAnswer(answer);
  };
  const [open, setOpen] = useState(false);
  const handleClick = (item) => {
    console.log("Click");
    setOpen(!open);
    setAnswer(null);
    const selectSection = languages.filter(
      (language) => item.id === language.title
    );
    setSelected(selectSection[0]);
  };
  console.log(open);
  console.log(selected);

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <main
          aria-labelledby="main-content-title"
          tabIndex="-1"
          aria-busy="false"
        >
          <div style={{ height: "153px" }}>
            <div className={styles.main_header}>
              <div>Back</div>
              <div className={styles.main_header_1}>
                <div className={styles.main_id}>
                  <h1 className={styles.id}>2</h1>
                </div>
                <div className={styles.main_header_right}>
                  <button
                    aria-disabled="false"
                    type="button"
                    className={styles.main_header_button}
                  >
                    <span className={styles.Unpublish}>Unpublish</span>
                  </button>
                  <div className={styles.button_save}>
                    <button
                      aria-disabled="false"
                      type="button"
                      className={styles.main_header_button}
                    >
                      <span className={styles.save}>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main_center}>
            <div className={styles.main_center_1}>
              <div className={styles.main_section}>
                <div className={styles.main_section_table}>
                  <div className={styles.main_section_table_1}>
                    <div spacing="6" className={styles.main_section_table_2}>
                      <div>
                        <div>
                          <DndContext
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                          >
                            <Container className="p-3" align="center">
                              <SortableContext
                                items={languages.map(
                                  (language) => language.title
                                )}
                                strategy={verticalListSortingStrategy}
                              >
                                <>sections</>({languages.length})
                                {languages.map((language) => (
                                  <SortableItem
                                    key={language.title}
                                    id={language.title}
                                  />
                                ))}
                                {open && selected && (
                                  <div className={styles.select}>
                                    <p style={{ align: "left" }}>name</p>
                                    <div className={styles.faqItem}>
                                      {selected?.title}
                                    </div>
                                    <span>faq({selected?.faq?.length})</span>
                                    {selected?.faq?.map((faq) => (
                                      <FaqItem
                                        faqs={faq}
                                        key={faq.question}
                                        onAnswer={handleAnswer}
                                      />
                                    ))}
                                  </div>
                                )}
                                {open && answer && <>{answer}</>}
                              </SortableContext>
                            </Container>
                          </DndContext>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);
    if (active.id == over.id) {
      handleClick(active);
    }
    if (active.id !== over.id) {
      setLanguages((languages) => {
        console.log("Languages", languages);
        const activeIndex = languages.findIndex(
          (language) => language.title === active.id
        );
        console.log("ACTIVEINDEX", activeIndex);
        const overIndex = languages.findIndex(
          (language) => language.title === over.id
        );
        console.log(arrayMove(languages, activeIndex, overIndex));
        return arrayMove(languages, activeIndex, overIndex);
      });
    }
  }
};

export default index;
