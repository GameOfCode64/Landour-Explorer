export const metadata = {
  title: "Admin | Sanity Studio",
  description: "This for Admin only",
  icons: {
    icon: "./logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
