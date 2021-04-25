declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Snipcart: any;
  }
}

const Snipcart = window.Snipcart;

export default Snipcart;
