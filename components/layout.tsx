import Header from "./header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="container mx-auto px-4 md:px-4 lg:px-12 min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
}
