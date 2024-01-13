export function DecoratedH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <h1
        className={`text-7xl font-extrabold bg-gradient-to-r from-lezzchia to-lezzindigo inline-block text-transparent bg-clip-text py-2 ${
          className || ""
        }`}
      >
        {children}
      </h1>
    </>
  );
}
export function DecoratedH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <h2
        className={`text-5xl font-extrabold bg-gradient-to-r from-lezzchia to-lezzindigo inline-block text-transparent bg-clip-text py-2 ${
          className || ""
        }`}
      >
        {children}
      </h2>
    </>
  );
}
export function DecoratedH3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <h3
        className={`text-4xl font-bold bg-gradient-to-r from-lezzchia to-lezzindigo inline-block text-transparent bg-clip-text py-2 ${
          className || ""
        }`}
      >
        {children}
      </h3>
    </>
  );
}
export function DefaultH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <h1 className={`text-7xl font-extrabold ${className || ""}`}>
        {children}
      </h1>
    </>
  );
}
export function DefaultH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <h1 className={`text-5xl font-extrabold ${className || ""}`}>
        {children}
      </h1>
    </>
  );
}
export function DefaultH3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <h1 className={`text-4xl font-bold ${className || ""}`}>
        {children}
      </h1>
    </>
  );
}
