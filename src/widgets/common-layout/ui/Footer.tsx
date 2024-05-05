type FooterProps = {};

export function Footer({}: FooterProps) {
  return (
    <footer className="w-full mt-auto">
      <div className="w-full bg-dark py-6">
        <div className="content-container">
          <nav className="flex items-center gap-6 h-full">
            <div className="cursor-pointer text-dark-foreground transition-colors hover:text-dark-foreground">
              Models
            </div>
            <div className="cursor-pointer text-dark-foreground transition-colors hover:text-dark-foreground">
              Pricing
            </div>
            <div className="cursor-pointer text-dark-foreground transition-colors hover:text-dark-foreground">
              Docs
            </div>
          </nav>
        </div>
      </div>
      <div className="w-full bg-primary py-1 mt-auto">
        <div className="content-container flex justify-between">
          <div className="text-xs">Created by bebraco 2024</div>
        </div>
      </div>
    </footer>
  );
}
