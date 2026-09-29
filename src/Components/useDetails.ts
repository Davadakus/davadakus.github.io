import { useState } from "react";

export default function useDetails(initial = false) {
  const [details, setDetails] = useState<boolean>(initial);
  const toggleDetails = () => setDetails((prev) => !prev);
  const closeDetails = () => setDetails(false);
  return { details, toggleDetails, closeDetails };
}
