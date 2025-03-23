import Link from "next/link";

interface SiteFooterProps {
  openTermsModal: () => void;
  openPrivacyModal: () => void;
  openContactModal: () => void;
}

export function SiteFooter({
  openTermsModal,
  openPrivacyModal,
  openContactModal,
}: SiteFooterProps) {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with <span className="font-semibold">Next.js</span> and <span className="font-semibold">shadcn/ui</span>.
          The source code is available on{" "}
          <Link
            href="https://github.com/amoltribhuwan05/nginx-config-generator/releases"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            GitHub
          </Link>.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {/* Buttons to trigger modals */}
          <button onClick={openTermsModal} className="underline underline-offset-4 hover:text-foreground">
            Terms
          </button>
          <button onClick={openPrivacyModal} className="underline underline-offset-4 hover:text-foreground">
            Privacy
          </button>
          <button onClick={openContactModal} className="underline underline-offset-4 hover:text-foreground">
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}
