import React, { useRef } from "react";
import { linkManagementStore } from "../store/link-management-store";

type Booleanish = "true" | "false" | boolean;

export const useDragAndDrop = () => {
  const startDraggingPosition = useRef<number | null>(null);
  const endDraggingPosition = useRef<number | null>(null);
  const { links: stateLinks, addLinks } = linkManagementStore();

  const handleSortLinks = () => {
    const links = [...stateLinks];

    if (
      endDraggingPosition.current === null ||
      startDraggingPosition.current === null
    )
      return;

    const toElement = links[endDraggingPosition.current];
    const fromElement = links[startDraggingPosition.current];
    links[endDraggingPosition.current] = fromElement;
    links[startDraggingPosition.current] = toElement;

    addLinks(links);
  };

  return {
    config: {
      role: "button",
      draggable: "true" as Booleanish,
      onDragStart: (ev: React.DragEvent<HTMLDivElement>) => {
        const draggingPosition = Number(
          ev.currentTarget.getAttribute("data-index")
        );
        ev.dataTransfer.effectAllowed = "move";
        startDraggingPosition.current = draggingPosition;
        ev.currentTarget.classList.add("bg-light-purple");
        ev.dataTransfer.setData("text/plain", ev.currentTarget.id);
      },
      onDragOver: (ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault();
        endDraggingPosition.current = Number(
          ev.currentTarget.getAttribute("data-index")
        );
      },
      onDragEnd: (ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault();
      },
      onDrop: (ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault();
        const id = ev.dataTransfer.getData("text/plain");
        const element = document.getElementById(id);
        element?.classList.remove("bg-light-purple");
        ev.dataTransfer.dropEffect = "move";
        handleSortLinks();
      },
    },
  };
};
