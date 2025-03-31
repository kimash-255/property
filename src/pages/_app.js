import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
    </>
  );
}
