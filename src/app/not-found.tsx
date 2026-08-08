import Link from "next/link";
export default function NotFound() { return <div className="shell not-found"><div><p className="eyebrow">404</p><h1>This page has drifted away.</h1><Link href="/" className="button button-dark">Return home</Link></div></div>; }
