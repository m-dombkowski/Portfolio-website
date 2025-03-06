import Link from "next/link";

export const NeonetDescription = () => {
  return (
    <>
      <p>
        As a Frontend Developer, I was mainly tasked with creating features,
        fixing, and maintaining frontend functionality of our internal
        application, a dashboard which allowed to visualize data for
        departaments like Marketing or HR.
      </p>
      <p>
        My tasks also included creating and modyfing Landing Pages on
        <Link
          className="underline text-color-text-light-mode-dark dark:text-color-text-darker"
          href="https://www.neonet.pl"
        >
          {" "}
          Neonet
        </Link>{" "}
        and{" "}
        <Link
          className="underline text-color-text-light-mode-dark dark:text-color-text-darker"
          href="https://www.neo24.pl"
        >
          {" "}
          Neo24
        </Link>{" "}
        websites.
      </p>
      <p>
        As well as development, bug fixing, and optimization of our Magento
        plugin for Chrome.
      </p>
    </>
  );
};
