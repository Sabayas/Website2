import React from "react";

const ProductViewer = () => {
  return (
    <section id="product-viewer">
      <h2>Take a closer look</h2>

      <div className="controls">
        <p className="info">Macbook Pro 16 in Space Black</p>
      </div>

      <div className="flex-center gap-5 mt-5">
        <div className="flex-between bg-neutral-800 rounded-full px-6 py-3 gap-4;">
          <div className="bg-neutral-300 rounded-full" />
          <div className="bg-neutral-900" />
        </div>

        <div className="small-medium flex-between bg-neutral-800 rounded-full px-6 py-2.5 gap-2">
          <div>
            <p>14</p>
          </div>
          <div>
            <p>16</p>
          </div>
        </div>
      </div>

      <p className="text-white text-4xl">Render Canvas</p>
    </section>
  );
};

export default ProductViewer;
