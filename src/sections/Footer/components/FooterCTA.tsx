"use client";

import { Button, Typography } from "@material-tailwind/react";

export const FooterCTA = () => {
  return (
    <div className="relative z-[1] flex flex-col items-center gap-6 pb-12">
      <Typography
        variant="h3"
        color="white"
        className="text-center font-bold"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Ready to start a project?
      </Typography>
      <a href="/contact">
        <Button
          size="lg"
          variant="filled"
          className="bg-white text-black font-bold"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Contact us
        </Button>
      </a>
    </div>
  );
};
