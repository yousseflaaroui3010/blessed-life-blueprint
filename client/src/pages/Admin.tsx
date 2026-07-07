import { useEffect } from "react";

const STUDIO_URL = "https://blessed-life-blueprint.sanity.studio";

export default function Admin() {
  useEffect(() => {
    window.location.replace(STUDIO_URL);
  }, []);

  return null;
}
