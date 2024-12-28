import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      header
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-400">
          Created by <strong>Shubham Bane</strong>. Follow me on Instagram:
          <a
            href="https://instagram.com/YourInstagramHandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            @YourInstagramHandle
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
