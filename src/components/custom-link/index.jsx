import { Link } from "react-router-dom";

export default function CustomLink(props) {
  const { children } = props;
  return (
    <Link style={{ textDecoration: "none" }} {...props}>
      {children}
    </Link>
  );
}
