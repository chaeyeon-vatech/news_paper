import React, { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface DialogPopoverProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const DialogPopover: React.FC<DialogPopoverProps> = ({
  anchorEl,
  open,
  onClose,
  children,
}) => {
  const popoverRef = useRef(document.createElement("div"));
  const childrenRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (anchorEl && open && children) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const popoverElement = popoverRef.current;

      popoverElement.style.position = "absolute";
      popoverElement.style.top = `${anchorRect.bottom}px`;
      popoverElement.style.left = `${anchorRect.left}px`;

      // 팝오버 내용을 렌더링
      if (Array.isArray(children)) {
        // 팝오버 내용이 배열인 경우 모든 엘리먼트를 렌더링
        children.forEach(child => {
          if (React.isValidElement(child)) {
            childrenRef.current = document.createElement("div");
            ReactDOM.render(child, childrenRef.current);
            popoverElement.appendChild(childrenRef.current);
          }
        });
      } else if (React.isValidElement(children)) {
        // 팝오버 내용이 단일 엘리먼트인 경우 해당 엘리먼트만 렌더링
        childrenRef.current = document.createElement("div");
        ReactDOM.render(children, childrenRef.current);
        popoverElement.appendChild(childrenRef.current);
      }

      // 팝오버를 문서의 루트 요소에 추가
      document.getElementById("root")?.appendChild(popoverElement);

      return () => {
        if (childrenRef.current) {
          ReactDOM.unmountComponentAtNode(childrenRef.current);
          popoverElement.removeChild(childrenRef.current);
        }
        document.getElementById("root")?.removeChild(popoverElement);
      };
    }
  }, [anchorEl, open, children]);

  return open && anchorEl
    ? ReactDOM.createPortal(null, popoverRef.current)
    : null;
};

export default DialogPopover;
