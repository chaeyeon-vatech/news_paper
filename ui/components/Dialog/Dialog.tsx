// Import necessary libraries
import React, { ReactNode, useEffect, useRef } from "react";
import styled from "@emotion/styled";

// Define styles for the dialog container
const DialogContainer = styled("div")(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000 /* Adjust z-index as needed */,
}));

const ContentContainer = styled("div")(() => ({
  background: "#fff",
  borderRadius: "4px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  padding: "20px",
}));

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, children }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <DialogContainer>
      <ContentContainer ref={dialogRef}>{children}</ContentContainer>
    </DialogContainer>
  );
};

export default Dialog;
