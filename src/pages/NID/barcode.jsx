import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

const Barcode = ({ value }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, value, {
        displayValue: false, 
        height:40,
      });
    }
  }, [value]);

  return <svg ref={barcodeRef} />;
};

export default Barcode;
