import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Typing Tips & Tutorials | Typing Master",
  description: "Expert tips, tutorials, and guides to help you become a faster, more accurate typist.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
