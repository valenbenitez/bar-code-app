import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function Scanner() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 150,
        height: 100,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div>
      {scanResult ? <div>Success: {scanResult}</div> : <div id="reader"></div>}
    </div>
  );
}

export default Scanner;
