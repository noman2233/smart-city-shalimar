import { useEffect } from "react";
export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Shalimar Smartcity`;
  }, [title]);

  return null;
};
