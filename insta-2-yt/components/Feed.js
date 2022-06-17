import React from "react";
import Stories from "./Stories";

export default function () {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <div className="col-span-2">
        {/* Seciton */}
        <section>
          {/* Stories */}
          <Stories />

          {/* Posts */}
        </section>

        <section>
          {/* Section */}

          {/* Mini profile */}

          {/* Suggestions */}
        </section>
      </div>
    </main>
  );
}
