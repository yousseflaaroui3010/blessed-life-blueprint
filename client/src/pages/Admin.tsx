import { useEffect } from "react";

const STUDIO_URL =
  "https://www.sanity.io/@o1bqvt0p5/studio/y0pvrgum3yp332dr6loclwr1/blb/";

export default function Admin() {
  useEffect(() => {
    window.location.replace(STUDIO_URL);
  }, []);

  return null;
}
