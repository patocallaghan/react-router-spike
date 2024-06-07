import type { MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <h1>Index</h1>
  );
}
