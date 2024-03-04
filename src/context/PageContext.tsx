export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='h-[calc(100vh-90px)] overflow-x-hidden overflow-y-scroll'>
      {children}
    </section>
  );
}
