
"use client";
import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-tailwind/react';
import routes from '../../../constants/routes';

const AreasWeServe = () => (
    <div>
      <Typography variant="h6" color="white" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onResize={undefined} onResizeCapture={undefined}>
        Areas We Serve
      </Typography>
      <ul className="space-y-2">
        <li>
          <Link href={routes.webDesignJohannesburg}>
            <a className="text-gray-400 hover:text-white transition-colors">
              Web Design Johannesburg
            </a>
          </Link>
        </li>
        <li>
          <Link href={routes.webDesignMidrand}>
            <a className="text-gray-400 hover:text-white transition-colors">
              Web Design Midrand
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );

  export default AreasWeServe;