import '../style/layout.css';

export const metadata = {
  title: 'Login Page'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}
        <script src='../script/script.js'></script>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  )
}
