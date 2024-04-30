import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="hidden lg:block">
          <Image
            src="/images/loginImage.png"
            alt="login Image"
            width={560}
            height={760}
            className="mx-auto"
          />
        </div>
        <div className="mx-auto">
            fdsmgoekgnejn
        </div>
      </div>
    </main>
  );
};

export default page;
